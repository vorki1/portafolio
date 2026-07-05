export interface Proyecto {

  id: number

  slug: string

  titulo: string

  categoria: string

  tipo: string

  estado: string

  arquitectura: string

  rol: string

  equipo: string

  nivel: string

  duracion: string

  anio: number

  descripcion_corta: string

  descripcion_larga: string

  problema_resuelve: string

  destacado: string

  portada: string

  orden: number

  activo: boolean
}


export interface FuncionalidadProyecto {

  proyecto_id: number

  funcionalidad: string

  tipo: string

  orden: number
}


export interface TecnologiaProyecto {

  proyecto_id: number

  tecnologia: string

  categoria: string

  orden: number
}


export interface ImagenProyecto {

  proyecto_id: number

  imagen: string

  descripcion: string

  tipo: string

  orden: number
}


export interface ContenidoProyecto {

  proyecto_id: number

  titulo_seccion: string

  contenido: string

  orden: number
}


export interface DesafioProyecto {

  proyecto_id: number

  desafio: string

  solucion: string

  tecnologia_principal: string

  orden: number
}


export interface MetadataProyecto {

  proyecto_id: number

  clave: string

  valor: string
}

export interface ProyectoCompleto
  extends Proyecto {

  tecnologias: TecnologiaProyecto[]

  funcionalidades: FuncionalidadProyecto[]

  imagenes: ImagenProyecto[]

  contenidos: ContenidoProyecto[]

  desafios: DesafioProyecto[]

  metadata: MetadataProyecto[]
}

export interface PortfolioData {

  proyectos: ProyectoCompleto[]

  funcionalidades: FuncionalidadProyecto[]

  tecnologias: TecnologiaProyecto[]

  imagenes: ImagenProyecto[]

  contenidos: ContenidoProyecto[]

  desafios: DesafioProyecto[]

  metadata: MetadataProyecto[]
}