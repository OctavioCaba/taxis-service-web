# Taxi web service
Aplicación web que permite la reservación de táxis por horarios.

## ¿Cómo lo ejecuto en local?
Necesitarás tener instalado `Node.js` y tener acceso a una terminal para seguir los siguientes pasos:
<br />
<br />
``
npm i => instalar las dependencias en la carpeta raíz``<br />``
cd front => entrar en la carpeta front``<br />``
npm i => instalar las dependencias en la carpeta front``<br />``
cd .. => volver a la carpeta raíz``<br />``
cd back => entrar en la carpeta back``<br />``
npm i => instalar las dependencias en la carpeta back``<br />``
cd .. => volver a la carpeta raíz``<br />
<br />
:warning: Ejecutar el siguiente paso **SÓLO** si ya has completado los pasos `Base de datos` y `Variables de entorno` :warning:<br />
<br />
`npm run dev:pack => levantar el entorno de desarrollo`

<br />

## Base de datos
Además deberás contar con algún paquete de software para levantar un servidor con base de datos `SQL` o `MariaDB`. Por ejemplo: `XAMPP`, `WAMP`, `LAMP` o alguno similar.<br />
Luego de iniciar los módulos de `Apache` y `MySQL` abrir el navegador y, en la barra de direcciones, escribir `localhost/phpmyadmin/`.<br />
Abrir la `Consola` y pegar todo el código que se encuentra en el archivo [database.sql](./database.sql).<br />
Luego apretar `Ctrl + Enter` para ejectuar el código pegado, y así crear y llenar la base de datos.
<br />

## Variables de entorno
Necesitarás un archivo `.env` dentro de la carpeta `back` con la siguiente estructura:
<br />
<br />

`PORT=` Seguido del número del puerto donde quieres ejecutar la aplicación<br />
`DATABASE_HOST=localhost`<br />
`DATABASE_USER=` Seguido del usuario de administración de tu servidor. Por defecto el usuario es `root`<br />
`DATABASE_PASSWORD=` Seguido de la contraseña del usuario. Por defecto la contraseña es un string vacío `""`<br />
`DATABASE_NAME=` Seguido del nombre de la base de datos. Si el contenido del archivo database.sql no fue modificado, el nombre de la base de datos de `taxis_service_database`<br />
<br />

### Créditos
Proyecto enteramente diseñado y desarrollado por [Octavio Caba](https://octaviocaba.github.io/portafolio/).
