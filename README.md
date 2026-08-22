# Portfolio — Hernán de Haro

Portfolio estático, responsive y sin dependencias. Está diseñado para publicarse directamente en GitHub Pages, Cloudflare Pages, Netlify o cualquier hosting estático.

## Desarrollo local

Abrí `index.html` directamente o iniciá un servidor local:

```powershell
python -m http.server 4173
```

Luego visitá `http://localhost:4173`.

## Agregar proyectos

Duplicá una tarjeta con la clase `.project-card` en `index.html`. Si el proyecto merece un caso de estudio, agregá una página dentro de una carpeta propia y enlazala desde la tarjeta.

## Verificar y publicar

```powershell
python scripts/verificar.py
python scripts/publicar.py --vista-previa
python scripts/publicar.py
```

La publicación verifica primero el repositorio, muestra los archivos incluidos y exige una confirmación explícita antes de crear el commit y hacer push. La operación completa está documentada en `docs/OPERACION.md`.
