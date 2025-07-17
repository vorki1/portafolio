import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/styles' //Importa los estilos de Vuetify
import { createVuetify } from 'vuetify' //Importa la función para crear una instancia de Vuetify
import * as components from 'vuetify/components' //Importa los componentes de Vuetify
import * as directives from 'vuetify/directives' //Importa las directivas de Vuetify

const vuetify = createVuetify({ //Crea una instancia de Vuetify con los componentes y directivas que se van a usar
  components,
  directives,
})

//Esta es la puerta de entrada de la aplicación Vue.js y se le asignan las configuraciones y plugins que afecan a toda la aplicación
const app =  createApp(App) //La instancia de la aplicación Vue.js y como quiero que se comporte globalmente e inicialmente
//app.use(store o pinia) //Si se estuviera usando Vuex o pinia para el manejo del estado global
//app.use(i18n) //Si se estuviera usando Vue I18n para la internacionalización o multiples idiomas
//app.use(axios) //Si se estuviera usando Axios para las peticiones HTTP
//app.use(bootstrap) //Si se estuviera usando Bootstrap para el diseño y estilos
//app.use.config.globalProperties para definir propiedades y metodos globales
app.use(router)
app.use(vuetify) //Para usar los componentes de Vuetify a nivel global
app.mount('#app')