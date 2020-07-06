# INSTRUCCIONES

## Instalar módulos

* Ir desde la terminal al directorio raíz del proyecto y ejecutar el siguiente comando:

``` sh
$ npm install
```

## Variables de entorno

* Crear un archivo .env con la siguiente estructura:

```
PORT=3000

MONGODB_ENVIRONMENT=
MONGODB_USER=
MONGODB_PASS=
MONGODB_DBNAME=captcha_jorge
```

## Base de datos

### Base de datos walmart (remota)
* Para utilizar la base de datos de walmart, dentro del archivo `.env` sólo se deben completar los valores de las variables `MONGODB_USER` y `MONGODB_PASS`.

### Base de datos local
* Para utilizar una base de datos local, dentro del archivo `.env` sólo se debe asignar el valor `local` a la variable `MONGODB_ENVIRONMENT` y el puerto a la variable `MONGODB_PORT`.
* También se deberá crear una base de datos con el nombre `captcha_jorge` y dentro de esta se deberá crear una colección con el nombre `captchas`.
* Para cargar la colección se deberá ejecutar el script `script-insert-captchas.js` ubicado dentro del directorio `models`. 
