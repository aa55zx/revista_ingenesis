# 🚀 Guía de Finalización del Proyecto INGÉNESIS HTML

## ✅ Archivos Ya Creados

### Estructura Principal
- ✅ `css/style.css` - Estilos completos
- ✅ `js/app.js` - JavaScript con todas las funcionalidades
- ✅ `README.md` - Documentación general

### Páginas HTML Creadas
- ✅ `index.html` - Página de inicio
- ✅ `publicaciones.html` - Listado de publicaciones
- ✅ `comite-editorial.html` - Comité editorial
- ✅ `politicas.html` - Políticas editoriales

## 📋 Pasos Siguientes

### 1. COPIAR LAS IMÁGENES (IMPORTANTE)

Necesitas copiar TODAS las imágenes desde el proyecto Laravel al proyecto HTML:

**Comando para copiar en PowerShell:**
```powershell
Copy-Item -Path "C:\Users\merin\OneDrive\Escritorio\proyecto_de_servicio\public\images\*" -Destination "C:\Users\merin\OneDrive\Escritorio\proyecto_servicio_html_prototu\images\" -Recurse
```

**O manualmente:**
1. Abre: `C:\Users\merin\OneDrive\Escritorio\proyecto_de_servicio\public\images`
2. Selecciona TODAS las imágenes
3. Copia y pega en: `C:\Users\merin\OneDrive\Escritorio\proyecto_servicio_html_prototu\images`

### 2. VERIFICAR QUE TIENES ESTAS IMÁGENES

#### Logos institucionales:
- [ ] logo-gobierno-de-mexico.png
- [ ] logo-educación.png
- [ ] logo-tecnm.png
- [ ] logo-ito.png
- [ ] logo-posgrado.png
- [ ] logo-ingenesis.png

#### Imágenes de contenido:
- [ ] investigación-cientifica.jpg
- [ ] tecnologia.jpg
- [ ] ciencia-general.jpg
- [ ] estudiantes-trabajando.jpeg
- [ ] laboratorio.jpg
- [ ] ilustracion-ciencia.jpg
- [ ] citea-2025.jpg
- [ ] edificio-posgrado.jpg
- [ ] edificio-tecnm.jpg
- [ ] reunion-tecnm.jpg

### 3. PÁGINAS PENDIENTES POR CREAR

Necesitas crear estas páginas HTML adicionales. Puedes usar las páginas existentes como plantilla:

#### Menú "Publicar":
- [ ] `normas-editoriales.html`
- [ ] `tipos-contribuciones.html`
- [ ] `preparacion-manuscritos.html`
- [ ] `carta-originalidad.html`
- [ ] `lista-comprobacion.html`
- [ ] `generador-citas.html`

#### Menú "Acerca de INGÉNESIS":
- [ ] `sobre-revista.html`
- [ ] `descripcion.html`
- [ ] `convocatorias.html`
- [ ] `indexaciones.html`
- [ ] `contacto.html`
- [ ] `protocolo-oai.html`
- [ ] `frecuencia.html`
- [ ] `enfoque-alcance.html`
- [ ] `derechos-autor.html`
- [ ] `declaracion-privacidad.html`
- [ ] `proceso-evaluacion.html`

### 4. CÓMO CREAR LAS PÁGINAS FALTANTES

Para cada página faltante:

1. **Copia** uno de los archivos HTML existentes como plantilla
2. **Actualiza** el contenido específico de esa sección
3. **Mantén** la misma estructura:
   - Header con logos
   - Navegación (actualizar clase `active`)
   - Page header
   - Contenido principal
   - Footer

**Ejemplo - Crear `contacto.html`:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Contacto - INGÉNESIS">
    <title>Contacto - INGÉNESIS</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Copiar header desde index.html -->
    <!-- Copiar navegación desde index.html -->
    <!-- Actualizar clase 'active' en el menú apropiado -->
    
    <main class="main-content">
        <div class="page-header">
            <div class="container">
                <h1>Contacto</h1>
                <p>Información de contacto de INGÉNESIS</p>
            </div>
        </div>
        
        <section class="container">
            <div class="content-section">
                <h2>Contacto</h2>
                <!-- TU CONTENIDO AQUÍ -->
            </div>
        </section>
    </main>
    
    <!-- Copiar footer desde index.html -->
    <script src="js/app.js"></script>
</body>
</html>
```

### 5. DÓNDE ENCONTRAR EL CONTENIDO

Para obtener el contenido de cada página, lee los archivos `.blade.php` correspondientes en:

```
C:\Users\merin\OneDrive\Escritorio\proyecto_de_servicio\resources\views\
```

Por ejemplo:
- Para `contacto.html` → Lee `acerca/contacto.blade.php`
- Para `normas-editoriales.html` → Lee `publicar/normas-editoriales.blade.php`

### 6. PROBAR EL SITIO

#### Opción A: Abrir directamente
Haz doble clic en `index.html`

#### Opción B: Servidor local (recomendado)
```powershell
cd C:\Users\merin\OneDrive\Escritorio\proyecto_servicio_html_prototu
python -m http.server 8000
```
Luego abre: http://localhost:8000

### 7. VERIFICACIÓN FINAL

- [ ] Todas las imágenes se cargan correctamente
- [ ] Todos los enlaces de navegación funcionan
- [ ] Los dropdowns se abren correctamente
- [ ] El slideshow del hero funciona
- [ ] El botón de scroll to top aparece al hacer scroll
- [ ] El diseño es responsivo (prueba en diferentes tamaños de ventana)
- [ ] El mapa de Google Maps se carga en el footer

## 🎨 Personalización Adicional

### Cambiar Colores
Edita `css/style.css`, líneas 6-12:
```css
:root {
    --color-primary: #C85A1F;      /* Tu color primario */
    --color-secondary: #E62B1E;    /* Tu color secundario */
}
```

### Modificar Contenido
Simplemente edita el HTML dentro de las secciones `<main>` de cada página.

## 📞 Necesitas Ayuda?

Si encuentras problemas:
1. Verifica que todas las imágenes estén copiadas
2. Asegúrate de que los nombres de archivo coincidan exactamente (incluyendo mayúsculas/minúsculas)
3. Revisa la consola del navegador (F12) para ver errores

## ✨ Tips Finales

- Usa el mismo patrón de las páginas existentes para mantener consistencia
- Los estilos CSS ya están preparados para todos los elementos
- El JavaScript ya maneja todos los efectos interactivos
- No necesitas modificar CSS ni JS, solo crear las páginas HTML

¡Éxito con tu proyecto! 🎉
