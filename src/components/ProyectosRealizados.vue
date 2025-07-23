<template>
  <!-- Título principal del proyecto -->
  <v-card class="card-proyect">
    <v-row>
      <!-- Columna izquierda: texto -->
      <v-col cols="12" md="5">
        <v-card-item class="card-title">
          <v-card-title>{{ titulo }}</v-card-title>
          <v-card-subtitle>{{ arquitectura }}</v-card-subtitle>
        </v-card-item>

        <v-card-item>
          <v-card-subtitle>{{ rol }}</v-card-subtitle>
          <v-card-text>{{ texto }}</v-card-text>
          <v-card-text class="ma-2">
            {{ destacado }}
          </v-card-text>
        </v-card-item>
      </v-col>
      <!-- Columna derecha: imágenes o segundo contenido -->
      <v-col cols="12" md="7">
        <v-carousel
          height="400"
          hide-delimiter-background
          :show-arrows="false"
        >
          <v-carousel-item
            v-for="(image, i) in images"
            :key="i"
          >
            <v-sheet
              class="content-images"
            >
              <div class="card-image">
                <v-img
                  :src="`${image}`"
                  contain
                ></v-img>
              </div>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProyectosRealizados',
  props: {
    titulo: {
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
    images: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
});
</script>

<style scoped>
.card-proyect {
  color:white;
  background-color: rgba(34, 34, 34, 1);
  box-shadow: 0 4px 8px rgba(218, 165, 32, 0.8);
  border: 1px solid rgba(218, 165, 32, 0.8);
  margin: 30px;
  padding: 20px;
  border-radius: 10px;
  
}
.card-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: start;
  color:rgba(218, 165, 32, 0.8);
}

.content-images {
  height: 100%;
  padding: 10px;
  background-color: rgba(34, 34, 34, 1);
  box-shadow: 0 4px 8px rgba(218, 165, 32, 0.8);
  border: 1px solid rgba(218, 165, 32, 0.8);
  border-radius: 10px;
}
.card-image{
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
::v-deep(.v-carousel__controls .v-btn) {
  color: rgba(218, 165, 32, 1) !important;
  background-color: rgba(34, 34, 34, 1) !important;
}
</style>
