const express = require('express');
const path = require('path');

const app = express();

app.use( express.static(path.resolve(__dirname, './public')) );


app.listen(3015,() => {
    console.log('servidor corriendo en puerto 3015');
});

app.get('/Home', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/index.html'));
})

app.get('/Product-detail', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/productDetail.html'));
})

app.get('/Product-cart', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/productCart.html'));
})

app.get('/Login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/login.html'));
})

app.get('/Register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/register.html'));
})