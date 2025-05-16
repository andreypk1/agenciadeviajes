// Importa el framework Express, que permite crear un servidor y manejar rutas
import express from 'express';

import {paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje} from '../controllers/paginasController.js';

import { guardarTestimonial } from '../controllers/testimonialesController.js';


// Crea una instancia del enrutador de Express.
// Este enrutador se utilizará para definir todas las rutas del sitio web.
const router = express.Router();

// ======================= RUTAS TIPO GET ======================= //

// Ruta para la página de inicio del sitio.
// Cuando un usuario accede a la URL raíz ('/'), se ejecuta la función 'paginaInicio'.
router.get('/', paginaInicio);

// Ruta para la página "Nosotros".
// Al visitar '/nosotros', se ejecuta la función 'paginaNosotros'.
router.get('/nosotros', paginaNosotros);

// Ruta para mostrar todos los viajes disponibles.
// La función 'paginaViajes' maneja esta ruta.
router.get('/viajes', paginaViajes);
// Ruta para mostrar el detalle de un viaje específico.
// Usa un parámetro dinámico ':slug' para identificar cada viaje.
// Ejemplo de URL: '/viajes/aventura-en-peru'
router.get('/viajes/:slug', paginaDetalleViaje);

// Ruta para mostrar los testimoniales existentes.
// Llama a la función 'paginaTestimoniales' del controlador.
router.get('/testimoniales', paginaTestimoniales);

// ======================= RUTA TIPO POST ======================= //

// Esta ruta se activa cuando un formulario de testimoniales es enviado.
// Usa el método POST porque se están enviando datos desde el cliente al servidor.
// La función 'guardarTestimonial' procesa y guarda esos datos.
router.post('/testimoniales', guardarTestimonial);
// ======================= EXPORTACIÓN ======================= //

// Exporta el router para que pueda ser usado en el archivo principal
// de la aplicación (por ejemplo, en 'app.js')
// Esto permite integrar todas estas rutas en la aplicación principal.
export default router;
