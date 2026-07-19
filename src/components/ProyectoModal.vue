<template>
  <v-dialog
    :model-value="visible"
    max-width="1200"
    @update:model-value="$emit('cerrar')"
  >
    <v-card class="modal-card">

      <!-- =========================
           BOTÓN DE CIERRE
      ========================== -->
      <div class="modal-header">
        <v-btn
          icon
          class="btn-close"
          variant="text"
          aria-label="Cerrar detalle del proyecto"
          @click="$emit('cerrar')"
        >
          <v-icon color="white">
            mdi-close
          </v-icon>
        </v-btn>
      </div>

      <!-- =========================
           INFORMACIÓN DEL PROYECTO
      ========================== -->
      <section class="project-header">
        <h2 class="modal-title">
          {{ proyecto?.titulo }}
        </h2>

        <p class="modal-subtitle">
          {{ proyecto?.arquitectura }} · {{ proyecto?.rol }}
        </p>

        <div class="project-summary">
          <h3 class="summary-title">
            Descripción
          </h3>

          <p class="modal-description">
            {{ proyecto?.descripcion_larga }}
          </p>
        </div>
      </section>

      <!-- =========================
           GALERÍA DEL PROYECTO
      ========================== -->
      <div
        v-if="totalImages > 0"
        class="gallery-wrapper"
      >
        <!-- Botón anterior -->
        <v-btn
          class="nav-btn nav-prev"
          icon="mdi-chevron-left"
          variant="flat"
          aria-label="Ver imágenes anteriores"
          :disabled="currentIndex === 0"
          @click="prevSlide"
        />

        <!-- Contenedor del carrusel -->
        <div
          ref="scrollContainer"
          class="scroll-container"
          :class="{
            centered: totalImages <= itemsToShow,
          }"
        >
          <button
            v-for="(imagen, i) in proyecto?.imagenes"
            :key="`img-${i}`"
            type="button"
            class="image-frame"
            :aria-label="`Ampliar imagen ${i + 1}`"
            @click="openImageViewer(imagen.imagen, i)"
          >
            <v-img
              :src="imagen.imagen"
              class="gallery-img"
              contain
            />

            <!-- Indicador para ampliar -->
            <div class="image-overlay">
              <v-icon size="30">
                mdi-magnify-plus-outline
              </v-icon>

              <span>
                Ampliar imagen
              </span>
            </div>
          </button>
        </div>

        <!-- Botón siguiente -->
        <v-btn
          class="nav-btn nav-next"
          icon="mdi-chevron-right"
          variant="flat"
          aria-label="Ver imágenes siguientes"
          :disabled="currentIndex >= maxIndex"
          @click="nextSlide"
        />

        <!-- Indicadores del carrusel -->
        <div
          v-if="totalPages > 1"
          class="gallery-pagination"
        >
          <button
            v-for="pageIndex in totalPages"
            :key="`indicator-${pageIndex - 1}`"
            type="button"
            class="pagination-dot"
            :class="{
              active: currentIndex === pageIndex - 1,
            }"
            :aria-label="`Ir a la posición ${pageIndex} de la galería`"
            @click="goToSlide(pageIndex - 1)"
          />

          <span class="gallery-counter">
            {{ currentIndex + 1 }} / {{ totalPages }}
          </span>
        </div>
      </div>

      <!-- =========================
           TECNOLOGÍAS Y FUNCIONES
      ========================== -->
      <section class="project-details">

        <!-- Tecnologías -->
        <h3 class="section-title">
          Tecnologías
        </h3>

        <div class="chips-container">
          <v-chip
            v-for="(tech, i) in proyecto?.tecnologias"
            :key="`tech-${i}`"
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

        <!-- Funcionalidades -->
        <h3 class="section-title">
          Funcionalidades
        </h3>

        <div class="features-list">
          <div
            v-for="(funcionalidad, i) in proyecto?.funcionalidades"
            :key="`feature-${i}`"
            class="feature-item"
          >
            <v-icon
              size="small"
              color="amber"
            >
              mdi-check-circle
            </v-icon>

            <span class="feature-text">
              {{ funcionalidad.funcionalidad }}
            </span>
          </div>
        </div>
      </section>

      <!-- =========================
           VISOR DE IMAGEN AMPLIADA
      ========================== -->
      <Transition name="viewer-fade">
        <div
          v-if="imageViewerOpen"
          class="image-viewer"
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada de la imagen"
          @click.self="closeImageViewer"
        >
          <!-- Barra superior -->
          <div class="viewer-toolbar">
            <span class="viewer-counter">
              Imagen {{ selectedImageIndex + 1 }} de {{ totalImages }}
            </span>

            <div class="viewer-actions">
              <v-btn
                icon="mdi-magnify-minus-outline"
                variant="text"
                color="white"
                aria-label="Alejar imagen"
                :disabled="imageScale <= minScale"
                @click.stop="zoomOut"
              />

              <span class="zoom-value">
                {{ Math.round(imageScale * 100) }}%
              </span>

              <v-btn
                icon="mdi-magnify-plus-outline"
                variant="text"
                color="white"
                aria-label="Acercar imagen"
                :disabled="imageScale >= maxScale"
                @click.stop="zoomIn"
              />

              <v-btn
                icon="mdi-refresh"
                variant="text"
                color="white"
                aria-label="Restablecer imagen"
                @click.stop="resetZoom"
              />

              <v-btn
                icon="mdi-close"
                variant="text"
                color="white"
                aria-label="Cerrar imagen ampliada"
                @click.stop="closeImageViewer"
              />
            </div>
          </div>

          <!-- Área de visualización -->
          <div
            ref="viewerCanvas"
            class="viewer-canvas"
            :class="{
              dragging: isDragging,
              zoomed: imageScale > 1,
            }"
            @wheel.prevent="handleViewerWheel"
            @pointerdown="startDrag"
            @pointermove="dragImage"
            @pointerup="stopDrag"
            @pointercancel="stopDrag"
            @pointerleave="stopDrag"
          >
            <img
              v-if="selectedImage"
              :src="selectedImage"
              class="viewer-image"
              alt="Imagen ampliada del proyecto"
              draggable="false"
              :style="viewerImageStyle"
              @dblclick.prevent="toggleZoom"
            >
          </div>

          <p class="viewer-help">
            Usa la rueda para acercar · Arrastra para desplazarte · Doble clic para ampliar
          </p>
        </div>
      </Transition>

    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from 'vue'

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

