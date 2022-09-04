const express = require('express');
const app = express();
const path = require ('path');
app.use(express.static('public'));

/*Ruta para el carrito*/

app.get('/carrito', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/carrito.html'))
});

/*Ruta para el Finalizaste tu compra*/

app.get('/compra', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/compra.html'))
});

/*Ruta para el ¿Quienes Somos?*/

app.get('/info', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/info.html'))
});

app.listen(3000, () => {
    console.log('Servidor corriendo')
});