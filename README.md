# Examen 01 UX – Replica de Netflix

## Introducción
Este examen consiste en replicar la aplicación de “Netflix” utilizando una variedad de tecnologías de Front End como React, TailwindCSS y las tecnologías fuentes como HTML, CSS y JS. Con esto nosotros los estudiantes debemos de demostrar una capacidad adecuada de utilizar estas tecnologías de manera correcta y ordenada.

---

## Tecnologías Usadas
- Next.js 16  
- React  
- TailwindCSS  
- HTML  
- CSS  
- JS  

---

## Explicación de Desarrollo

El primer paso del examen fue estructurar los componentes que vamos a usar en un **Atomic Design** (Átomos, Moléculas, Organismos, Templates y Pages) para tener una buena organización tras el curso del desarrollo del examen. 

### 🔹 NavBar
Para el NavBar se crearon componentes como el logo, botones e íconos como **átomos**.  
El menú de navegación, al igual que la barra de búsqueda, fueron hechos dentro de **moléculas**, y todo el conjunto fue implementado en un **organismo** que sería el NavBar.

Para hacer esta parte más “Netflixy”, se implementaron casos para cuando el usuario le hace *hover* a cada elemento, dándole un cambio de tono.  
También se debe tener en cuenta que el NavBar es un **componente cliente**, ya que responde a eventos dentro del navegador.

### 🔹 Banner
Para el Banner se utilizaron botones, textos, fondo (átomos) al igual que un conjunto de botones (molécula – BannerButtons).  
Al principio se muestra como una imagen normal de fondo; al tocar el botón de reproducción, se muestra un tráiler **usando hooks** para ver si el usuario ha interactuado o no con el botón.

### 🔹 Carruseles (Rows)
Los carruseles fueron construidos como **organismos**.  
Se creó un archivo de datos (hardcoded) donde varias series/películas fueron puestas con sus imágenes respectivas.

Cada sección tiene scroll horizontal, el cual se usa con mayor frecuencia si la pantalla se hace más pequeña, ya que se miraría menos contenido.  
Cada serie tiene efectos de hover, en los cuales la imagen se pondrá oscura y se mostrará una breve descripción de la serie/película en cuestión.

### 🔹 Responsividad
Algo que se debe mencionar es que la mayoría de las cosas que hacen que el sitio se sienta “responsive” fue por el uso de **TailwindCSS**, así uno como desarrollador no tiene que jugar con sizes específicos de pantalla para cambiar ciertos datos de CSS.

### 🔹 Datos Hardcoded
Previamente se mencionó un archivo de datos, y aquí es donde varios datos como la imagen a usar, la descripción y el título de las series/películas de los carruseles fueron escritos (hardcoded).  
En el futuro, con implementación de Bases de Datos, sería más profesional tener este “archivo” como una base real de series/películas.

---
