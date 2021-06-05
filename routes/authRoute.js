const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const usuarioValidations = require('../validations/usuariosValidaciones');
const authController = require('../controllers/authController.js');
const authMiddleware = require('../middleware/authMiddleware');

// api/auth
router.post('/register', usuarioValidations.crearUsuario, authController.register);

router.post('/login',
    [
        check('email', 'Agrega un Email Valido').isEmail(),
        check('password', 'El password debe tener mínimo de 6 caracteres').isLength({ min: 6 }),
    ],
    authController.login
);

router.get('/', authMiddleware, authController.getUser);

module.exports = router;
