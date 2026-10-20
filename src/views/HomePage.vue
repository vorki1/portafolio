<template>
  <div>

    
    
    <!-- ========================================================= -->
    <!-- 1. PRESENTACIÓN PROFESIONAL - HERO -->
    <!-- ========================================================= -->

    <section class="hero" aria-labelledby="hero-title">

      <!-- Fondo decorativo -->
      
      <!-- Fondo geométrico decorativo -->
      <div class="hero-background" aria-hidden="true">
        <div class="hero-orbit hero-orbit-one"></div>
        <div class="hero-orbit hero-orbit-two"></div>

        <div class="hero-curve hero-curve-one"></div>
        <div class="hero-curve hero-curve-two"></div>
        <div class="hero-curve hero-curve-three"></div>

        <div class="hero-diagonal hero-diagonal-one"></div>
        <div class="hero-diagonal hero-diagonal-two"></div>
        <div class="hero-diagonal hero-diagonal-three"></div>

        <div class="hero-dots hero-dots-one"></div>
        <div class="hero-dots hero-dots-two"></div>
        <div class="hero-dots hero-dots-three"></div>
      </div>


      <div class="hero-container">
        <div class="hero-content">

          <!-- Saludo -->
          <div class="hero-eyebrow">
            <span class="hero-dot"></span>
            <span>HOLA, SOY</span>
            <span class="hero-line"></span>
          </div>

          <!-- Nombre -->
          <h1 id="hero-title" class="hero-name">
            Javier Ignacio
            <span>Saldaño Hernández</span>
          </h1>

          <!-- Profesión -->
          <h2 class="hero-profession">
            Ingeniero civil en computación e informática
          </h2>

          <!-- Descripción -->
          <p class="hero-description">
            Desarrollo soluciones tecnológicas que integran aplicaciones web,
            bases de datos y sistemas, con foco en resolver problemas reales
            y generar valor para los usuarios.
          </p>

          <!-- Redes profesionales -->
          <div class="hero-socials">

            <!-- GitHub -->
            <a
              href="https://github.com/vorki1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar GitHub"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.16c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.57-.29-5.27-1.29-5.27-5.75 0-1.27.45-2.3 1.19-3.11-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.16 1.19A10.98 10.98 0 0 1 12 6.8c.98 0 1.96.13 2.88.39 2.19-1.5 3.15-1.19 3.15-1.19.63 1.6.24 2.78.12 3.07.74.81 1.19 1.84 1.19 3.11 0 4.47-2.71 5.45-5.29 5.74.41.36.78 1.07.78 2.16v3.27c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/>
              </svg>
            </a>

            <!-- LinkedIn -->
            <a
              href="https://www.linkedin.com/in/javier-sldn-hrnndz/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar mi perfil de LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.46 7.89a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.29 10.86H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.75 1.36-1.55 2.79-1.55 2.99 0 3.58 1.97 3.58 4.53v5.27Z"/>
              </svg>
            </a>

          </div>
        </div>
      </div>
    </section>

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
      ¿Tienes una propuesta, idea o necesitas una consultoría sobre tecnología?
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
  height: 1px;
  width: 100%;

  margin: 0;

  background: linear-gradient(
    90deg,
    transparent,
    rgba(214, 166, 45, 0.22),
    transparent
  );
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




/* =========================================
   HERO - PRESENTACIÓN PROFESIONAL
========================================= */

.hero {
  --hero-gold: #d6a62d;
  --hero-gold-light: #f0c45a;
  --hero-background: #222222;

  position: relative;
  display: flex;
  align-items: center;

  width: 100%;
  min-height: 650px;
  padding: 100px 7% 95px;

  box-sizing: border-box;
  overflow: hidden;
  isolation: isolate;

  background: var(--hero-background);
  color: #f8f8f8;
  text-align: left;
}

/* =========================================
   FONDO GEOMÉTRICO
========================================= */

