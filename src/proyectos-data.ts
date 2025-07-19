//Tienda de videojuegos
import carritoTienda from '@/assets/proyectos/bdnsql-tienda-juegos/carrito-tienda-juegos.png';
import home from '@/assets/proyectos/bdnsql-tienda-juegos/home-tienda-juegos.png';
import producto from '@/assets/proyectos/bdnsql-tienda-juegos/producto-tienda-juegos.png';
import panelAdmin from '@/assets/proyectos/bdnsql-tienda-juegos/panel-admin-tienda-juegos.png';

//Gestion del presupuesto
import formularioCdp from '@/assets/proyectos/presup/formularioCDP.png';
import certificadoRefrendar from '@/assets/proyectos/presup/CertificadoRefrendar.png';
import pdf from '@/assets/proyectos/presup/pdfcdp.png';
import proyeccion from './assets/proyectos/presup/proyeccion.png';

// proyecto de introweb
import primerAvance from '@/assets/proyectos/intro-web-movil/primer_avance_movil.png';
import ultimoAvance from './assets/proyectos/intro-web-movil/ultimo_avance_movil.png';

// proyecto arquitectura bmbair
import bmbair from '@/assets/proyectos/arq-bmbair/propuestatecnica-bmbair.png';

// proyecto plataformas
import propuestaTecnica from '@/assets/proyectos/plataforma/plataforma-propuesta.png';
import pantallas from '@/assets/proyectos/plataforma/plataforma-movi.png';

// proyecto pi software
import homeSoft from '@/assets/proyectos/pi-soft/home-psoft.png';
import serviciosSoft from '@/assets/proyectos/pi-soft/servicios-psoft.png';
import solicitudSoft from '@/assets/proyectos/pi-soft/solicitud-psoft.png';

// chat-arquitectura
import codigoChatArq from '@/assets/proyectos/chat-arq/codigo-chat.png';
import codigoMainArq from '@/assets/proyectos/chat-arq/maints-chat.png';

// english-work
import logoEnglish from '@/assets/proyectos/english-work/Logo-worksh.png';
import loginEnglish from '@/assets/proyectos/english-work/login-works.png';
import homeEnglish from '@/assets/proyectos/english-work/home-works.png';

// beyond-time
import nivel1Beyond from '@/assets/proyectos/beyond-time/beyondtime-1.png';
import nivel2Beyond from '@/assets/proyectos/beyond-time/beyondtime-2.png';
import nivel3Beyond from '@/assets/proyectos/beyond-time/beyondtime-3.png';
import nivel4Beyond from '@/assets/proyectos/beyond-time/beyondtime-4.png';
import nivel5Beyond from '@/assets/proyectos/beyond-time/beyondtime-5.png';


export interface Proyecto {
  titulo: string;
  arquitectura: string;
  rol: string;
  texto: string;
  destacado: string;
  images: string[];
}

export const proyectos: Proyecto[] = [
    {
    titulo: 'Tienda de videojuegos',
    arquitectura: 'Monolitica',
    rol: 'Diseñador y Desarrollador Backend y Frontend',
    texto: `Tienda online de codigos de videojuegos como steam, epic games, etc.
    Existe usuario administrador y usuario cliente.
    El usuario cliente puede ver los productos, agregar al carrito, realizar la compra y valorar.
    El administrador puede agregar, eliminar y editar productos.`,
    destacado: `Bases de datos mongoDB para los usuarios, Redis para mejorar el rendimiento del carrito e imagekit para almacenamiento de imagenes.
    Capaz de importar y exportar arcvhivos excel.`,
    images: [home, producto, carritoTienda, panelAdmin]
    },
    {
    titulo: 'Gestión del presupuesto',
    arquitectura: 'Monolitica-MVC',
    rol: 'Desarrollador Backend y Frontend',
    texto: `Aplicación web para gestionar el presupuesto del servicio.`,
    destacado: `Permite crear, editar y eliminar presupuestos, así como gestionar los clientes asociados.
    Utiliza una base de datos MongoDB para almacenar la información de los presupuestos y clientes.`,
    images: [formularioCdp, certificadoRefrendar, pdf, proyeccion]
    },
    {
        titulo: 'Proyecto de introducción al desarrollo web',
        arquitectura: 'Monolitica',
        rol: 'Desarrollador Frontend',
        texto: `Proyecto de introducción al desarrollo web, donde se desarrolló una aplicación móvil para la gestión de tareas.`,
        destacado: `Utiliza tecnologías como HTML, CSS y JavaScript para crear una interfaz de usuario intuitiva y funcional.`,
        images: [primerAvance, ultimoAvance]
    },
    {
        titulo: 'Proyecto arquitectura BMBair',
        arquitectura: 'Monolitica',
        rol: 'Desarrollador Frontend',
        texto: `Proyecto de arquitectura BMBair, donde se desarrolló una propuesta técnica para la construcción de un edificio.`,
        destacado: `Utiliza tecnologías como HTML, CSS y JavaScript para crear una interfaz de usuario intuitiva y funcional.`,
        images: [bmbair]
    },
    {
        titulo: 'Proyecto plataformas',
        arquitectura: 'Monolitica',
        rol: 'Desarrollador Frontend',
        texto: `Proyecto plataformas, donde se desarrolló una plataforma para la gestión de proyectos.`,
        destacado: `Utiliza tecnologías como HTML, CSS y JavaScript para crear una interfaz de usuario intuitiva y funcional.`,
        images: [propuestaTecnica, pantallas]
    },
    {
        titulo: 'Proyecto PI Software',
        arquitectura: 'Monolitica',
        rol: 'Desarrollador Frontend',
        texto: `Proyecto PI Software, donde se desarrolló una aplicación web para la gestión de proyectos.`,
        destacado: `Utiliza tecnologías como HTML, CSS y JavaScript para crear una interfaz de usuario intuitiva y funcional.`,
        images: [homeSoft, serviciosSoft, solicitudSoft]
    },
    {
        titulo: 'Chat Arquitectura',
        arquitectura: 'Monolitica',
        rol: 'Desarrollador Backend y Frontend',
        texto: `Chat Arquitectura, donde se desarrolló un chat en tiempo real para la gestión de proyectos.`,
        destacado: `Utiliza tecnologías como Node.js, Express.js y Socket.io para crear un chat en tiempo real.`,
        images: [codigoChatArq, codigoMainArq]
    },
    {
        titulo: 'English Work',
        arquitectura: 'Monolitica',
        rol: 'Desarrollador Backend y Frontend',
        texto: `English Work, donde se desarrolló una aplicación web para la gestión de clases de inglés.`,
        destacado: `Utiliza tecnologías como Node.js, Express.js y MongoDB para crear una aplicación web funcional.`,
        images: [logoEnglish, loginEnglish, homeEnglish]
    },
    {
        titulo: 'Beyond Time',
        arquitectura: 'Monolitica',
        rol: 'Desarrollador Backend y Frontend',
        texto: `Beyond Time, donde se desarrolló un juego de plataformas en 2D.`,
        destacado: `Utiliza tecnologías como HTML, CSS y JavaScript para crear un juego interactivo y entretenido.`,
        images: [nivel1Beyond, nivel2Beyond, nivel3Beyond, nivel4Beyond, nivel5Beyond]
    }
];
