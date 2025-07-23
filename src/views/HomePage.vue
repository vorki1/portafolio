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
  <h1>Experiencia</h1>
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
  <StackTecnologico />
  <hr/>
  <router-link to="aboutMe">
    <v-btn>Sobre mi</v-btn>
  </router-link>
  <hr/>
  certificados
  <hr/>
  <p class="text-of-atention">
    ¿Tienes una propuesta, oferta laboral o necesitas una consultoría sobre tecnología? 
    ¡No dudes en contactarme!
  </p>
  <ContactoPersonal />
  <p>Barra al final indicando la finalizacion como un navBar</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StackTecnologico from '../components/StackTecnologico.vue';
import ProyectosRealizados from '../components/ProyectosRealizados.vue';
import ContactoPersonal from '../components/ContactoPersonal.vue';
import { proyectos } from '../proyectos-data';

export default defineComponent ({
  name: 'HomePage',
  components: {
    StackTecnologico,
    ProyectosRealizados,
    ContactoPersonal,
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
  background-color: rgba(218, 165, 32, 1)
}

.text-of-atention {
  margin: 60px;
  text-align: center;
  font-size: 1.4em;
  box-shadow: 0 2px 8px rgba(255, 221, 102, 1);
  border-radius: 10px;
}
</style>

