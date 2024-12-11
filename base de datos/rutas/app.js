const express = require('express');
const path = require('path');
const app = express();

// Configuracion de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'front', 'vistas'));

// Configuracion de archivos estaticos (imagenes, css)
app.use(express.static(path.join(__dirname, 'front')));

// Middleware para procesar datos del formulario
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

 // Ruta a la pagina de inicio
app.get('/', (req, res) => {
    res.render('inicio');
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});