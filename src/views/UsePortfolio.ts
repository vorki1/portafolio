import {
  ref,
  onMounted
} from 'vue'

import {
  obtenerPortfolio
} from '../api/portafolio.api'

import type {
  PortfolioData,
  Proyecto,
  ProyectoCompleto,
  TecnologiaProyecto,
  FuncionalidadProyecto,
  ImagenProyecto,
} from '@/interfaces/portfolio'

const portfolio =
  ref<PortfolioData | null>(null)

const loading =
  ref(false)

const error =
  ref('')

export function usePortfolio() {

  async function cargarPortfolio() {

    try {
      loading.value = true

      const data = await obtenerPortfolio()

      const proyectosCompletos: ProyectoCompleto[] =
        data.proyectos.map((proyecto: Proyecto) => {

          return {
            ...proyecto,

            tecnologias: data.tecnologias.filter(
              (t: TecnologiaProyecto) =>
                t.proyecto_id === proyecto.id
            ),

            funcionalidades: data.funcionalidades.filter(
              (f: FuncionalidadProyecto) =>
                f.proyecto_id === proyecto.id
            ),

            imagenes: data.imagenes.filter(
              (i: ImagenProyecto) =>
                i.proyecto_id === proyecto.id
            ),
          }
        })

      portfolio.value = {
        ...data,
        proyectos: proyectosCompletos
      }

    } catch (err) {
      error.value = 'Error cargando portfolio'
      console.error(err)

    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    if (!portfolio.value) {
      cargarPortfolio()
    }
  })

  return {
    portfolio,
    loading,
    error,
    cargarPortfolio
  }
}