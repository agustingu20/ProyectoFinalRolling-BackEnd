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

exports.recibirMensajes = async (req, res) => {
    try {
        const mensajes = await Mensaje.find();
        res.send(mensajes);
    } catch (error) {
        res.status(400).json({ msg: 'error al recibir el mensaje' });
        console.log('🚀 - error', error);
    }
};

exports.recibirMensaje = async (req, res) => {
    try {
        const { mensajeID } = req.params;
        const mensaje = await Mensaje.findById(mensajeID);
        res.send(mensaje);
    } catch (error) {
        res.status(400).json({ msg: 'error al obtener el ID del mensaje' });
        console.log('🚀 - error', error);
    }
};

exports.actualizarMensaje = async (req, res) => {
    try {
        const { mensaje, body } = req;
        const actualizarMensaje = await Mensaje.findByIdAndUpdate(mensaje.id, body, {
            new: true,
        });
        res.send(actualizarMensaje);
    } catch (error) {
        res.status(400).send('Hubo un error al actualizar el mensaje');
    }
};

exports.eliminarMensaje = async (req, res) => {
    try {
        const { mensajeID } = req.params;
        const mensaje = await Mensaje.findById(mensajeID);
        await mensaje.delete();
        res.send({ msg: 'Mensaje eliminado' });
    } catch (error) {
        res.status(400).json({ msg: 'error al eliminar el mensaje' });
        console.log('🚀 - error', error);
    }
};
