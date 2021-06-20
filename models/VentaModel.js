const mongoose = require('mongoose');
const VentasSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    precio: {
        type: String,
        required: true,
        trim: true,
    },
});

module.exports = mongoose.model('VentaProducto', VentasSchema);