.hero-background {
  position: absolute;
  inset: 0;
  z-index: -1;

  overflow: hidden;
  pointer-events: none;

  background: #222222;
}

/* =========================================
   ÓRBITAS CIRCULARES
========================================= */

.hero-orbit {
  position: absolute;
  border: 1px solid rgba(214, 166, 45, 0.23);
  border-radius: 50%;
}

.hero-orbit-one {
  width: 820px;
  height: 820px;
  right: -520px;
  top: 12%;
  border-color: rgba(214, 166, 45, 0.40);
}

.hero-orbit-two {
  width: 540px;
  height: 540px;
  right: -360px;
  top: 42%;
  border-color: rgba(214, 166, 45, 0.16);
}

/* =========================================
   LÍNEAS CURVAS
========================================= */

.hero-curve {
  position: absolute;

  width: 150%;
  height: 600px;

  left: -15%;
  bottom: -490px;

  border-top: 1px solid rgba(214, 166, 45, 0.45);
  border-radius: 50% 50% 0 0;

  transform: rotate(-13deg);
  transform-origin: center;
}

.hero-curve-one {
  bottom: -455px;
  border-color: rgba(214, 166, 45, 0.50);
}

.hero-curve-two {
  bottom: -510px;
  transform: rotate(-9deg);

  border-color: rgba(214, 166, 45, 0.25);
}

.hero-curve-three {
  bottom: -555px;
  transform: rotate(-6deg);

  border-color: rgba(214, 166, 45, 0.12);
}

/* =========================================
   LÍNEAS DIAGONALES SUPERIORES
========================================= */

.hero-diagonal {
  position: absolute;

  width: 450px;
  height: 1px;

  background: linear-gradient(
    90deg,
    transparent,
    rgba(214, 166, 45, 0.25),
    transparent
  );

  transform: rotate(-42deg);
  transform-origin: center;
}

.hero-diagonal-one {
  top: 16%;
  left: 35%;
}

.hero-diagonal-two {
  top: 23%;
  left: 42%;
  opacity: 0.55;
}

.hero-diagonal-three {
  top: 16%;
  right: -10%;
  opacity: 0.6;
}

/* =========================================
   GRUPOS DE PARTÍCULAS DORADAS
========================================= */

.hero-dots {
  position: absolute;

  width: 80px;
  height: 80px;

  background-image: radial-gradient(
    circle,
    rgba(240, 196, 90, 0.85) 1px,
    transparent 1.5px
  );

  background-size: 20px 20px;
  opacity: 0.65;
}

.hero-dots-one {
  top: 28%;
  left: 53%;
}

.hero-dots-two {
  top: 68%;
  right: 23%;
  opacity: 0.45;
}

.hero-dots-three {
  top: 54%;
  right: 3%;
  opacity: 0.5;
}

/* =========================================
   CONTENIDO
========================================= */


.hero-container {
  position: relative;
  z-index: 2;

  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  transform: translateY(-60px);
}


.hero-content {
  max-width: 780px;

  animation: heroEntrance 0.9s ease-out both;
}

/* =========================================
   SALUDO
========================================= */

.hero-eyebrow {
  display: flex;
  align-items: center;

  gap: 14px;
  margin-bottom: 24px;

  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 3px;

  color: #e1e1e1;
}

.hero-dot {
  width: 9px;
  height: 9px;
  flex-shrink: 0;

  border-radius: 50%;
  background: var(--hero-gold);

  box-shadow: 0 0 12px rgba(214, 166, 45, 0.35);
}

.hero-line {
  width: 65px;
  height: 1px;

  background: var(--hero-gold);
}

/* =========================================
   NOMBRE
========================================= */

