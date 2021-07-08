const mongoose = require('mongoose');
const { Schema } = mongoose;

const VentasSchema = mongoose.Schema({
    usuario: {
        type: String,
        ref: 'Usuario',
        required: true,
    },
    carrito: [
        {
            producto: { type: String, ref: 'Producto' },
            cantidad: { type: Number, default: 1 },
        },
    ],
    total: {
        type: Number,
        trim: true,
    },
    dirección: {
        type: Schema.Types.Mixed,
        required: true,
        trim: true,
    },
    provincia: {
        type: String,
        required: true,
        trim: true,
    },
    localidad: {
        type: String,
        required: true,
        trim: true,
    },
    códigoPostal: {
        type: Schema.Types.Mixed,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    celularContacto: {
        type: Number,
        required: true,
        trim: true,
    },
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    apellido: {
        type: String,
        required: true,
        trim: true,
    },
    dni: {
        type: Number,
        required: true,
        trim: true,
    },
    celular: {
        type: Number,
        required: true,
        trim: true,
    },
    modalidadDePago: {
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model('VentaProducto', VentasSchema);
