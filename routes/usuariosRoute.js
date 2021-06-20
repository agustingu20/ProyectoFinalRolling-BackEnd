// Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const authMiddleware = require('../middleware/authMiddleware');
const usuarioValidations = require('../validations/usuariosValidaciones');
// Crear un usuario
// api/usuarios
router.post('/', usuarioValidations.crearUsuario, usuarioController.crearUsuario);
router.delete('/:usuarioID', usuarioController.deleteUsuario);
router.get('/', usuarioController.getUsuarios);
router.get('/:usuarioID', usuarioController.getUsuario);
router.put('/', authMiddleware, usuarioController.updateUser);

module.exports = router;
