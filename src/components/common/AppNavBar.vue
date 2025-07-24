<template>
  <v-app-bar class="app-navbar" app fixed>
    <img src="@/assets/logo_javier_saldano.png" class="icon-nav" />
    <v-toolbar-title style="color: rgba(255, 255, 255, 1);">Portafolio</v-toolbar-title>
    
    <v-btn text class="boton-nav" @click="scrollToStart">Inicio</v-btn> 
    <v-btn text class="boton-nav" @click="scrollToProyects" style="margin-right: 16px;">Proyectos</v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppNavBar',
  methods: {
    scrollToProyects(){
      const el = document.getElementById('proyectos');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    scrollToStart(){
      const el = document.getElementById('inicio');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
});
</script>

<style scoped>
.app-navbar {
  background-color: rgba(0, 0, 0, 1) !important;
  color: rgba(255, 255, 255, 1);
}
.icon-nav {
  width: 70px;
  height: 70px;
  margin-left: 16px;
}
.boton-nav{
  color: rgba(255, 255, 255, 1); 
  background-color: rgba(34, 34, 34, 1); 
  box-shadow: 4px 4px 4px rgba(218, 165, 32, 0.8); 
  transition-duration: 0.8s;
  cursor:pointer;
  
}
.boton-nav:not(:first-child) {
  margin-left: 12px;
}
.boton-nav:last-child {
  margin-right: 8px;
}
.boton-nav:hover {
  background-color: rgba(0, 0, 0, 1);
}
</style>
