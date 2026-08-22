# Instrucciones para agentes

## Documentación continua

- Documentar en la misma tarea los cambios funcionales, técnicos u operativos duraderos.
- Actualizar `docs/ARQUITECTURA.md` cuando cambien componentes, integraciones o flujos.
- Actualizar `docs/OPERACION.md` cuando cambien verificación, publicación o despliegue.
- Crear un ADR solo cuando existan alternativas relevantes y la decisión no sea evidente en el código.
- No documentar cambios cosméticos ni refactors sin cambios de comportamiento.
- No incluir credenciales, datos privados ni valores locales en archivos versionados.

## Publicación

- Ejecutar `./scripts/verificar.sh` antes de publicar.
- No crear commits ni hacer push sin autorización explícita del usuario.
- No usar push forzado.
