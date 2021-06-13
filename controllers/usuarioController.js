const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const Usuario = require('../models/UsuarioModel');

exports.crearUsuario = async (req, res) => {
    // revisamos los errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ msg: errores.array() });
    }

    const { email, password, nombreUsuario, secretWord } = req.body;
    try {
        // Revisando q el email sea unico
        let usuarioEncontrado = await Usuario.findOne({ email });
        let userName = await Usuario.findOne({ nombreUsuario });

        if (usuarioEncontrado) {
            return res.status(400).json({ msg: 'El email ya se encuentra en uso' });
        }

        if (userName) {
            return res.status(400).json({ msg: 'El nombre de usuario ya se encuentra en uso' });
        }

        //nuevo usuario
        let usuario = new Usuario(req.body);

        //hashear el password
        const salt = await bcryptjs.genSalt(10);
        usuario.password = await bcryptjs.hash(password, salt);
        usuario.secretWord = await bcryptjs.hash(secretWord, salt);

        //guardar usuario
        await usuario.save();

        res.send(usuario);

        //mensaje de exito
        // res.send('Usuario Creado Correctamente');
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
};

exports.getUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find().populate({ path: 'creator', select: 'nombre' });
        res.send(usuarios);
    } catch (error) {
        res.status(400).json({ msg: 'error al obtener los productos' });
        console.log('🚀 - error', error);
    }
};
