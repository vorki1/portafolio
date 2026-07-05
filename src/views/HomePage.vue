<template>
  <div>

    <!-- ========================================================= -->
    <!-- 1. PRESENTACIÓN Y CV (Se muestra INMEDIATAMENTE)          -->
    <!-- ========================================================= -->
    <p class="text-h3" style="margin-bottom: 40px;">
      Hola!, mi nombre es
      <br/>
      Javier Ignacio Saldaño Hernández
    </p>

    <p class="text-h4" style="color: rgba(218, 165, 32, 1); margin: 20px;">
      Ingeniero civil en computación e informática
    </p>

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

    <v-btn class="boton-home" @click="descargarCV">
      Descargar CV
    </v-btn>

    <hr class="division"/>
    
    <!-- EXPERIENCIA (Comentada) -->
    <!-- <p class="text-title"> Experiencia </p> <hr class="division"/> -->

    <br id="proyectos">
    <br>
    <p class="text-title"> Proyectos </p>

    <!-- ========================================================= -->
    <!-- 2. SECCIÓN PROYECTOS (CON ESQUELETOS Y CARGA ASÍNCRONA)   -->
    <!-- ========================================================= -->
    
        <!-- Estado 1: Cargando (Esqueleto personalizado) -->
    <div v-if="loading" class="skeleton-grid">
      <v-row>
        <v-col 
          v-for="i in 6" 
          :key="i" 
          cols="12" 
          md="6" 
          lg="4"
        >
          <!-- Esqueleto hecho a medida de tu tarjeta -->
          <div class="custom-skeleton-card">
            <!-- 1. Espacio para la imagen (16:9) -->
            <div class="skeleton-image"></div>
            <!-- 2. Espacio para el título -->
            <div class="skeleton-title"></div>
            <!-- 3. Espacio para la descripción -->
            <div class="skeleton-text"></div>
            <div class="skeleton-text short"></div>
            <!-- 4. Espacio para el botón -->
            <div class="skeleton-button"></div>
          </div>
        </v-col>
      </v-row>
    </div>

    <!-- Estado 2: Error en la API -->
    <div v-else-if="error" class="text-center" style="color: #ff5252; margin: 40px;">
      ⚠️ No se pudieron cargar los proyectos. Intenta recargar la página.
    </div>

    <!-- Estado 3: Datos cargados (Muestra las tarjetas reales) -->
    <div v-else>
      <v-row>
        <v-col
          v-for="proyecto in portfolio?.proyectos"
          :key="proyecto.id"
          cols="12"
          md="6"
          lg="4"
        >
          <ProyectoResumen
            :titulo="proyecto.titulo"
            :rol="proyecto.rol"
            :descripcion="proyecto.descripcion_corta"
            :arquitectura="proyecto.arquitectura"
            :portada="proyecto.portada"
            :tecnologias="proyecto.tecnologias"
            @abrir="abrirProyecto(proyecto)"
          />
        </v-col>
      </v-row>
    </div>

    <!-- Modal de proyectos -->
    <ProjectModal
      :visible="modalVisible"
      :proyecto="proyectoSeleccionado"
      @cerrar="cerrarProyecto"
    />

    <!-- ========================================================= -->
    <!-- 3. STACK TECNOLÓGICO Y CONTACTO (Se muestra INMEDIATAMENTE)-->
    <!-- ========================================================= -->
    <hr class="division"/>
    <p class="text-title"> Stack tecnologico </p>
    <StackTecnologico />

    <!-- CERTIFICADOS (Comentada) -->
    <!-- <hr class="division"/> <p class="text-title"> certificados </p> -->

    <hr class="division"/>

    <p class="text-of-atention">
      ¿Tienes una propuesta, oferta laboral o necesitas una consultoría sobre tecnología?
      <br>
      ¡No dudes en contactarme!
    </p>

    <ContactoPersonal />

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import StackTecnologico from '../components/StackTecnologico.vue'
import ProyectoResumen from '../components/ProyectoResumen.vue'
import ProjectModal from '../components/ProyectoModal.vue'
import ContactoPersonal from '../components/ContactoPersonal.vue'
import { usePortfolio } from '@/views/UsePortfolio'
import type { ProyectoCompleto } from '@/interfaces/portfolio'

const { portfolio, loading, error } = usePortfolio()

const modalVisible = ref(false)
const proyectoSeleccionado = ref<ProyectoCompleto | null>(null)

function descargarCV() {
  const link = document.createElement('a')
  link.href = '/cv/Javier_Saldano_CV.pdf'
  link.download = 'Javier_Saldano_CV.pdf'
  link.click()
}

function abrirProyecto(proyecto: ProyectoCompleto) {
  proyectoSeleccionado.value = proyecto
  modalVisible.value = true
}

function cerrarProyecto() {
  modalVisible.value = false
}
</script>

<style scoped>
.caja-texto {
  max-width: 450px;
  margin: 24px auto;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(255, 221, 102, 1);
}

.boton-home {
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

.text-title {
  font-size: 3em;
  text-align: center;
  margin: 20px;
  color: rgba(218, 165, 32, 1);
}

.division {
  border: none;
  height: 3px;
  background: rgba(0, 0, 0, 1);
  margin: 24px 0;
  width: 100%;
}

/* =========================
   ESQUELETO PERSONALIZADO (Tamaño exacto a tu tarjeta)
========================= */
.skeleton-grid {
  margin: 20px 0;
}

.custom-skeleton-card {
  height: 100%;
  min-height: 480px; /* Ajustado a la altura real de tu tarjeta */
  background: rgba(34, 34, 34, 1);
  border-radius: 16px;
  border: 1px solid rgba(218, 165, 32, 0.35);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: hidden;
  position: relative;
}

/* La capa de animación brillante que recorre todo el esqueleto */
.custom-skeleton-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 200%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.05) 50%,
    transparent 100%
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(50%); }
}

/* 1. Imagen (16:9) */
.skeleton-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 8px;
}

/* 2. Título */
.skeleton-title {
  width: 80%;
  height: 24px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 6px;
  margin-top: 8px;
}

/* 3. Texto (Descripción) */
.skeleton-text {
  width: 100%;
  height: 14px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 4px;
  margin-top: 4px;
}
.skeleton-text.short {
  width: 60%;
}

/* 4. Botón */
.skeleton-button {
  width: 100%;
  height: 44px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  margin-top: auto; /* Empuja el botón al fondo de la tarjeta */
}
</style>