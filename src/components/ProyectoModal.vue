<template>
  <v-dialog
    :model-value="visible"
    max-width="1200"
    @update:model-value="$emit('cerrar')"
  >
    <v-card class="modal-card">

      <!-- HEADER CON EL BOTÓN DE CERRAR -->
      <div class="modal-header">
        <v-btn
          icon
          class="btn-close"
          variant="text"
          @click="$emit('cerrar')"
        >
          <v-icon color="white">mdi-close</v-icon>
        </v-btn>
      </div>

      <!-- GALERÍA MÚLTIPLE -->
      <div class="gallery-wrapper">
        
        <!-- Botón Anterior -->
        <v-btn 
          class="nav-btn nav-prev" 
          icon="mdi-chevron-left" 
          variant="flat"
          @click="prevSlide"
          :style="{ 
            opacity: currentIndex === 0 ? 0 : 1, 
            pointerEvents: currentIndex === 0 ? 'none' : 'auto' 
          }"
        ></v-btn>

        <!-- Contenedor de imágenes con desplazamiento -->
        <div 
          class="scroll-container" 
          ref="scrollContainer"
          :class="{ 'centered': (proyecto?.imagenes?.length || 0) < 3 }"
        >
          <!-- 1. IMÁGENES REALES -->
          <div 
            v-for="(imagen, i) in proyecto?.imagenes" 
            :key="`img-${i}`"
            class="image-frame"
          >
            <v-img
              :src="imagen.imagen"
              class="gallery-img"
              contain
            />
          </div>
        </div>

        <!-- Botón Siguiente -->
        <v-btn 
          class="nav-btn nav-next" 
          icon="mdi-chevron-right" 
          variant="flat"
          @click="nextSlide"
          :style="{ 
            opacity: currentIndex >= maxIndex ? 0 : 1, 
            pointerEvents: currentIndex >= maxIndex ? 'none' : 'auto' 
          }"
        ></v-btn>

      </div>

      <!-- CONTENIDO (Tecnologías y funcionalidades) -->
      <v-card-item>
        <v-card-title class="modal-title">
          {{ proyecto?.titulo }}
        </v-card-title>

        <v-card-subtitle class="modal-subtitle">
          {{ proyecto?.arquitectura }} · {{ proyecto?.rol }}
        </v-card-subtitle>
      </v-card-item>

      <v-card-text>
        <p class="modal-description">
          {{ proyecto?.descripcion_larga }}
        </p>

        <!-- TECNOLOGÍAS -->
        <h3 class="section-title">
          Tecnologías
        </h3>

        <div class="chips-container">
          <v-chip
            v-for="(tech, i) in proyecto?.tecnologias"
            :key="i"
            class="tech-chip"
            size="small"
          >
            <span class="tech-name">
              {{ tech.tecnologia }}
            </span>
            <span class="tech-category">
              {{ tech.categoria }}
            </span>
          </v-chip>
        </div>

        <!-- FUNCIONALIDADES -->
        <h3 class="section-title">
          Funcionalidades
        </h3>

        <div class="features-list">
          <div
            v-for="(f, i) in proyecto?.funcionalidades"
            :key="i"
            class="feature-item"
          >
            <v-icon size="small" color="amber">
              mdi-check-circle
            </v-icon>
            <span class="feature-text">
              {{ f.funcionalidad }}
            </span>
          </div>
        </div>

      </v-card-text>

    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import type { PropType } from 'vue'
import type { ProyectoCompleto } from '@/interfaces/portfolio'

const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
  proyecto: {
    type: Object as PropType<ProyectoCompleto | null>,
    default: null,
  },
})

defineEmits(['cerrar'])

const scrollContainer = ref<HTMLElement | null>(null)
const currentIndex = ref(0)

// Calculamos cuántas imágenes se muestran según la pantalla
const getItemsToShow = () => {
  if (typeof window === 'undefined') return 3
  if (window.innerWidth <= 600) return 1
  if (window.innerWidth <= 960) return 2
  return 3
}

// Calculamos el índice máximo al que podemos llegar
const maxIndex = computed(() => {
  if (!props.proyecto?.imagenes) return 0
  const total = props.proyecto.imagenes.length
  const itemsToShow = getItemsToShow()
  
  if (total <= itemsToShow) return 0
  return total - itemsToShow
})

const nextSlide = () => {
  if (!scrollContainer.value || !props.proyecto?.imagenes) return
  
  if (currentIndex.value < maxIndex.value) {
    currentIndex.value++
    updateScroll()
  }
}

const prevSlide = () => {
  if (!scrollContainer.value || !props.proyecto?.imagenes) return
  
  if (currentIndex.value > 0) {
    currentIndex.value--
    updateScroll()
  }
}

