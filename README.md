# CyberNova Solutions – Front-End


- Stack: React + Vite + HTML/CSS/JS.
- Rutas: Home, /servicios, /servicios/:id, /login, /admin/servicios, /admin/servicios/:id.
- Datos: services.json + localStorage (simula BD/CRUD).
- Login demo: **admin / 1234**.


## Local
npm i
npm run dev


## Build
npm run build


## Deploy (GitHub Pages)
1. Ajusta `base` en `vite.config.js` al nombre del repo.
2. Publica la carpeta `dist/` en la rama `gh-pages`.
3. Activa Pages: Settings → Pages → Branch `gh-pages`.