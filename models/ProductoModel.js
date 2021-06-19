const mongoose = require("mongoose");
const { Schema } = mongoose;
const productoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    urlImage: {
        type: String,
        required: true,
        trim: true,
    },
    estado: {
        type: String,
        trim: true,
    },
    descripcion: {
        type: String,
        trim: true,
    },
    precio: {
        type: String,
        required: true,
        trim: true,
    },
    pantalla: {
        type: String,
        trim: true,
    },
    pantallaDescripcion: {
        type: String,
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
    almacenamientoDescripcion: {
        type: String,
        trim: true,
    },
    camara: {
        type: String,
        trim: true,
    },
    camaraDescripcion: {
        type: String,
        trim: true,
    },
    bateria: {
        type: String,
        trim: true,
    },
    bateriaDescripcion: {
        type: String,
        trim: true,
    },
    conector: {
        type: String,
        trim: true,
    },
    conectorDescripcion: {
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
    condicion: {
        type: String,
        trim: true,
    },
    // creator: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Usuario',
    //     required: true,
    // },
    // createdAt: {
    //     type: Date,
    //     default: Date.now(),
    // },
});

module.exports = mongoose.model("Producto", productoSchema);
