const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('vistas', path.join(__dirname, 'vistas'));

app.use(express.static(path.join(__dirname, 'front')));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('inicio');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Servidor corriendo en http://localhost:${PORT}');
});