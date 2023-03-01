# Microfrontend Menu

<p style='text-align: justify;'> Este proyecto es un microfrontend desarrollado en angular versión 15.1.2 y con single-spa en su version 4.0.0. Su principal función es mostrar al usuario un menú de aplicación. </p>


<p align="center">
<img src="https://hme-mf-resources.netlify.app/src/assets/hme-mf-resources/images/menu-open.png"/>
</p>

<p align="center">
<img src="https://hme-mf-resources.netlify.app/src/assets/hme-mf-resources/images/menu-close.png"/>
</p>


## Storybook

<p style='text-align: justify;'> El proyecto consta de una serie de componentes los cuales pueden ser visualizados e interactuar con ellos a través de los storybooks en el siguiente enlace <a href="https://storybook-mf-menu.netlify.app">Storybook</a>.</p> 


## Servidor de desarrollo

<p style='text-align: justify;'> Primero debemos clonar el código del <a href="https://github.com/lamatcalderon/mf-menu">repositorio</a> y con una terminal instalar las dependencias</p> 

```sh
npm i
```

<p style='text-align: justify;'> Luego debemos ejecutar</p> 

```sh
npm start
```

<p style='text-align: justify;'> Esto levantará un servidor de desarrollo localhost en el puerto 4201 </p> 


## Construcción

<p style='text-align: justify;'> Los archivos generados a través del proceso de contrucción se almacenan en la carpeta <strong>dist/mf-menu</strong>, para construir el proyecto debemos ejecutar el siguiente comando en una terminal</p> 


```sh
npm run build:single-spa:mf-menu
```
