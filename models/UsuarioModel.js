const mongoose = require('mongoose');
const UsuariosSchema = mongoose.Schema({
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
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    nombreUsuario: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    fechaNacimiento: {
        type: String,
        trim: true,
    },
    sexo: {
        type: String,
        required: true,
        trim: true,
    },
    categoryUser: {
        type: String,
        trim: true,
    },
    blockUser: {
        type: String,
        trim: true,
    },
    registro: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model('Usuario', UsuariosSchema);
