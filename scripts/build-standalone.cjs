const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),dist=path.join(root,'dist');
let html=fs.readFileSync(path.join(dist,'index.html'),'utf8');
html=html.replace('<link rel="stylesheet" href="style.css">','<style>'+fs.readFileSync(path.join(dist,'style.css'),'utf8')+'</style>');
html=html.replace('assets/logo.jfif','data:image/jpeg;base64,'+fs.readFileSync(path.join(dist,'assets/logo.jfif')).toString('base64'));
html=html.replace('<script src="domain.js"></script><script src="app.js"></script>','<script>'+fs.readFileSync(path.join(dist,'domain.js'),'utf8')+'</script><script>'+fs.readFileSync(path.join(dist,'app.js'),'utf8')+'</script>');
fs.writeFileSync(path.join(root,'Dom-Fernando-Painel-Local.html'),html);
console.log('Arquivo único atualizado: Dom-Fernando-Painel-Local.html');
