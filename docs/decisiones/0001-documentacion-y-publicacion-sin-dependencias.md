# Documentación y publicación sin dependencias

Fecha: 2026-08-22
Estado: vigente

## Contexto

El portfolio necesita controles repetibles y documentación recuperable desde el repositorio, pero es un sitio estático pequeño y no justifica incorporar un gestor documental ni una cadena de build.

## Decisión

Mantener arquitectura, operación y decisiones dentro del repositorio. Centralizar las validaciones en un script de la biblioteca estándar de Python y reutilizarlo desde desarrollo local, Git hooks y GitHub Actions. Proveer scripts deterministas para changelog, ADR y publicación confirmada.

## Consecuencias

- El flujo no agrega dependencias al sitio.
- La verificación es igual en local y CI.
- La publicación requiere confirmación humana explícita.
- El hook debe activarse una vez por clon.
