const Mensaje = require('../models/MensajeModel');

exports.enviarMensaje = async (req, res) => {
    try {
        const { body } = req;
        const nuevoMensaje = new Mensaje({ ...body, createdAt: Date.now() });
        await nuevoMensaje.save();
        res.send(nuevoMensaje);
    } catch (error) {
        res.status(400).json({ msg: 'error al enviar el mensaje' });
        console.log('🚀 - error', error);
    }
};

exports.recibirMensaje = async (req, res) => {
    try {
        const mensajes = await Mensaje.find();
        res.send(mensajes);
    } catch (error) {
        res.status(400).json({ msg: 'error al recibir el mensaje' });
        console.log('🚀 - error', error);
    }
};