defineEmits<{
  cerrar: []
}>()

/* =========================
   ESTADO DEL CARRUSEL
========================= */

const scrollContainer = ref<HTMLElement | null>(null)
const currentIndex = ref(0)

const windowWidth = ref(
  typeof window !== 'undefined'
    ? window.innerWidth
    : 1200
)

/* =========================
   ESTADO DEL VISOR
========================= */

const viewerCanvas = ref<HTMLElement | null>(null)

const imageViewerOpen = ref(false)
const selectedImage = ref<string | null>(null)
const selectedImageIndex = ref(0)

const imageScale = ref(1)

const minScale = 1
const maxScale = 4
const zoomStep = 0.25

const imagePosition = ref({
  x: 0,
  y: 0,
})

const isDragging = ref(false)

const dragStart = ref({
  pointerX: 0,
  pointerY: 0,
  imageX: 0,
  imageY: 0,
})

/* =========================
   CÁLCULOS DEL CARRUSEL
========================= */

const totalImages = computed(() => {
  return props.proyecto?.imagenes?.length ?? 0
})

/*
  Escritorio y tablet:
  se muestran dos imágenes.

  Móvil:
  se muestra una imagen.
*/
const itemsToShow = computed(() => {
  return windowWidth.value <= 600 ? 1 : 2
})

const maxIndex = computed(() => {
  return Math.max(
    0,
    totalImages.value - itemsToShow.value
  )
})

const totalPages = computed(() => {
  return maxIndex.value + 1
})

/* =========================
   ESTILO DE LA IMAGEN AMPLIADA
========================= */

const viewerImageStyle = computed(() => {
  return {
    transform: `
      translate3d(
        ${imagePosition.value.x}px,
        ${imagePosition.value.y}px,
        0
      )
      scale(${imageScale.value})
    `,
  }
})

/* =========================
   MOVIMIENTO DEL CARRUSEL
========================= */

const updateScroll = () => {
  const container = scrollContainer.value

  if (!container) return

  const firstImage = container.querySelector<HTMLElement>(
    '.image-frame'
  )

  if (!firstImage) return

  const containerStyles = window.getComputedStyle(container)

  const gap =
    Number.parseFloat(
      containerStyles.columnGap ||
      containerStyles.gap
    ) || 0

  const movement =
    firstImage.getBoundingClientRect().width + gap

  container.scrollTo({
    left: currentIndex.value * movement,
    behavior: 'smooth',
  })
}

const nextSlide = () => {
  if (currentIndex.value >= maxIndex.value) return

  currentIndex.value += 1
  updateScroll()
}

const prevSlide = () => {
  if (currentIndex.value <= 0) return

  currentIndex.value -= 1
  updateScroll()
}

