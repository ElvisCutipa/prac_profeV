# EventosUSFA – Día 01

## Descripción del proyecto

EventosUSFA es una página web que permite visualizar un catálogo de eventos universitarios. También cuenta con una página para consultar los detalles de los eventos y un formulario para proponer nuevas actividades.

## Objetivo

Construir una estructura web accesible utilizando HTML semántico, CSS y JavaScript, permitiendo navegar entre el catálogo y la página de detalle.

## Tecnologías utilizadas

- HTML5: estructura y contenido de las páginas.
- CSS3: diseño y estilos visuales.
- JavaScript: interacción y validación del formulario.
- Git: control de versiones del proyecto.

## Estructura del proyecto

EventosUSFA/

- README.md
- index.html
- evento.html
- proponer.html
- estilos.css
- script.js

## Descripción de los archivos

### 1. index.html
Es la página principal del proyecto. Contiene el catálogo de próximos eventos universitarios, mostrando su nombre, categoría, fecha, lugar y un enlace para consultar sus detalles.

### 2. evento.html
Muestra información más detallada de los eventos, como su descripción, fecha y lugar donde se realizarán. También permite regresar al catálogo principal.

### 3. proponer.html
Contiene un formulario para que los usuarios puedan proponer nuevos eventos. Solicita información del organizador y los datos del evento.

### 4. estilos.css
Contiene los estilos visuales de todas las páginas, como colores, tamaños, botones, tarjetas y diseño adaptable a celulares y computadoras.

### 5. script.js
Permite validar el formulario y mostrar un mensaje de confirmación cuando se envía una propuesta de demostración.

## HTML semántico y accesibilidad

En el desarrollo se utilizaron las siguientes etiquetas:

- header: identifica el encabezado de la página.
- nav: agrupa los enlaces de navegación.
- main: contiene el contenido principal.
- section: organiza el contenido en secciones.
- article: representa cada evento de manera independiente.
- footer: contiene la información final de la página.

También se utilizó una jerarquía organizada de títulos, etiquetas asociadas a los campos del formulario y textos descriptivos en los enlaces.

## ¿Cómo ejecutar el proyecto?

1. Descargar el proyecto.
2. Descomprimir la carpeta.
3. Abrir la carpeta EventosUSFA.
4. Ejecutar el archivo index.html en un navegador web.
5. Seleccionar un evento para consultar sus detalles.
6. Ingresar a Proponer evento para utilizar el formulario.

## Control de versiones con Git

Se realizaron tres commits descriptivos:

1. Estructura inicial del catálogo accesible.
2. Agrega página de detalle y navegación recíproca.
3. Documenta el código con comentarios explicativos.

## Verificaciones

Se realizaron comprobaciones estáticas para verificar:

- Que index.html y evento.html tengan un único título h1.
- Que exista navegación entre el catálogo y el detalle.
- Que los campos del formulario tengan etiquetas relacionadas.
- Que las páginas compartan la misma hoja de estilos.

La navegación y el formulario deben probarse también manualmente en el navegador.

## Limitaciones

El formulario es una demostración académica. Actualmente no almacena información en una base de datos ni envía propuestas a un servidor.

## Ticket de aprendizaje

**Idea que puedo explicar:**

HTML semántico permite organizar correctamente el contenido de una página web mediante etiquetas que indican la función de cada elemento.

**Evidencia que la respalda:**

El proyecto utiliza header, nav, main, section, article y footer para organizar sus diferentes partes.

**Duda concreta:**

¿Cómo puedo mejorar la accesibilidad de una página web utilizando herramientas de evaluación y lectores de pantalla?