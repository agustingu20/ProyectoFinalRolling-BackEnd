// Importación de módulos de versiones anteriores
const express = require('express');

// crear el servidor
const app = express();

// puerto y arranque del servidor
app.listen(4000, () => {
    console.log('Servidor Funcionando');
})
