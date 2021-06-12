const mongoose = require('mongoose');
const VentasSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    descripcion: {
        type: String,
        required: true,
        trim: true,
    },
    precio: {
        type: String,
        required: true,
        trim: true,
    },
    pantalla: {
        type: String,
        required: true,
        trim: true,
    },
    redes: {
        type: String,

        trim: true,
    },
    procesador: {
        type: String,

        trim: true,
    },
    almacenamiento: {
        type: String,

        trim: true,
    },
    camara: {
        type: String,

        trim: true,
    },
    categoria: {
        type: String,
        required: true,
        trim: true,
    },
    urlImage: {
        type: String,
        required: true,
        trim: true,
    },
});

module.exports = mongoose.model('VentaProducto', VentasSchema);
