//Diseño y estructura general de la "casa"
<template>
  <v-app >
    <!-- El Navbar es un elemento persistente dentro de mi appGlobal, no importa que pagina vea el usuario -->
    <AppNavbar/><!-- Contiene la navegacion -->
    <v-main class="app-global">
      <v-container>
        <!-- El router-view pesca la URL y muestra el componente que esta asociado a esa url -->
        <router-view /> <!-- Aqui se inyecta el componente que se va a mostrar en la vista dependiendo de la ruta -->
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppNavbar from './components/common/AppNavBar.vue';

export default defineComponent({
  name: 'App',
  components: {//Define los componentes que se van a usar y tener como hijos
    AppNavbar,
  },
});
</script>

<style>
.app-global {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgba(255, 255, 255, 1);  
  margin-top: 60px;
  background-color: rgba(128, 128, 128, 1);   
  min-height: 100vh;
}

</style>
