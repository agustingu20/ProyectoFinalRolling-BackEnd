const Usuario = require('../models/UsuarioModel');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    // revisamos los errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ msg: errores.array() });
    }
    const { email, password, nombreUsuario } = req.body;

    try {
        //Revisar usuario registrado
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

        //guardar usuario
        await usuario.save();

        // Si todo es correcto Crear y firmar JWT
        const payload = {
            usuario: {
                id: usuario.id,
            },
        };
        jwt.sign(
            payload,
            process.env.SECRETA,
            {
                expiresIn: '365d', //1 año
            },
            (error, token) => {
                if (error) throw error;
                res.json({ token });
            }
        );
    } catch (error) {
        console.log('~ error', error);
    }
};

exports.login = async (req, res) => {
    // revisamos los errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ msg: errores.array() });
    }
    const { email, password } = req.body;

    try {
        //Revisar usuario registrado
        let usuario = await Usuario.findOne({ email });
        if (!usuario) {
            return res.status(400).json({ msg: 'El Usuario no existe' });
        }
        //Revisar el password
        const passCorrect = await bcryptjs.compare(password, usuario.password);
        if (!passCorrect) {
            return res.status(400).json({ msg: 'Password incorrecto' });
        }
        // Si todo es correcto Crear y firmar JWT
        const payload = {
            usuario: {
                id: usuario.id,
            },
        };
        jwt.sign(
            payload,
            process.env.SECRETA,
            {
                expiresIn: '365d', //1 año
            },
            (error, token) => {
                if (error) throw error;
                res.json({ token });
            }
        );
    } catch (error) {
        console.log('~ error', error);
    }
};

//Obtener que usuario esta autenticado
exports.getUser = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.usuario.id).select('-password -registro');

        res.json({ usuario });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};
