const mongoose = require("mongoose");
const MensajesSchema = mongoose.Schema({
    fecha: {
        type: Date,
        default: Date.now(),
    },
    correo: {
        type: String,
        required: true,
        trim: true,
    },
    asunto: {
        type: String,
        required: true,
        trim: true,
    },
    descripcion: {
        type: String,
        required: true,
        trim: true,
    },
    estado: {
        type: String,
        default: "No leído",
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("Mensaje", MensajesSchema);