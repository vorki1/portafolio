<template>
  <v-card class="project-card">

    <!-- Imagen con overlay -->
    <div class="image-wrapper">
      <v-img
        :src="portada"
        class="project-image"
        contain
      />

      <div class="image-overlay">
        <span class="arch-badge">
          {{ arquitectura }}
        </span>
      </div>
    </div>

    <!-- Contenido -->
    <v-card-item class="content">
      <v-card-title class="project-title">
        {{ titulo }}
      </v-card-title>

      <v-card-subtitle class="project-subtitle">
        {{ rol }}
      </v-card-subtitle>
    </v-card-item>

    <v-card-text class="project-body">

      <p class="project-description">
        {{ descripcion }}
      </p>

      <!-- Tecnologías -->
      <div class="tech-container">

        <v-chip
          v-for="(tech, i) in tecnologias.slice(0, 4)"
          :key="i"
          size="small"
          class="tech-chip"
        >
          {{ tech.tecnologia }}
        </v-chip>

        <span
          v-if="tecnologias.length > 4"
          class="more-tech"
        >
          +{{ tecnologias.length - 4 }}
        </span>

      </div>

    </v-card-text>

    <!-- Acción -->
    <v-card-actions class="actions">
      <v-btn
        variant="flat"
        class="btn-project"
        @click="$emit('abrir')"
      >
        Ver detalle
      </v-btn>
    </v-card-actions>

  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { TecnologiaProyecto } from '@/interfaces/portfolio'

export default defineComponent({
  name: 'ProyectosResumen',
  emits: ['abrir'],

  props: {
    titulo: { type: String, required: true },
    arquitectura: { type: String, default: 'Monolítica' },
    rol: { type: String, required: true },
    descripcion: { type: String, required: true },
    portada: { type: String, required: true },

    tecnologias: {
      type: Array as PropType<TecnologiaProyecto[]>,
      default: () => []
    }
  }
})
</script>

<style scoped>

.project-card {
  /* En lugar de usar el 100% del contenedor padre, la limitamos */
  width: 100%; 
  max-width: 620px; /* <--- AQUÍ DECIDES EL TAMAÑO DE LA TARJETA */
  margin: 0 auto;   /* <--- Centra la tarjeta si la pantalla es más ancha que 420px */

  height: 100%;
  background: rgba(34, 34, 34, 1);
  color: white;
  border-radius: 16px;
  border: 1px solid rgba(218, 165, 32, 0.35);
  overflow: hidden;
  transition: all 0.25s ease;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 30px rgba(218, 165, 32, 0.25);
}

/* =========================
   IMAGEN - PROBANDO DIMENSIONES
   ========================= */

.image-wrapper {
  position: relative;
  width: 100%;
  
  /* ✏️ JUEGA CON ESTO: Cambia "16 / 9" por "4 / 3" o "1 / 1" */
  aspect-ratio: 16 / 9; 

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(34, 34, 34, 1);
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 100%;
  /* max-width: 70%;  <--- Puedes borrar esto o ponerlo en 100% */
  filter: brightness(0.9);
}

.project-image :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: contain; 
  object-position: center;
}

.image-overlay {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2; 
}

.arch-badge {
  background: rgba(218, 165, 32, 0.9);
  color: black;
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  font-weight: 600;
}

/* =========================
   RESTO DEL CONTENIDO
========================= */

.content {
  padding-bottom: 0;
}

.project-title {
  color: rgba(218, 165, 32, 1);
  font-weight: 700;
  font-size: 1.1rem;
}

.project-subtitle {
  opacity: 0.8;
  font-size: 0.9rem;
}

.project-body {
  padding-top: 0;
}

.project-description {
  font-size: 0.95rem;
  line-height: 1.5;
  opacity: 0.9;
  margin-bottom: 12px;
}

.tech-container {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
}

.tech-chip {
  background: rgba(218, 165, 32, 0.12);
  color: rgba(255, 215, 0, 1);
  font-size: 11px;
}

.more-tech {
  font-size: 12px;
  opacity: 0.7;
}

.actions {
  padding: 12px;
}

.btn-project {
  width: 100%;
  background: rgba(218, 165, 32, 1);
  color: black;
  font-weight: 600;
  border-radius: 10px;
}

.btn-project:hover {
  background: rgba(255, 215, 0, 1);
}

</style>