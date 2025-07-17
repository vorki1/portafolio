<template>
  <h1>Stack tecnologico</h1>
  <div class="stack-container">
    <div class="stacks-box">
      <h3>Lenguajes de programación</h3>
      <div class ="stacks-p">
        <img src="../assets/lenguajes/typescriptlang-icon.svg" alt="TypeScript" class="tech-icon" />
        <img src="../assets/lenguajes/java-ar21.svg" alt="Java" class="tech-icon" />
        <img src="../assets/lenguajes/python-ar21.svg" alt="Python" class="tech-icon" />
        <img src="../assets/lenguajes/cplusplus.svg" alt="C++" class="tech-icon" />
      </div>
    </div>
    <div class="stacks-box">
      <h3>Frameworks </h3>
      <div class="stacks-p">
        <img src="../assets/frameworks/nestjs-ar21.svg" alt="NestJS" class="tech-icon" />
        <img src="../assets/frameworks/djangoproject-ar21.svg" alt="Django" class="tech-icon" />
        <img src="../assets/frameworks/springio-ar21.svg" alt="Spring" class="tech-icon" />
        <img src="../assets/frameworks/vuejs-ar21.svg" alt="VueJS" class="tech-icon" />
        <img src="../assets/frameworks/reactjs-ar21.svg" alt="ReactJS" class="tech-icon" />
        <img src="../assets/frameworks/react-native-1.svg" alt="ReactNativeJS" class="tech-icon" />
      </div>
    </div>

    <div class="stacks-box">
      <h3>base de datos y apis</h3>
      <div class="stacks-p">
        <img src="../assets/dbs/postgresql-ar21.svg" alt="PostgreSQL" class="tech-icon" />
        <img src="../assets/dbs/mysql-ar21.svg" alt="MySQL" class="tech-icon" />
        <img src="../assets/dbs/sqlite-ar21.svg" alt="SQLite" class="tech-icon" />
        <img src="../assets/dbs/mongodb-ar21.svg" alt="MongoDB" class="tech-icon" />
        <img src="../assets/dbs/redis-ar21.svg" alt="RedisDB" class="tech-icon" />
        <img src="../assets/dbs/imagekitlogo.svg" alt="Imagekit" class="tech-icon" />
      </div>
    </div>
    <div class="stacks-box">
    <h3>Herramientas tecnologicas</h3>
      <div class="stacks-p">
        <img src="../assets/herramientasTecnologicas/docker-ar21.svg" alt="Docker" class="tech-icon" />
        <img src="../assets/herramientasTecnologicas/kubernetes-ar21.svg" alt="Kubernetes" class="tech-icon" />
        <img src="../assets/herramientasTecnologicas/git-scm-ar21.svg" alt="Git" class="tech-icon" />
        <img src="../assets/herramientasTecnologicas/github-ar21.svg" alt="Github" class="tech-icon" />
        <img src="../assets/herramientasTecnologicas/gitlab-ar21.svg" alt="Gitlab" class="tech-icon" />
      </div>
    </div>
    <div class="stacks-box">
      <h3>Herramientas de diseño</h3>
      <div class="stacks-p">
        <img src="../assets/herramientasDiseño/drawio-svgrepo-com.svg" alt="Draw.io" class="tech-icon" />
        <img src="../assets/herramientasDiseño/lucidchart-ar21.svg" alt="LucidChart" class="tech-icon" />
        <img src="../assets/herramientasDiseño/canva-ar21.svg" alt="Canva" class="tech-icon" />
        <img src="../assets/herramientasDiseño/miro-2.svg" alt="Miro" class="tech-icon"/>
      </div>
    </div>
  </div>
  <!-- Logo de NestJS en SVG -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StackTecnologico',
});
</script>

<style scoped>
.tech-icon {
  width: 80px;
  height: 80px;
  margin: 8px;
  padding: 8px;
  object-fit: contain;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 16px; /* <-- Esquinas redondeadas */
}

.stacks-p {
  width: 320px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: space-around;
}
.stacks-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(255, 221, 102, 1);  
  border-radius: 16px;
}
.stack-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;         /* Espacio entre los bloques */
  justify-content: center;
  align-items: flex-start;
  padding: 16px;
}
</style>
