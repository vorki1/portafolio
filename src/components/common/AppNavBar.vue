<template>
  <v-app-bar app id="app-navbar">
    <v-toolbar-title>Mi Portafolio</v-toolbar-title>
    <v-spacer></v-spacer> 
    <v-btn text to="/" class="boton-nav">Inicio</v-btn> 
    <v-btn text to="/aboutMe" class="boton-nav">Sobre mí</v-btn>
    <v-btn text to="/proyects" class="boton-nav">Proyectos</v-btn>
    </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppNavBar',
});
</script>

<style scoped>
#app-navbar {
  color: #fff;
  background-color: rgba(218, 165, 32, 1);
}
.boton-nav{
  color: rgba(255, 255, 255, 1); 
  background-color: rgba(0, 0, 0, 1); 
  transition-duration: 0.5s;
  cursor:pointer;
  
}
.boton-nav:not(:first-child) {
  margin-left: 12px;
}
.boton-nav:last-child {
  margin-right: 16px;
}
.boton-nav:hover {
  background-color: rgba(128, 128, 128, 1); 
}

</style>
