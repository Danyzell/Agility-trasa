# Sestaví index.html pro GitHub Pages: obal (pre) z aktuální verze + aplikace z /home/claude/build
import subprocess, re, sys
R='/home/claude/agility-trasa/'
cur=open(R+'index.html',encoding='utf-8').read()
pre=cur[:cur.index('<title>')]
pre=pre.replace('<html lang="cs">','<html lang="cs">')
subprocess.run(['python3','/home/claude/build/assemble.py','--out','/tmp/claude-0/-home-claude-agility-trasa/4195a19a-b554-56cd-87cb-b944821de02e/scratchpad/rel_app.html'],check=True,capture_output=True)
app=open('/tmp/claude-0/-home-claude-agility-trasa/4195a19a-b554-56cd-87cb-b944821de02e/scratchpad/rel_app.html',encoding='utf-8').read()
open(R+'index.html','w',encoding='utf-8').write(pre+app+'\n</body></html>\n')
print('index.html',len(pre+app))
