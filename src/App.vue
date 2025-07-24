//Diseño y estructura general de la "casa"
<template>
  <v-app style="background-color: rgba(34, 34, 34, 1); " id="inicio">
    <!-- El Navbar es un elemento persistente dentro de mi appGlobal, no importa que pagina vea el usuario -->
    <AppNavbar/><!-- Contiene la navegacion -->
    <v-main class="app-global">
      <v-container>
        <!-- El router-view pesca la URL y muestra el componente que esta asociado a esa url -->
        <router-view /> <!-- Aqui se inyecta el componente que se va a mostrar en la vista dependiendo de la ruta -->
      </v-container>
    </v-main>
      <footer class="footer-bar">
        <div class="footer-content">
          <span>© 2025 Javier Ignacio Saldaño Hernández</span>
        </div>
      </footer>
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
  background-color: rgba(34, 34, 34, 1);   
  min-height: 100vh;
}
.footer-bar {
  width: 100%;
  background: rgba(0, 0, 0, 1); 
  color: rgba(218, 165, 32, 0.8);
  padding: 10px 0;
  text-align: center;
  position: relative;
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

</style>