const goToSlide = (index: number) => {
  currentIndex.value = Math.min(
    Math.max(index, 0),
    maxIndex.value
  )

  updateScroll()
}

/* =========================
   VISOR DE IMÁGENES
========================= */

const openImageViewer = (
  imageSource: string,
  imageIndex: number
) => {
  selectedImage.value = imageSource
  selectedImageIndex.value = imageIndex
  imageViewerOpen.value = true

  resetZoom()
}

const closeImageViewer = () => {
  imageViewerOpen.value = false
  selectedImage.value = null
  isDragging.value = false

  resetZoom()
}

const resetZoom = () => {
  imageScale.value = 1

  imagePosition.value = {
    x: 0,
    y: 0,
  }
}

const setZoom = (newScale: number) => {
  imageScale.value = Math.min(
    Math.max(newScale, minScale),
    maxScale
  )

  if (imageScale.value === 1) {
    imagePosition.value = {
      x: 0,
      y: 0,
    }
  }
}

const zoomIn = () => {
  setZoom(imageScale.value + zoomStep)
}

const zoomOut = () => {
  setZoom(imageScale.value - zoomStep)
}

const toggleZoom = () => {
  if (imageScale.value > 1) {
    resetZoom()
    return
  }

  setZoom(2)
}

const handleViewerWheel = (event: WheelEvent) => {
  if (event.deltaY < 0) {
    zoomIn()
    return
  }

  zoomOut()
}

/* =========================
   ARRASTRAR IMAGEN
========================= */

const startDrag = (event: PointerEvent) => {
  if (imageScale.value <= 1) return

  isDragging.value = true

  dragStart.value = {
    pointerX: event.clientX,
    pointerY: event.clientY,
    imageX: imagePosition.value.x,
    imageY: imagePosition.value.y,
  }

  viewerCanvas.value?.setPointerCapture(event.pointerId)
}

const dragImage = (event: PointerEvent) => {
  if (!isDragging.value) return

  imagePosition.value = {
    x:
      dragStart.value.imageX +
      event.clientX -
      dragStart.value.pointerX,

    y:
      dragStart.value.imageY +
      event.clientY -
      dragStart.value.pointerY,
  }
}

const stopDrag = (event?: PointerEvent) => {
  isDragging.value = false

  if (
    event &&
    viewerCanvas.value?.hasPointerCapture(event.pointerId)
  ) {
    viewerCanvas.value.releasePointerCapture(
      event.pointerId
    )
  }
}

/* =========================
   TECLADO
========================= */

const handleKeydown = (event: KeyboardEvent) => {
  if (!imageViewerOpen.value) return

  if (event.key === 'Escape') {
    event.preventDefault()
    event.stopPropagation()
    event.stopImmediatePropagation()

    closeImageViewer()
    return
  }

  if (event.key === '+' || event.key === '=') {
    event.preventDefault()
    zoomIn()
    return
  }

  if (event.key === '-') {
    event.preventDefault()
    zoomOut()
    return
  }

  if (event.key === '0') {
    event.preventDefault()
    resetZoom()
  }
}

/* =========================
   REINICIAR GALERÍA
========================= */

const resetGallery = async () => {
  currentIndex.value = 0

  await nextTick()

  if (scrollContainer.value) {
    scrollContainer.value.scrollTo({
      left: 0,
      behavior: 'auto',
    })
  }
}

watch(
  () => props.visible,
  async (isVisible) => {
    if (isVisible) {
      await resetGallery()
      return
    }

    closeImageViewer()
  }
)

watch(
  () => props.proyecto,
  async () => {
    closeImageViewer()
    await resetGallery()
  }
)

/* =========================
   RESPONSIVE
========================= */

const handleResize = async () => {
  windowWidth.value = window.innerWidth

  if (currentIndex.value > maxIndex.value) {
    currentIndex.value = maxIndex.value
  }

  await nextTick()
  updateScroll()
}

/* =========================
   CICLO DE VIDA
========================= */

onMounted(() => {
  window.addEventListener('resize', handleResize)
  window.addEventListener('keydown', handleKeydown, true)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('keydown', handleKeydown, true)
})
</script>

<style scoped>
/* =========================
   MODAL BASE
========================= */

.modal-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: rgba(34, 34, 34, 1);
  color: white;
  border: 1px solid rgba(218, 165, 32, 0.8);
  overflow: hidden;
}

.modal-header {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 30;
  display: flex;
  justify-content: flex-end;
  padding: 14px;
  pointer-events: none;
}

.btn-close {
  width: 48px;
  height: 48px;
  pointer-events: auto;
  background: rgba(0, 0, 0, 0.72);
  border-radius: 50%;
  backdrop-filter: blur(4px);
  transition:
    background-color 0.25s ease,
    transform 0.25s ease;
}

