const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const usuarioValidations = require('../validations/usuariosValidaciones');
const authController = require('../controllers/authController.js');
const mensajeController = require('../controllers/mensajeController.js');
const auth = require('../middleware/authMiddleware');

// api/auth
router.post('/register', usuarioValidations.crearUsuario, authController.register);

router.post('/login',
    [
        check('email', 'Agrega un Email Valido').isEmail(),
        check('password', 'El password debe tener mínimo de 6 caracteres').isLength({ min: 6 }),
    ],
    authController.login
);

router.get('/', auth, authController.getUser);

// api/mensaje
router.post('/mensaje', mensajeController.enviarMensaje);

module.exports = router;
