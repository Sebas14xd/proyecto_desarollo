# Mi Página de Dragon Ball

Este proyecto fue hecho por dos personas. Es una página web sobre Dragon Ball donde se puede ver información de personajes, series, mangas, películas y videojuegos.  
Está hecha con HTML, CSS y JavaScript, y usamos una API de RestDB.io para traer los personajes con Axios.

---

## Planificación

Por qué elegimos este tema:  
Elegimos Dragon Ball porque es un tema que nos gusta y es muy conocido. Tiene muchos personajes, sagas, mangas, películas y juegos, así que nos pareció buena idea hacer una web con toda esa información.

Usuarios que usarían la página:
1. Fans de Dragon Ball: quieren ver datos de sus personajes favoritos o recordar cosas de las series y películas.  
2. Personas nuevas: quieren conocer el orden de las sagas o saber quién es quién en el mundo de Dragon Ball.

Requisitos del proyecto:
1. Tener varias secciones (personajes, series, mangas, películas y videojuegos).  
2. Que cada sección tenga un buscador para encontrar rápido lo que se busca.  
3. Usar una API para mostrar los personajes (sin tener que escribirlos a mano en el HTML).  

Extras: tener diseño responsive, un botón para subir al inicio y que la página se vea bien en distintos tamaños de pantalla.

---

## Diseño (arquitectura cliente-servidor)

La página usa el modelo cliente-servidor, explicado de forma simple:

- Cliente: es lo que ve el usuario (la página). Está hecha con HTML, CSS y JavaScript.  
- Servidor: es donde está guardada la información (la API de RestDB.io).  
- Cómo funciona: el cliente pide los datos (por ejemplo, los personajes) al servidor. El servidor los envía y la página los muestra en pantalla.

Así no hace falta tener todos los datos escritos en el HTML, sino que se cargan automáticamente desde el servidor.

---

## Despliegue (publicación en GitHub Pages)

Usar GitHub Pages fue bastante sencillo:

1. Subimos todos los archivos del proyecto al repositorio (index.html, styles.css, script.js, imágenes, etc.).  
2. Activamos GitHub Pages desde Settings > Pages.  
3. GitHub nos dio el enlace público para ver la web.

Cosas buenas:  
- Es gratis y rápido.  
- Cada vez que actualizamos el repo, se actualiza la web.  
- No hay que instalar nada extra.

Problemas que tuvimos:  
- Algunas imágenes no cargaban porque las rutas estaban mal (por ejemplo, .jpe en lugar de .jpg).  
- A veces el CSS no se aplicaba porque los enlaces no apuntaban bien al archivo.  
- Hubo que revisar que los nombres de los archivos tuvieran las mismas mayúsculas y minúsculas (GitHub es sensible a eso).

Después de corregir eso, todo funcionó bien.

---

## Mantenimiento

Errores que encontramos:  
- Imágenes con extensiones o rutas incorrectas.  
- El buscador no funcionaba bien al principio por un error en los selectores.  
- Algunas fuentes de Google no cargaban a veces.  
- La API key quedó visible en el código (lo ideal sería ocultarla, pero para este trabajo la dejamos así).

Cosas que ya arreglamos o mejoramos:  
- Corregimos las rutas de las imágenes.  
- Arreglamos el buscador.  
- Agregamos fuentes alternativas por si Google Fonts falla.

Cosas que podríamos mejorar en el futuro:  
- Poner modo oscuro.  
- Agregar animaciones a las tarjetas o los botones.  
- Mostrar más información de los personajes (por ejemplo, transformaciones o ataques).  
- Mejorar la versión para celulares con un menú más cómodo.  
- Hacer que funcione incluso si no hay conexión.  

---

## Archivos principales del proyecto

- index.html: contiene la estructura de la página y las secciones.  
- styles.css: tiene los estilos, colores y el diseño.  
- script.js: controla todo lo interactivo (mostrar secciones, buscadores, conexión con la API, botón de volver arriba, etc.).

Ejemplo de cómo traemos los personajes desde la API:

```js
axios.get('https://personajes-5271.restdb.io/rest/Personajes-2', {
  headers: {
    'Content-Type': 'application/json',
    'x-apikey': '665a00309dbb48069e715f6e'
  }
})


```

Integrantes del grupo

- Marco de Haro Martín
- Sebastián Coll Slodka