.btn-close:hover {
  background: rgba(218, 165, 32, 0.95);
  transform: scale(1.05);
}

/* =========================
   INFORMACIÓN SUPERIOR
========================= */

.project-header {
  flex: 0 0 auto;
  padding: 28px 86px 8px 30px;
}

.modal-title {
  max-width: 1050px;
  margin: 0;
  color: rgba(218, 165, 32, 1);
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 700;
  line-height: 1.15;
}

.modal-subtitle {
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.78);
  font-size: 1.05rem;
  line-height: 1.4;
}

/* =========================
   DESCRIPCIÓN
========================= */

.project-summary {
  margin-top: 28px;
  padding: 24px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.04),
    rgba(255, 255, 255, 0.02)
  );
  border: 1px solid rgba(218, 165, 32, 0.15);
  border-radius: 14px;
}

.summary-title {
  margin-top: 0;
  margin-bottom: 14px;
  color: rgba(218, 165, 32, 1);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
}

.modal-description {
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  line-height: 1.85;
}

/* =========================
   GALERÍA
========================= */

.gallery-wrapper {
  position: relative;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 68px 52px;
  margin-top: 4px;
  background-color: rgba(34, 34, 34, 1);
}

.scroll-container {
  width: 100%;
  max-width: 1080px;
  display: flex;
  gap: 20px;
  overflow-x: hidden;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
}

.scroll-container.centered {
  justify-content: center;
}

/* =========================
   IMAGEN INDIVIDUAL
========================= */

.image-frame {
  position: relative;
  flex: 0 0 calc((100% - 20px) / 2);
  aspect-ratio: 16 / 9;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0;
  color: inherit;
  font: inherit;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(218, 165, 32, 0.16);
  border-radius: 8px;
  scroll-snap-align: start;
  cursor: zoom-in;
  transition:
    border-color 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.image-frame:hover {
  border-color: rgba(218, 165, 32, 0.7);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
}

.image-frame:focus-visible {
  outline: 2px solid rgba(218, 165, 32, 1);
  outline-offset: 3px;
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

/* Capa para indicar que la imagen puede ampliarse */
.image-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  background: rgba(0, 0, 0, 0.54);
  opacity: 0;
  transition:
    opacity 0.25s ease,
    backdrop-filter 0.25s ease;
}

.image-frame:hover .image-overlay,
.image-frame:focus-visible .image-overlay {
  opacity: 1;
  backdrop-filter: blur(2px);
}

/* =========================
   BOTONES DEL CARRUSEL
========================= */

.nav-btn {
  position: absolute;
  top: calc(50% - 12px);
  z-index: 10;
  width: 44px;
  height: 44px;
  color: white;
  background: rgba(0, 0, 0, 0.72);
  border-radius: 50%;
  transform: translateY(-50%);
  backdrop-filter: blur(4px);
  transition:
    background-color 0.25s ease,
    color 0.25s ease,
    opacity 0.25s ease,
    transform 0.25s ease;
}

.nav-prev {
  left: 14px;
}

.nav-next {
  right: 14px;
}

.nav-btn:hover:not(:disabled) {
  color: black;
  background: rgba(218, 165, 32, 0.95);
  transform: translateY(-50%) scale(1.05);
}

.nav-btn:disabled {
  opacity: 0.2;
}

/* =========================
   INDICADORES
========================= */

.gallery-pagination {
  position: absolute;
  bottom: 16px;
  left: 50%;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 8px;
  transform: translateX(-50%);
}

.pagination-dot {
  width: 8px;
  height: 8px;
  padding: 0;
  background: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 999px;
  cursor: pointer;
  transition:
    width 0.25s ease,
    background-color 0.25s ease,
    transform 0.25s ease;
}

.pagination-dot:hover {
  background: rgba(218, 165, 32, 0.65);
  transform: scale(1.15);
}

.pagination-dot.active {
  width: 24px;
  background: rgba(218, 165, 32, 1);
}

.gallery-counter {
  min-width: 42px;
  margin-left: 6px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.78rem;
  text-align: center;
}

/* =========================
   DETALLES INFERIORES
========================= */

.project-details {
  padding: 6px 30px 30px;
}

.section-title {
  margin-top: 24px;
  margin-bottom: 12px;
  color: rgba(218, 165, 32, 1);
  font-size: 1.2rem;
}

/* =========================
   TECNOLOGÍAS
========================= */

.chips-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-chip {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  color: rgba(255, 215, 0, 1);
  background-color: rgba(218, 165, 32, 0.12);
  border-radius: 10px;
  font-size: 12px;
}

.tech-name {
  font-weight: 600;
}

.tech-category {
  font-size: 11px;
  opacity: 0.7;
}

/* =========================
   FUNCIONALIDADES
========================= */

.features-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  background: rgba(255, 255, 255, 0.03);
  border-left: 2px solid rgba(218, 165, 32, 0.6);
  border-radius: 8px;
}