const updateScroll = () => {
  if (!scrollContainer.value || !props.proyecto?.imagenes) return
  
  const totalImages = props.proyecto.imagenes.length
  const containerWidth = scrollContainer.value.scrollWidth
  const itemWidth = containerWidth / totalImages
  
  scrollContainer.value.scrollTo({
    left: currentIndex.value * itemWidth,
    behavior: 'smooth'
  })
}

// Si el modal se cierra, reiniciamos el índice a 0
watch(() => props.visible, (newVal) => {
  if (!newVal) {
    currentIndex.value = 0
  }
})

onMounted(() => {
  window.addEventListener('resize', () => {
    if (scrollContainer.value) {
      updateScroll()
    }
  })
})
</script>

<style scoped>
/* =========================
   MODAL BASE
========================= */
.modal-card {
  background-color: rgba(34, 34, 34, 1);
  color: white;
  border: 1px solid rgba(218, 165, 32, 0.8);
  position: relative;
  display: flex;
  flex-direction: column;
}

.modal-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  display: flex;
  justify-content: flex-end;
  padding: 12px;
  background: transparent;
  pointer-events: none;
}

.btn-close {
  pointer-events: auto;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  backdrop-filter: blur(4px);
}

/* =========================
   GALERÍA MÚLTIPLE
========================= */
.gallery-wrapper {
  width: 100%;
  aspect-ratio: 16 / 9;
  max-height: 450px;
  position: relative;
  background-color: rgba(34, 34, 34, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 60px;
  margin-top: 20px;
}

.scroll-container {
  width: 100%;
  height: 100%;
  display: flex;
  overflow-x: hidden;
  scroll-behavior: smooth;
  gap: 16px;
  padding-right: 16px;
}

/* 🔥 Cuando hay menos de 3 imágenes, centramos todo el conjunto */
.scroll-container.centered {
  justify-content: center;
}

.image-frame {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  flex-shrink: 0;
  
  /* Por defecto en PC: 3 imágenes (33.33%) */
  width: calc(33.333% - 11px);
}

.gallery-img {
  width: 100%;
  height: 100%;
}

.gallery-img :deep(img) {
  width: 100% !important;
  height: 100% !important;
  object-fit: contain;
  object-position: center;
}

/* =========================
   BOTONES DE NAVEGACIÓN
========================= */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  backdrop-filter: blur(4px);
  transition: opacity 0.3s ease;
}
.nav-prev { left: 4px; }
.nav-next { right: 4px; }

.nav-btn:hover {
  background: rgba(218, 165, 32, 0.8);
  color: black;
}

/* =========================
   RESPONSIVE
========================= */
@media (max-width: 960px) and (min-width: 601px) {
  .image-frame {
    width: calc(50% - 8px);
  }
  .gallery-wrapper { 
    max-height: 320px; 
    padding: 10px 50px;
  }
}

@media (max-width: 600px) {
  .image-frame {
    width: 100%;
  }
  .gallery-wrapper { 
    max-height: 220px; 
    padding: 8px 40px;
    margin-top: 10px;
  }
  .nav-btn { 
    width: 30px; 
    height: 30px; 
  }
  .modal-title { font-size: 1.5rem; }
}

/* =========================
   TITLES, SECTION, ETC
========================= */
.modal-title { font-size: 2rem; color: rgba(218, 165, 32, 1); font-weight: bold; }
.modal-subtitle { opacity: 0.8; font-size: 1rem; }
.modal-description { line-height: 1.7; margin-bottom: 24px; opacity: 0.9; }
.section-title { margin-top: 28px; margin-bottom: 12px; color: rgba(218, 165, 32, 1); font-size: 1.2rem; }

.chips-container { display: flex; flex-wrap: wrap; gap: 8px; }
.tech-chip { background-color: rgba(218, 165, 32, 0.12); color: rgba(255, 215, 0, 1); border-radius: 10px; font-size: 12px; padding: 6px 10px; display: flex; gap: 6px; align-items: center; }
.tech-name { font-weight: 600; }
.tech-category { font-size: 11px; opacity: 0.7; }

.features-list { display: grid; grid-template-columns: 1fr; gap: 8px; }
@media (min-width: 961px) {
  .features-list { grid-template-columns: 1fr 1fr; }
}
.feature-item { display: flex; align-items: center; gap: 10px; padding: 8px 10px; border-radius: 8px; background: rgba(255, 255, 255, 0.03); border-left: 2px solid rgba(218, 165, 32, 0.6); }
.feature-text { font-size: 0.95rem; }
</style>