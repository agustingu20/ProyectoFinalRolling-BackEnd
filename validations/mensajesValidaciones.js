const { check } = require('express-validator');

const mensajesValidaciones = {
    enviarMensaje: [
        check('email', 'El nombre es obligatorio').not().isEmail(),
        check('asunto', 'El apellido es obligatorio').not().isEmpty(),
        check('descripcion', 'Agrega un Email Valido').isEmpty(),
    ],
};

module.exports = mensajesValidaciones;