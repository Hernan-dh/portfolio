# Operación

## Ejecución local

```powershell
python -m http.server 4173
```

Abrir `http://localhost:4173`. El agente incrustado requiere conexión a Internet.

## Verificación

```bash
./scripts/verificar.sh
```

En Windows también puede ejecutarse `python scripts/verificar.py`. Valida diffs, sintaxis, referencias locales, anclas, documentación esencial, archivos privados, tamaños y posibles secretos.

Para activar la verificación antes de cada commit:

```bash
python scripts/instalar_hooks.py
```

GitHub Actions invoca el mismo verificador; no mantiene reglas duplicadas.

## Documentación

```bash
python scripts/documentar.py changelog
python scripts/documentar.py decision "Título de la decisión"
```

El changelog se reconstruye desde commits convencionales. Los ADR se crean como borradores numerados.

## Publicación

```bash
python scripts/publicar.py --vista-previa
python scripts/publicar.py
```

El primer comando no modifica Git. El segundo verifica, muestra todos los archivos incluidos y exige escribir `PUBLICAR` antes de preparar, confirmar y subir cambios. Nunca realiza push forzado.

El título y la descripción generados pueden reemplazarse cuando sea necesario:

```bash
python scripts/publicar.py --titulo "feat: describir cambio" --descripcion "Resumen del alcance y propósito."
```

## Despliegue

El repositorio puede publicarse en cualquier hosting estático. No requiere comando de build; el directorio de publicación es la raíz.
