const express = require('express');
const path = require('path');

const app = express();

app.use( express.static(path.resolve(__dirname, './public')) );


app.listen(3015,() => {
    console.log('servidor corriendo en puerto 3015');
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/index.html'));
})