.hero-name {
  font-size: clamp(2.8rem, 4.5vw, 4.6rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -1.8px;
  margin: 0 0 22px;
  color: #f8f8f8;
}

.hero-name span {
  display: block;
}

/* =========================================
   PROFESIÓN
========================================= */

.hero-profession {
  margin-bottom: 20px;

  font-size: clamp(1.3rem, 2.3vw, 2.2rem);
  font-weight: 500;
  line-height: 1.35;

  color: var(--hero-gold-light);
}

/* =========================================
   DESCRIPCIÓN
========================================= */

.hero-description {
  max-width: 650px;
  font-size: clamp(1rem, 1.15vw, 1.15rem);
  line-height: 1.8;
  color: #c7c7c7;
  margin-bottom: 30px;
}

/* =========================================
   REDES SOCIALES
========================================= */

.hero-socials {
  display: flex;
  align-items: center;
  gap: 14px;
}

.hero-socials a {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 46px;
  height: 46px;

  border: 1px solid rgba(255, 255, 255, 0.20);
  border-radius: 9px;

  background: rgba(34, 34, 34, 0.85);
  color: #f5f5f5;

  transition:
    color 0.25s ease,
    border-color 0.25s ease,
    background 0.25s ease,
    transform 0.25s ease;
}

.hero-socials a:hover {
  color: #f0c45a;
  border-color: #d6a62d;
  background: rgba(214, 166, 45, 0.08);

  box-shadow: 0 0 18px rgba(214, 166, 45, 0.10);

  transform: translateY(-3px);
}

.hero-socials svg {
  width: 23px;
  height: 23px;
}

/* =========================================
   ANIMACIÓN DE ENTRADA
========================================= */

@keyframes heroEntrance {
  from {
    opacity: 0;
    transform: translateY(25px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* =========================================
   RESPONSIVE - TABLET
========================================= */

@media (max-width: 960px) {
  .hero {
    min-height: 650px;
    padding: 100px 6% 85px;
  }

  .hero-content {
    max-width: 680px;
  }

  .hero-orbit-one {
    right: -590px;
  }

  .hero-orbit-two {
    right: -420px;
  }

  .hero-diagonal {
    opacity: 0.4;
  }
}

/* =========================================
   RESPONSIVE - CELULAR
========================================= */

@media (max-width: 600px) {
  .hero {
    min-height: 620px;
    min-height: max(620px, 85svh);

    padding: 95px 24px 80px;
    align-items: center;
  }

  .hero-content {
    max-width: 100%;
  }

  .hero-eyebrow {
    font-size: 0.75rem;
    letter-spacing: 2px;
    gap: 10px;
    margin-bottom: 20px;
  }

  .hero-line {
    width: 45px;
  }

  .hero-name {
    font-size: clamp(2.2rem, 9vw, 3.2rem);
    line-height: 1.12;
    letter-spacing: -1.2px;
    margin-bottom: 20px;
    overflow-wrap: break-word;
  }

  .hero-profession {
    font-size: 1.3rem;
    line-height: 1.4;
    margin-bottom: 18px;
  }

  .hero-description {
    font-size: 0.98rem;
    line-height: 1.65;
    margin-bottom: 26px;
  }

  .hero-socials a {
    width: 44px;
    height: 44px;
  }

  .hero-orbit-one {
    width: 550px;
    height: 550px;

    right: -430px;
    top: 18%;
  }

  .hero-orbit-two {
    width: 350px;
    height: 350px;

    right: -280px;
    top: 42%;
  }

  .hero-curve {
    width: 190%;
    left: -45%;
    opacity: 0.65;
  }

  .hero-diagonal-one {
    left: 55%;
    top: 8%;
  }

  .hero-diagonal-two {
    display: none;
  }

  .hero-diagonal-three {
    right: -70%;
  }

  .hero-dots-one {
    left: 70%;
    top: 15%;
  }

  .hero-dots-two {
    right: 5%;
    top: 75%;
  }

  .hero-dots-three {
    display: none;
  }
}

/* =========================================
   ACCESIBILIDAD
========================================= */

@media (prefers-reduced-motion: reduce) {
  .hero-content {
    animation: none;
  }

  .hero-socials a {
    transition: none;
  }
}



</style>