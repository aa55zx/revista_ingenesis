# INGÉNESIS - Versión HTML Estática

Este es el proyecto INGÉNESIS convertido a HTML estático desde Laravel.

## Estructura del Proyecto

```
proyecto_servicio_html_prototu/
├── css/
│   └── style.css          # Estilos principales
├── js/
│   └── app.js            # JavaScript para interactividad
├── images/               # Carpeta para las imágenes
├── index.html            # Página de inicio
├── publicaciones.html    # Página de publicaciones
└── [otras páginas HTML]  # Páginas adicionales
```

## Instalación y Uso

### 1. Copiar las Imágenes

Debes copiar todas las imágenes desde el proyecto Laravel original:

**Desde:** `C:\Users\merin\OneDrive\Escritorio\proyecto_de_servicio\public\images`
**Hacia:** `C:\Users\merin\OneDrive\Escritorio\proyecto_servicio_html_prototu\images`

### 2. Abrir el Proyecto

Simplemente abre cualquier archivo HTML en tu navegador web:
- `index.html` - Página principal
- `publicaciones.html` - Página de publicaciones
- [etc.]

### 3. Servidor Local (Opcional)

Para mejor funcionamiento, puedes usar un servidor local:

**Opción 1: Python**
```bash
cd C:\Users\merin\OneDrive\Escritorio\proyecto_servicio_html_prototu
python -m http.server 8000
```
Luego abre: http://localhost:8000

**Opción 2: PHP**
```bash
cd C:\Users\merin\OneDrive\Escritorio\proyecto_servicio_html_prototu
php -S localhost:8000
```
Luego abre: http://localhost:8000

**Opción 3: Live Server (VS Code)**
Si usas Visual Studio Code, instala la extensión "Live Server" y haz clic derecho en index.html > "Open with Live Server"

## Características

- ✅ Diseño responsivo (móvil y escritorio)
- ✅ Navegación con dropdowns
- ✅ Animaciones y efectos visuales
- ✅ Hero section con slideshow de fondo
- ✅ Botón de scroll to top
- ✅ Footer institucional con mapa
- ✅ Sin dependencias de backend

## Páginas Incluidas

1. **index.html** - Página de inicio
2. **publicaciones.html** - Listado de publicaciones y artículos

### Páginas pendientes (puedes crearlas siguiendo el mismo patrón):
- comite-editorial.html
- politicas.html
- normas-editoriales.html
- tipos-contribuciones.html
- preparacion-manuscritos.html
- carta-originalidad.html
- lista-comprobacion.html
- generador-citas.html
- sobre-revista.html
- descripcion.html
- convocatorias.html
- indexaciones.html
- contacto.html
- protocolo-oai.html
- frecuencia.html
- enfoque-alcance.html
- derechos-autor.html
- declaracion-privacidad.html
- proceso-evaluacion.html

## Notas Importantes

### Imágenes Requeridas

Asegúrate de tener estas imágenes en la carpeta `images/`:

**Logos institucionales:**
- logo-gobierno-de-mexico.png
- logo-educación.png
- logo-tecnm.png
- logo-ito.png
- logo-posgrado.png
- logo-ingenesis.png

**Imágenes de contenido:**
- investigación-cientifica.jpg
- tecnologia.jpg
- ciencia-general.jpg
- estudiantes-trabajando.jpeg
- laboratorio.jpg
- ilustracion-ciencia.jpg
- citea-2025.jpg
- edificio-posgrado.jpg
- edificio-tecnm.jpg
- reunion-tecnm.jpg

### Personalización

Puedes personalizar fácilmente los colores editando las variables CSS en `css/style.css`:

```css
:root {
    --color-primary: #C85A1F;      /* Naranja institucional */
    --color-secondary: #E62B1E;    /* Rojo institucional */
    --color-dark: #2C3E50;
    /* ... más variables */
}
```

## Diferencias con el Proyecto Laravel

- No requiere servidor PHP ni base de datos
- Las rutas usan archivos HTML directos en lugar de rutas Laravel
- No hay procesamiento backend (todo es estático)
- Las imágenes se referencian directamente desde la carpeta `images/`

## Soporte

Si encuentras algún problema o necesitas agregar más páginas, sigue el patrón de las páginas existentes:
1. Copia la estructura HTML
2. Actualiza el contenido
3. Mantén los mismos estilos y clases CSS
4. Actualiza los enlaces de navegación

---

**Proyecto:** INGÉNESIS - Revista Científica Multidisciplinaria
**Institución:** Instituto Tecnológico de Oaxaca
**Versión:** HTML Estática (Prototipo)
