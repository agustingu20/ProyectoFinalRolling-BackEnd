const { check } = require('express-validator');

const usuarioValidations = {
    crearUsuario: [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('apellido', 'El apellido es obligatorio').not().isEmpty(),
        check('email', 'Agrega un Email Valido').isEmail(),
        check('nombreUsuario', 'Agregue un Usuario Valido').not().isEmpty(),
        check('password', 'El password debe tener mínimo de 6 caracteres').isLength({ min: 6 }),
        check('fechaNacimiento', 'Ingrese una fecha de nacimiento').isDate(),
    ],
};

module.exports = usuarioValidations;