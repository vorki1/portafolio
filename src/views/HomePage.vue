<template>
  <div>
    <p>(responsivo)proyectos (nombre,imagen, descripcion, destacable, tecnologia usada, enlace github). contacto. footer: redes sociales</p>
    <hr/>
    <h2 class="text-h2">Javier Ignacio Saldaño Hernández</h2>
    <div class="caja-texto">
      <p class="text-body-1">
        Desarrollador de soluciones para responder 
        a necesidades utilizando las tecnologias
      </p>
    </div>
  </div>
  <v-btn class="boton-home">Descargar CV</v-btn>
  <v-btn class="boton-home">Contacto</v-btn>
  <hr/>
  <StackTecnologico />
  <hr/>
  <ProyectosRealizados 
  titulo="Titulo del proyecto"
  rol="desarrollador backend"
  texto="Ejemplo de descripcion "
  destacado="Texto destacado del proyecto y tecnologias usadas"
  :images="images"/>
  <ProyectosRealizados 
  titulo="Tienda de videojuegos"
  arquitectura="Monolitica"
  rol="Diseñador y Desarrollador Backend y Frontend"
  texto="Tienda online de codigos de videojuegos como steam, epic games, etc.
  Existe usuario administrador y usuario cliente.
  El usuario cliente puede ver los productos, agregar al carrito, realizar la compra y valorar.
  El administrador puede agregar, eliminar y editar productos."
  destacado="Bases de datos mongoDB para los usuarios, Redis para mejorar el rendimiento del carrito e imagekit para almacenamiento de imagenes.
  Capaz de importar y exportar arcvhivos excel."
  :images="imagesTiendaJuegos"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StackTecnologico from '../components/StackTecnologico.vue';
import ProyectosRealizados from '../components/ProyectosRealizados.vue';
//imagenes
import carritoTienda from '@/assets/proyectos/bdnsql-tienda-juegos/carrito-tienda-juegos.png';
import home from '@/assets/proyectos/bdnsql-tienda-juegos/home-tienda-juegos.png';
import producto from '@/assets/proyectos/bdnsql-tienda-juegos/producto-tienda-juegos.png';
import panelAdmin from '@/assets/proyectos/bdnsql-tienda-juegos/panel-admin-tienda-juegos.png';

export default defineComponent ({
  name: 'HomePage',
  components: {
    StackTecnologico,
    ProyectosRealizados,
  },
  data() {
    return {
      images: [
        'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
        'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      ],
      imagesTiendaJuegos:[
        home,
        producto,
        carritoTienda,
        panelAdmin
      ]
    };
  },
})
</script>

<style scoped>
.caja-texto {
  max-width: 400px;
  margin: 24px auto;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(14, 14, 14, 0.2);
}
.boton-home{
  margin: 10px;
  height: 40px;
  width: 150px;
  color: #fff;
  background-color: rgba(218, 165, 32, 1);
}
</style>

