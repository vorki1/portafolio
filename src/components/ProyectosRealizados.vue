<template>
  <!--Titulo principal del proyecto-->
  <h1 class="title-p">{{ titulo }}</h1>
  <div class="container-proyect row">
    <v-card 
    class="card-proyect">
      <v-card-item>
        <!-- Título principal:  -->
        <v-card-title>{{ arquitectura }}</v-card-title>

        <!-- Rol de programación -->
        <v-card-subtitle>{{ rol }}</v-card-subtitle>
      </v-card-item>
      <!-- Texto descriptivo principal -->
      <v-card-text>
        {{ texto }}
      </v-card-text>
      <!-- Texto destacado -->
      <v-alert type="info" variant="tonal" class="ma-2">
        {{ destacado }}
      </v-alert>
    </v-card>
    <v-carousel class="carousel-proyect">
      <v-carousel-item
        v-for="(img, i) in images"
        :key="i"
        :src="`${img}`"
        cover
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProyectosRealizados',
  props:{
    titulo:{
      type: String,
      required: true,
    },
    arquitectura: {
      type: String,
      default: 'Monolítica',
    },
    rol: {
      type: String,
      required: true,
    },
    texto: {
      type: String,
      required: true,
    },
    destacado: {
      type: String,
      default: 'Texto destacado',
    },
    images:{
      type: Array,
      required: true,
      default: () => []
    }
  }
});
</script>

<style scoped>
.title-p {
  text-align: start;
  font-size: 2rem;
  margin: 16px 0;
}
.card-text {
  padding: 16px;
  text-align: center;
}
.container-proyect {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 16px;
  justify-content: center;
  margin: 16px 0 16px 0;
}

.card-proyect {
  width: 500px;
  height: 400px; /* Cambiado de 400px a 500px */
  min-height: 300px;
}

.carousel-proyect {
  width: 600px !important;
  height: 400px !important; /* Cambiado de 400px a 500px */
  border-radius: 4px;
}
</style>