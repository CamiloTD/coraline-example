# Coraline-base

Éste repositorio es una guía para los aventureros que quieran empezar a realizar sus propios Coraline, si no tienes ni idea de qué es un Coraline, te recomiendo que leas aquí: [¿Qué es un Coraline?](https://github.com/CamiloTD/coraline-project/blob/master/es/WhatsACoraline.md), y de paso te pases por: [¿Qué es el Proyecto Coraline?](https://github.com/CamiloTD/coraline-project/blob/master/es/README.md)

Pero, en fin, en la siguiente guía aprenderás a crear tus primeros Coraline, si te enredas en algo, o tienes algun fallo, tranquilo, siempre puedes contactarnos en [Issues](https://github.com/CamiloTD/coraline-project/issues).

Como ya sabemos, un Coraline, es una simulación educativa interactiva, la cual está compuesta de distintos componentes trabajando duro como hermanos.

Lo primero que haremos, y si es que no lo has hecho aún, es clonar éste repositorio con:

```
	git clone https://github.com/CamiloTD/coraline-project.git
```

Abre la carpeta de trabajo, y verás una estructura de directorio como ésta:

```
o
|-- src
    |-- lang
    |-- lib
    |-- style
    |-- docs
    |- config.json
    |- index.js
    |- pad.js
```

Para que no te líes, te daré una pequeña introducción sobre la utilidad de cada directorio:

 - **/src**: Aquí irán tooodos los archivos relacionados con tu Coraline, desde el código fuente hasta las imágenes que usarás
 - **/src/lang**: Aquí irán tus archivos de idioma, procura guardar todos tus textos aquí para que tu Coraline pueda ser usado en varios idiomas, por defecto contiene **en.json** y **es.json**, aunque puedes agregar más idiomas luego
 - **/src/lib**: Aquí irán todas las librerías que uses, cualquier archivo o módulo puesto aquí será accesible inmediatamente por medio de <code>require('path')</code>
 - **/src/style**: Aquí irán los archivos de estilo, sean estos *.css o *.styl
 - **/src/docs**: Aquí irá toda la documentación de tu Coraline, luego ahondaremos en ello
 - **/src/config.json**:  En este archivo guardarás la info sobre tu Coraline, y los datos configurables del mismo
 - **/src/index.js**: Éste es el archivo de programación de la pantalla principal de tu Coraline
 - **/src/pad.js**: Éste archivo se utiliza para programar los controles del Coraline
