// Rutas para enviar mensajes
const express = require('express');
const mensajeController = require('../controllers/mensajeController');
const router = express.Router();
const mensajesValidaciones = require('../validations/mensajesValidaciones');

// Crear un usuario
// api/usuarios
router.post('/', mensajesValidaciones.crearUsuario, mensajeController.enviarMensaje);

// router.get('/', usuarioController.obtenerUsuarios);

module.exports = router;
