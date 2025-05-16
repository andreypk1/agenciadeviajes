// Importa el módulo 'express', que es un framework para
// construir aplicaciones web en Node.js

import express from 'express';
// Llamamos el archivo que se encuentra en la carpeta de rutas
import router from './routes/index.js';

//configuramos la base de datos
import db from './config/db.js';



//conectar la base de datos
db.authenticate()
    .then( () => console.log('Base de datos conectada'))
    .catch( error => console.log(error) );


// Crea una instancia de una aplicación de Express
const app = express();

// Define el puerto en el que el servidor escuchará
// Usa el valor definido en la variable de entorno PORT,
// o el puerto 3000 por defecto si no está definida
const port = process.env.PORT || 3000;


app.use(express.urlencoded({extended: true}));
//habilitar el pug
app.set('view engine', 'pug');

//obtener el año actual
app.use( (req, res, next) => {
  const year = new Date();

  res.locals.actualYear = year.getFullYear();
  res.locals.nombresitio = "Agencia de Viajes";

  next();
});

// Inicia el servidor para que escuche en el puerto especificado
app.listen(port, () => {
    // Muestra un mensaje en la consola cuando el servidor ha
    // iniciado correctamente
    console.log(`El Servidor está funcionando en el puerto ${port}`);
});

//Ruta raiz
/*app.get('/', (req, res) => {
    res.send("!BUCARAMANGA CAMPEON¡");
})*/


// Agregar Router
//soporta GET POST DELETE PUT
//Agrega las diagonales en las rutas que usemos
app.use('/', router);

app.use(express.static('public'));

/*app.get('/json', (req, res) => {
  res.json({ mensaje: 'Hola en formato JSON', usuario: 'Andreypk', activo: true });
});

app.get('/redirigir', (req, res) => {
    res.redirect('/json');
  });

  // Ruta 4: res.render - Renderizar vista con datos
app.get('/vista', (req, res) => {
  res.render('index', { titulo: 'Hola desde EJS', usuario: 'Juan' });
});

// Ruta 5: req.query - Obtener parámetros de consulta (URL)
app.get('/buscar', (req, res) => {
  const { nombre, edad } = req.query;
  res.send(`Parámetros recibidos: nombre = ${nombre}, edad = ${edad}`);
});

// Ruta 6: req.params - Obtener parámetros en la ruta
app.get('/usuarios/:id', (req, res) => {
  const { id } = req.params;
  res.send(`ID de usuario recibido: ${id}`);
}):*/




