# Sestaví HandlerMap do jednoho HTML souboru.
#   python3 assemble.py                         -> /mnt/user-data/outputs/agility-plan.html (všechny moduly)
#   python3 assemble.py --out X.html            -> jiný výstup
#   python3 assemble.py --base DIR              -> základní zdroje z jiné složky (výchozí = složka tohoto skriptu)
#   python3 assemble.py --mods r_comp.js,DIR/s.js -> jen vybrané moduly (cesty relativně k --base nebo absolutní)
#   python3 assemble.py --test                  -> navíc testovací stránka se stejným obalem jako artefakt (vedle výstupu, přípona .t.html)
# Modul = soubor .js; když vedle leží .css se stejným jménem, přidá se do stylů, a slovník i18n/en_<jméno>.json do překladů.
import argparse, glob, json, os, sys
ap=argparse.ArgumentParser()
ap.add_argument('--base',default=os.path.dirname(os.path.abspath(__file__)))
ap.add_argument('--out',default='/mnt/user-data/outputs/agility-plan.html')
ap.add_argument('--mods',default=None)
ap.add_argument('--test',action='store_true')
a=ap.parse_args()
B=a.base.rstrip('/')+'/'
HEAD='a_head.html'; BODY='b_body.html'
CORE='c_pre.js p_helpers.js p_i18n.js'.split()
BASE='p_def.js p_gen.js p_calc.js p_db.js c_core_a.js c_plan.js d_feat.js e_export.js f_anim.js f_video.js g_3d.js h_gen.js i_more.js j_ana.js k_start.js l_split.js m_reader.js m_route.js n_import.js o_field.js'.split()
CSS=['x_modern.css']              # společné styly nového vzhledu (když existují)
MODS='x_home.js r_comp.js s_dstat.js t_week.js u_share.js v_sync.js w_club.js y_vana.js'.split()
TAIL='z_init.js q_pwa.js'.split()
def rd(p): return open(p,encoding='utf-8').read()
def path(p): return p if os.path.isabs(p) else B+p
mods=[m for m in (a.mods.split(',') if a.mods is not None else MODS) if m]
mods=[m for m in mods if os.path.exists(path(m))]
css=[rd(path(c)) for c in CSS if os.path.exists(path(c))]
for m in mods:
    c=path(m)[:-3]+'.css'
    if os.path.exists(c): css.append(rd(c))
# slovníky: základní i18n/en_*.json + slovníky modulů
dic=[]
for f in sorted(glob.glob(B+'i18n/en_*.json')):
    dic.append((f,rd(f)))
for m in mods:
    stem=os.path.basename(m)[:-3]; f=os.path.dirname(path(m))+'/i18n/en_'+stem+'.json'
    if os.path.exists(f) and all(os.path.abspath(f)!=os.path.abspath(x[0]) for x in dic): dic.append((f,rd(f)))
i18n=[]
for f,t in dic:
    try: json.loads(t)
    except Exception as e: print('CHYBA slovníku',f,e,file=sys.stderr); sys.exit(1)
    i18n.append('i18nAdd('+t.strip()+');')
scripts=[rd(path(f)) for f in CORE]+i18n+['i18nStart();']+[rd(path(f)) for f in BASE]+[rd(path(m)) for m in mods]+[rd(path(f)) for f in TAIL]
html=rd(path(HEAD))+('<style>\n'+'\n'.join(css)+'\n</style>\n' if css else '')+rd(path(BODY))+'<script>\n'+'\n'.join(scripts)+'\n</script>\n'
os.makedirs(os.path.dirname(os.path.abspath(a.out)),exist_ok=True)
open(a.out,'w',encoding='utf-8').write(html)
print('assembled',a.out,len(html),'mods:',','.join(os.path.basename(m) for m in mods) or '-','dict:',len(dic))
if a.test:
    pre='<!doctype html><html lang="cs"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>:root{color-scheme:light}body{margin:0;font:14px system-ui,sans-serif;background:#fafaf8}[hidden]{display:none!important}</style></head><body>'
    t=a.out[:-5]+'.t.html' if a.out.endswith('.html') else a.out+'.t.html'
    open(t,'w',encoding='utf-8').write(pre+html)
    print('test page',t)
