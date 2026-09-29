# rychlá kontrola: načtení bez chyb v cs i en, přepnutí vzhledu
import sys
from playwright.sync_api import sync_playwright
url=sys.argv[1] if len(sys.argv)>1 else 'file:///mnt/user-data/outputs/agility-plan.t.html'
with sync_playwright() as p:
    b=p.chromium.launch(); 
    for lang in ['cs','en']:
        ctx=b.new_context(viewport={'width':412,'height':915},device_scale_factor=1)
        pg=ctx.new_page(); errs=[]
        pg.on('pageerror',lambda e: errs.append(str(e))); pg.on('console',lambda m: errs.append('console:'+m.text) if m.type=='error' else None)
        pg.goto(url); pg.wait_for_timeout(500)
        pg.evaluate("(l)=>{localStorage.setItem('agility-lang-v1',JSON.stringify(l));}",lang); pg.reload(); pg.wait_for_timeout(900)
        info=pg.evaluate("()=>({lang:LANG,html:document.documentElement.lang,title:document.title,nav:[...document.querySelectorAll('.nav button')].map(b=>b.textContent.trim()),miss:Object.keys(TR_MISS).length})")
        print(lang,info,'errors:',errs[:5])
        ctx.close()
    b.close()
