<p align="center">
  <a href="#!">
    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" href="https://es.reactjs.org/" width="60" />
    <img src="https://create-react-app.dev/img/logo.svg" href="https://create-react-app.dev/" width="60" />
    <img src="https://cdn-images-1.medium.com/max/1600/1*WcRnU2ERqYHZBKBQ0zXCvg.png" href="https://es.redux.js.org/" width="60" />
  </a>
</p>
<h1 align="center">React Boilerplate</h1>
<p align="center">El Boilerplate de React es un marco de trabajo rapido para desarrolladores, incializado con Create React App. Se basa siguiendo las mejores prácticas recomendadas por la comunidad.</p>

## Tabla de contenido

* [Empezando](#empezando)
* [Contenido del proyecto](#contenido-del-proyecto)
* [Dependencias](#dependencias)
* [Dependencias de desarrollo](#dependencias-de-desarrollo)
* [Comandos disponibles](#comandos-disponibles)
* [Estandares](#estandares)
* [Automatizacion](#automatizacion)
  * [Husky](#husky-hooks)
* [Best Practies](#best-practies)

## Empezando

1. clonar el proyecto `$git clone https://github.com/vicasas/react-boilerplate.git`
2. `cd react-boilerplate`
3. `npm start`

## Contenido del proyecto

Dentro de la descarga, encontrará los siguientes directorios y archivos, agrupados siguiendo las mejores practicas de arquitectura de directorios para un proyecto en **ReactJS**. Podrás ver algo como esto:

```text
react-boilerplate/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── __test__
│   ├── actions
│   ├── components
│   │   ├── app
│   │   ├── layout
│   │   └── shared
│   ├── config
│   ├── containers
│   ├── images
│   ├── pages
│   ├── reducers
│   ├── routes
│   ├── services
│   ├── styles
│   ├── types
│   ├── utils
│   ├── index.jsx
│   ├── logo-crapp.svg
│   ├── logo.svg
│   ├── serviceWorker.js
│   ├── setupStore.js
│   └── setupTests.js
├── .commitlintrc.json
├── .editorconfig/
├── .eslintignore/
├── .eslintrc.json
├── .gitattributes
├── .gitignore
├── .prettierignore
├── .prettierrc.json
├── .versionrc.json
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
├── package.json
└── README.md
```

Los directorios corresponden a lo siguiente:

- **__test__** : pruebas unitarias.
- **actions** : actions de redux.
- **components** : componentes que representan estilos (*tontos*).
  - **app** : componente principal (`App.jsx`).
  - **layout** : componentes de marcos.
  - **shared** : componentes compartidos en la aplicación.
- **config** : configuraciones de la aplicación.
- **containers** : componentes que representan lógica o conectados a redux (*smart components*).
- **images** : assets de imagenes.
- **pages** : páginas principales de la aplicación, las cuales son llamadas desde el `<Route />`.
- **reducers** : reductores de redux.
- **routes** : configuración de rutas de la aplicación.
- **styles** : estilos de la aplicación (*css*).
- **services** : servicios, llamadas a apis o instancias.
- **types** : tipos de constantes de redux.
- **utils** : utilidades globales de la aplicación.

## Dependencias principales

Contiene las siguientes dependencias principales.

- [React](#react)
- [React Dom](#react-dom)
- [React Redux](#react-redux)
- [React Router Dom](#react-router-dom)
- [Redux](#redux)
- [Redux Thunk](#redux-thunk)
- [PropTypes](#proptypes)
- [History](#history)
- [Material UI](#material-ui)

### [React](https://es.reactjs.org/)

Es una biblioteca (*libreria*) de JavaScript para construir interfaces de usuario. Creado por Facebook.

### [React Dom](https://es.reactjs.org/docs/react-dom.html)

Paquete que proporciona métodos especificos del **DOM** que pueden ser utilizados en el nivel más alto de la aplicación.

### [React Redux](https://react-redux.js.org/)

Paquete para trabajar con el modelo de componentes de React.

### [React Router Dom](https://reacttraining.com/react-router/web/guides/quick-start)

Enrutador de React.

### [Redux](https://es.redux.js.org/)

Es un patrón de arquitectura de datos que permite manejar el estado de la aplicación de una manera predecible.

### [Redux Thunk](https://github.com/reduxjs/redux-thunk)

Es un middleware de Redux que permite a los creadores de acciones (*actions*) invertir el control despachando funciones (*dispatch*).

### [Proptypes](https://github.com/facebook/prop-types)

Paquete para detectar errores con verificación de tipos.

### [History](https://www.npmjs.com/package/history)

Biblioteca de historial que permite administrar fácilmente el historial de sesiones en cualquier lugar donde se ejecute JavaScript.

### [Material UI](https://material-ui.com/)

Framework para construir un sistema de diseño o comenzar con diseños de materiales.

## Dependencias de desarrollo

Contiene las siguientes dependencias de desarrollo.

- [Commitlint](#commitlint)
- [Eslint](#eslint)
- [Husky](#husky)
- [Prettier](#prettier)
- [Standard Version](#standard-version)

### [Commitlint](https://github.com/conventional-changelog/commitlint)

Ayuda a equipos de desarrolladores a adherirse a una conveción de compromisos (*commits*).

### [Eslint](https://eslint.org/)

Es una herramienta de linting para JavaScript que analiza estáticamente su código para encontrar problemas rápidamente.

### [Husky](https://github.com/typicode/husky)

Paquete de ganchos (*hooks*) o extenciones que ejecutan tareas al trabajar con control de versiones git.

### [Prettier](https://prettier.io/)

Formateador de código.

### [Standard Version](https://github.com/conventional-changelog/standard-version)

Automatiza el control de versiones y la generación de CHANGELOG con mensajes de confirmación *semver* y convencionales.

## Scripts disponibles

Los siguientes *scripts* se encuentran disponibles para ser utilizados en el proyecto.

### `npm start`

Ejecuta la aplicación en modo de desarrollo. Abra [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

### `npm test`

Inicia el corredor de prueba en el modo de reloj interactivo. Consulte la sección sobre [ejecución de pruebas](https://create-react-app.dev/docs/running-tests/) para obtener más información.

### `npm run build`

Compila la aplicación para producción en la carpeta `build`. Empaqueta correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

### `npm run eject`

⚠ ⚠ ⚠ **NO USAR** ⚠ ⚠ ⚠ Es irreversible.

### `npm run lint`

Inicia el proceso de revisión de código para detectar errores de sintaxis de JavaScript y JSX. Estos mensajes de error apareceran en la consola.

### `npm run lint:fix`

Inicia el proceso de revisión de código para detectar errores de sintaxis de JavaScript y JSX para luego aplicar una corrección siguiendo la guía de estilos aplicada en el proyecto.

### `npm run pretty`

Inicia el proceso de revisión de código para detectar errores en el formato, para liego ser corregidos automaticamente siguiendo la configuración del formateador.

### `npm run release`

Inicia el proceso de liberación de versión cuya misión es aplicar versionamiento [semver](https://semver.org/) y preparar el código junto con los cambios para empujarlo al repositorio remoto. Para más información ver [Standard Version](#standard-version)

Tareas que realiza:

- aumenta la versión del `package.json`.
- aumenta la versión del `package-lock.json`.
- escribir los cambios (*commits*) en el archivo `CHANGELOG.md`.
- hacer commit de los cambios en `package.json`, `package-lock.json` y `CHANGELOG.md`.
- crear tag en git con la versión.

### `npm run release:up`

Usado post ejecución del comando `npm run release`, se encarga de empujar los cambios (*commits*) hacia el repositorio remoto.

## Estandares

React Boilerplate se basa en los más altos estandares de códificación recomendados por la comunidad. Para ello es que utiliza los siguientes paquetes para asegurarnos que todos los desarrolladores escribamos de la misma forma.

- [Eslint](.eslintrc.json)
- [Prettier](.prettierrc.json)
- [AirBnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Commitlint](https://github.com/conventional-changelog/commitlint)

## Automatización

### Husky Hooks

React Boilerplate posee los siguientes hooks para trabajar con control de versiones git.

#### `pre-commit`

Este hook se gatilla cuando se corre el comando `git commit -m "..."`, pero antes que se ejecute el commit `husky` lanza el comando `pre-commit`, el cúal ejecuta los comandos `npm run lint:fix && npm run pretty` para asegurarnos que al momento de hacer el commit no existan errores de sintaxis y formateo de código.

#### `pre-push`

Este hook se gatilla cuando se corre el comando `git push ...`, pero antes que se ejecute el push `husky` lanza el comando `pre-push`, el cúal ejecuta los comandos `npm run lint` para evitar subir al repositorio remoto código que no cumpla con los estandares definidos.

#### `commit-msg`

Este hook se gatilla para validar el commit que se esta ingresando para confirmar los cambios, valida que la nomenclatura se cumpla siguiendo el estandar de un commit. [Leer más sobre esto](https://blog.kirei.io/buenas-pr%C3%A1cticas-para-los-mensajes-de-commit-en-git-a9fc43a83821)


## Best Practies

1. Los directorios `__test__`, `containers`, `styles` deben seguir la misma jerarquia de directorios por componentes que contenga el directorio principal de `components`.

2. El directorio `pages` debe seguir una jerarquia de rutas que tenga definida la aplicación.

3. Los archivos que rendericen un componente deben llevar como extención `.jsx`.

4. Los archivos que contengan solo código de JavaScript deben llevar como extensión `.js`.

5. Los archivos de test (directorio `__test__`) post nombre del mismo debe llevar un `.test.js`, quedando como `HolaMundo.test.js`.

6. Mantener los componentes pequeños.

7. Mantener el código SECO, no se debe repetir código (DRY).

8. Comentar solo cuando es necesario.

9. Nombre al componente despues de la `function`.

10. Los componentes deben comenzar con MAYUSCULA, ejemplo: `HolaMundo.jsx`.

11. Limitar el paso de `props` a un `component` a hasta 5 accesorios.

12. Usar `defaultProps` y `propTypes`.

13. Escribir componentes basados en funciones usando React Hooks.

14. Usar la desestructuración de ES6 para los accesorios.

14. Usar renderizado condicional.

15. NO usar `<Fragment>`, si no usar componentes parciales como `<></>`.

11. Usar **bit** para colaboración de componentes con el equipo.
