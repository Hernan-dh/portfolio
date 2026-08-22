# Arquitectura

## Propósito

Portfolio estático de Hernán de Haro. Presenta su perfil y proyectos e integra Agentic Twin como aplicación externa.

## Componentes

```text
Navegador
├── index.html       contenido y estructura
├── styles.css      presentación responsive
├── script.js       menú, animaciones y año
└── iframe HTTPS ── Agentic Twin en Render
```

No existen backend, base de datos, build ni dependencias locales. Google Fonts y Agentic Twin son recursos externos; si fallan, el contenido principal sigue disponible.

## Límites de confianza

- El portfolio no recibe ni persiste datos del visitante.
- La conversación incrustada pertenece a Agentic Twin y se ejecuta en Render.
- El `iframe` solo recibe permiso de escritura en el portapapeles.
- Los enlaces externos se abren con aislamiento de la ventana de origen.

## Decisiones relacionadas

- [Documentación y publicación sin dependencias](decisiones/0001-documentacion-y-publicacion-sin-dependencias.md)
