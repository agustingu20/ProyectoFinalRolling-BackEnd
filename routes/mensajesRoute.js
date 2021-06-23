// Rutas para enviar mensajes
const express = require('express');
const router = express.Router();
const mensajeController = require('../controllers/mensajeController');


// api/mensaje
router.post('/', mensajeController.enviarMensaje);
router.get('/', mensajeController.recibirMensajes);
router.get('/:mensajeID', mensajeController.recibirMensaje);
router.put('/', mensajeController.actualizarMensaje);
router.delete('/:mensajeID', mensajeController.eliminarMensaje);

module.exports = router;
