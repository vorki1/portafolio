<template>
    <p class="text-h3" style="margin-bottom: 40px;">Hola!, mi nombre es<br/> Javier Ignacio Saldaño Hernández</p>
    <p class="text-h4" style="color: rgba(218, 165, 32, 1); margin: 20px;">Ingeniero civil en computación e informática</p>
  <v-row style="margin: 40px;">
    <v-col cols="12" md="6">
      <p class="text-body-1 caja-texto"> 
        Me he formado para resolver necesidades de los clientes a traves de soluciones tecnologicas
      </p>
      <p class="text-body-1 caja-texto">
        Me apasiona la gestion de proyectos, el liderazgo, el diseño y desarrollo de soluciones tecnologicas
      </p>
    </v-col>
    <v-col cols="12" md="6">
      <p class="text-body-1 caja-texto">
        Conocimiento amplio en base de datos, frontend, backend, arquitectura de software y gestión TI.
      </p>
      <p class="text-body-1 caja-texto">
        Me considero organizado, comprometido, directo pero amable, capaz de liderar y trabajar en equipo.
      </p>
    </v-col>
  </v-row>
  <v-btn class="boton-home">Descargar CV</v-btn>
  <hr class="division"/>
  <p class="text-title">Experiencia</p>
  <hr class="division"/>
  <br id="proyectos">
  <br>
  <p>Añadir más espacio a los lados</p>
  <p class="text-title" >Proyectos</p>
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
  <hr class="division"/>
  <p class="text-title">Stack tecnologico</p>
  <StackTecnologico />
  <hr class="division"/>
  <p class="text-title">certificados</p>
  <hr class="division"/>
  <p class="text-of-atention">
    ¿Tienes una propuesta, oferta laboral o necesitas una consultoría sobre tecnología?<br> 
    ¡No dudes en contactarme!
  </p>
  <ContactoPersonal />

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
  max-width: 450px;
  margin: 24px auto;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(255, 221, 102, 1);
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

.text-title{
  font-size: 3em;
  text-align: center;
  margin: 20px;
  color: rgba(218, 165, 32, 1);
}
.division{
  border: none;
  height: 3px;
  background: rgba(0, 0, 0, 1);
  margin: 24px 0;
  width: 100%;
}

</style>

