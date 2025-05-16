import Sequelize from "sequelize";
import db from "../config/db.js";

// Definimos nuestro primer modelo
// Viaje: nombre de mi modelo
// 'viajes': este es el nombre de la tabla
export const Viaje = db.define('viajes', {
  titulo: {
    type: Sequelize.STRING
  },
  precio: {
    type: Sequelize.STRING
  },
  fecha_ida: {
    type: Sequelize.DATE
  },
  fecha_vuelta: {
    type: Sequelize.DATE
  },
  imagen: {
    type: Sequelize.STRING
  },
  descripcion: {
    type: Sequelize.STRING
  },
  disponibles: {
    type: Sequelize.STRING
  },
  slug: {
    type: Sequelize.STRING
  },
});