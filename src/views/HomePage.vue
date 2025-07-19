<template>
  <div>
    <p>(responsivo)contacto. footer: redes sociales</p>
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
  <router-link to="aboutMe">
    <v-btn>Sobre mi</v-btn>
  </router-link>
  <hr/>
  <StackTecnologico />
  <hr/>
  <div v-for="(proyecto, index) in proyectos" :key="index">
      <ProyectosRealizados
        :titulo="proyecto.titulo"
        :rol="proyecto.rol"
        :texto="proyecto.texto"
        :destacado="proyecto.destacado"
        :images="proyecto.images"
        :arquitectura="proyecto.arquitectura"
      />
  </div>
  <hr/>
  <h1>Contacto</h1>

  <p class="text-body-1">
    ¿Tienes una propuesta, oferta laboral o simplemente quieres hablar sobre tecnología? 
    ¡No dudes en contactarme!
  </p>

  <ul>
    <li>Email: javier.saldano.hernandez@gmail.com</li>
    <li>Teléfono: +56 9 3700 1905</li>
  </ul>

  <div>
    <v-btn icon href="https://www.linkedin.com/in/javier-salda%C3%B1o-hern%C3%A1ndez-b77b52232/" target="_blank">
      <img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
    </v-btn>
    <v-btn icon href="https://github.com/vorki1" target="_blank">
      <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/github.png" alt="linkedin"/>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StackTecnologico from '../components/StackTecnologico.vue';
import ProyectosRealizados from '../components/ProyectosRealizados.vue';
import { proyectos } from '../proyectos-data';

export default defineComponent ({
  name: 'HomePage',
  components: {
    StackTecnologico,
    ProyectosRealizados,
  },
  data() {
    return {
      proyectos,
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

