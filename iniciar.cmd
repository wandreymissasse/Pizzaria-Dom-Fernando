@echo off
cd /d "%~dp0"
echo Abra http://127.0.0.1:4173 no navegador.
echo Mantenha esta janela aberta durante o uso. Ctrl+C encerra o servidor.
node server.cjs
pause