.feature-text {
  font-size: 0.95rem;
}

/* =========================
   VISOR AMPLIADO
========================= */

.image-viewer {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 18px;
  background: rgba(8, 8, 8, 0.97);
  backdrop-filter: blur(8px);
}

.viewer-toolbar {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  min-height: 54px;
  padding: 0 8px 12px;
}

.viewer-counter {
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.9rem;
}

.viewer-actions {
  display: flex;
  align-items: center;
  gap: 4px;
}

.zoom-value {
  min-width: 52px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.85rem;
  text-align: center;
}

.viewer-canvas {
  position: relative;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 0;
  overflow: hidden;
  background:
    radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.04),
      transparent 65%
    );
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  cursor: default;
  touch-action: none;
  user-select: none;
}

.viewer-canvas.zoomed {
  cursor: grab;
}

.viewer-canvas.dragging {
  cursor: grabbing;
}

.viewer-image {
  display: block;
  max-width: 94%;
  max-height: 88%;
  object-fit: contain;
  transform-origin: center center;
  transition: transform 0.14s ease-out;
  user-select: none;
  pointer-events: none;
}

.viewer-canvas.dragging .viewer-image {
  transition: none;
}

.viewer-help {
  flex: 0 0 auto;
  margin: 10px 0 0;
  color: rgba(255, 255, 255, 0.48);
  font-size: 0.78rem;
  text-align: center;
}

/* Animación del visor */
.viewer-fade-enter-active,
.viewer-fade-leave-active {
  transition: opacity 0.2s ease;
}

.viewer-fade-enter-from,
.viewer-fade-leave-to {
  opacity: 0;
}

/* =========================
   ESCRITORIO
========================= */

@media (min-width: 961px) {
  .features-list {
    grid-template-columns: 1fr 1fr;
  }
}

/* =========================
   TABLET
========================= */

@media (max-width: 960px) {
  .project-header {
    padding: 24px 72px 6px 24px;
  }

  .modal-title {
    font-size: 1.8rem;
  }

  .project-summary {
    margin-top: 22px;
  }

  .gallery-wrapper {
    padding: 20px 52px 50px;
  }

  .scroll-container {
    gap: 14px;
  }

  .image-frame {
    flex-basis: calc((100% - 14px) / 2);
  }

  .nav-prev {
    left: 6px;
  }

  .nav-next {
    right: 6px;
  }

  .project-details {
    padding: 4px 24px 26px;
  }
}

/* =========================
   MÓVIL
========================= */

@media (max-width: 600px) {
  .project-header {
    padding: 68px 18px 4px;
  }

  .modal-title {
    font-size: 1.5rem;
  }

  .modal-subtitle {
    font-size: 0.9rem;
  }

  .project-summary {
    margin-top: 18px;
    padding: 18px;
  }

  .summary-title {
    font-size: 0.9rem;
  }

  .modal-description {
    font-size: 0.95rem;
    line-height: 1.7;
  }

  .gallery-wrapper {
    padding: 18px 38px 48px;
  }

  .scroll-container {
    gap: 12px;
  }

  .image-frame {
    flex-basis: 100%;
  }

  .image-overlay span {
    display: none;
  }

  .nav-btn {
    width: 32px;
    height: 32px;
  }

  .nav-prev {
    left: 3px;
  }

  .nav-next {
    right: 3px;
  }

  .gallery-pagination {
    bottom: 14px;
  }

  .pagination-dot {
    width: 7px;
    height: 7px;
  }

  .pagination-dot.active {
    width: 20px;
  }

  .gallery-counter {
    margin-left: 4px;
    font-size: 0.72rem;
  }

  .project-details {
    padding: 2px 18px 22px;
  }

  .features-list {
    grid-template-columns: 1fr;
  }

  /* Visor móvil */
  .image-viewer {
    padding: 8px;
  }

  .viewer-toolbar {
    padding: 0 0 8px;
  }

  .viewer-counter {
    display: none;
  }

  .viewer-actions {
    width: 100%;
    justify-content: flex-end;
  }

  .viewer-canvas {
    border-radius: 10px;
  }

  .viewer-image {
    max-width: 100%;
    max-height: 90%;
  }

  .viewer-help {
    font-size: 0.68rem;
  }
}
</style>