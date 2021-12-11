# Pepuno Store

#### Introducción

Este proyecto desarrollado con React.js, conforma el Proyecto Final del curso de React.js dictado por Coderhouse (2021).

#### ¿En qué consiste?

Pepuno Store es un E-commerce ficticio, dedicado a la venta de indumentaria para niños tejida a crochet.

### Entregas

#### Entrega intermedia (7/11/2021)

Incluye la navegación principal, un catálogo de productos, un sistema de filtros por categoría y una vista detalle del producto.

![GIF DEMO ENTREGA INTERMEDIA](https://media.giphy.com/media/PJpgQcSCW1oAnGjZ1x/giphy.gif)

#### Entrega final (10/12/2021):

-   Se implementa React Context para la creación de un carrito de compras.
-   Se utiliza localStorage para el almacenamiento del carrito, permitindo dejar en la memoria local la selección de productos del usuario.
-   Se incluye Firebase en el proyecto, permitiendo la consulta de productos y la creación de órdenes y modificación de stock correspondiente.

![GIF DEMO PROYECTO FINAL](https://media.giphy.com/media/euNAFCnT2bbKYuIk6q/giphy.gif)

[¡Live demo!](https://pepunostore.vercel.app/)

### Dependencias

```json
"dependencies": {
        "@emotion/react": "^11.4.1",
        "@emotion/styled": "^11.3.0",
        "@material-ui/core": "^4.12.3",
        "@mui/icons-material": "^5.0.4",
        "@mui/lab": "^5.0.0-alpha.59",
        "@mui/material": "^5.0.4",
        "@mui/styled-engine-sc": "^5.0.3",
        "@testing-library/jest-dom": "^5.14.1",
        "@testing-library/react": "^11.2.7",
        "@testing-library/user-event": "^12.8.3",
        "axios": "^0.24.0",
        "firebase": "^9.5.0",
        "react": "^17.0.2",
        "react-dom": "^17.0.2",
        "react-router-dom": "^6.0.2",
        "react-scripts": "^3.4.4",
        "styled-components": "^5.3.1",
        "sweetalert2": "^11.3.0",
        "web-vitals": "^1.1.2"
    }
```

#### Material UI v5

Esta es una biblioteca robusta, personalizable y accesible de componentes básicos y avanzados. Al ser super personalizable y trabajar en conjunto con styled-components, te da la libertad de desarrollar componentes personalizables y reutilizables de manera sencilla. Se utiliza por su posibilidad de definir un tema y por sus componentes reutilizables.

#### Styled-componentes / Emotion

Ambas depencias son necesarias para el buen funcionamiento de Material UI. El objetivo de estas es poder escribir estilos CSS dentro del mismo archivo de Javascript. Esto no sólo agiliza el tiempo de trabajo, sino que ofrece una estructura ordenada, permite la reutilización de componentes comunes y te da la posibilidad de utilizar la lógica de Javascript para crear estilos adaptables.

#### Firebase / Firestore

Se usa Firebase en el proyecto por su base de datos en la nube (Cloud Firestore) que permite agregar la funcionalidad al e-commerce (Obtener productos, actualizar productos y crear órdenes de compra).

#### Axios

Axios es una librería JavaScript que puede ejecutarse en el navegador y que nos permite hacer sencillas las operaciones como cliente HTTP, por lo que podremos configurar y realizar solicitudes a un servidor y recibiremos respuestas fáciles de procesar. En este caso se utiliza para obtener las provincias para el formulario de checkout.

#### Sweetalert2

Permite crear alertas personalizadas, accesibles, lindas y responsive. Se utiliza en reemplazo de las alertas regulares de JavaScript.

### Inicializar el proyecto

Lo primero que debes hacer es instalar las dependencias del proyecto con el siguiente comando:

```
npm install
```

Para ejecutar el proyecto de manera local deberás correr el siguiente comando:

```
npm start
```

## 🚀 Sobre mí

Mi nombre es Florencia Salcedo, soy Técnica en Programación y Diseño Multimedial. Actualmente estoy trabajando en Desarrollo Frontend y Diseño UX/UI. Siempre buscando capacitarme en nuevas y mejores tecnologías.

[¡Conectemos en LinkedIn!](https://www.linkedin.com/in/florenciasalcedowd/)
