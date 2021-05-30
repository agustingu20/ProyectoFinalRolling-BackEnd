// Rutas para crear usuarios
const express = require('express');
const usuarioController = require('../controllers/usuarioController');
const router = express.Router();
const usuarioValidations = require('../validations/usuariosValidaciones');

// Crear un usuario
// api/usuarios
router.post('/', usuarioValidations.crearUsuario, usuarioController.crearUsuario);

// router.get('/', usuarioController.obtenerUsuarios);

module.exports = router;
