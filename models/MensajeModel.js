const mongoose = require("mongoose");
const MensajesSchema = mongoose.Schema({
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
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("Mensaje", MensajesSchema);