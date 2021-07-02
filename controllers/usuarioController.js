const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const Usuario = require('../models/UsuarioModel');

exports.crearUsuario = async (req, res) => {
    // revisamos los errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ msg: errores.array() });
    }

    const { email, password, nombreUsuario } = req.body;
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
        res.status(400).json({ msg: 'error al obtener los usuarios' });
        console.log('🚀 - error', error);
    }
};

exports.getUsuario = async (req, res) => {
    try {
        const { usuarioID } = req.params;
        const usuario = await Usuario.findById(usuarioID);
        res.send(usuario);
    } catch (error) {
        res.status(400).json({ msg: 'error al obtener el ID del usuario' });
        console.log('🚀 - error', error);
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { usuario, body } = req;
        const updatedUser = await Usuario.findByIdAndUpdate(usuario.id, body, {
            new: true,
        });
        const usuarios = await Usuario.find({ categoryUser: 'admin' });

        if (usuarios.length > 4) {
            try {
                res.send(updatedUser);
            } catch (error) {
                res.status(400).json({ msg: 'error al modificar el usuario' });
                console.log('🚀 - error', error);
            }
        } else {
            res.status(400).json({ msg: 'No se puede eliminar al Administrador' });
        }
    } catch (error) {
        res.status(400).send('Hubo un error al actualizar el usuario');
    }
};

exports.deleteUsuario = async (req, res) => {
    const { usuarioID } = req.params;
    const usuario = await Usuario.findById(usuarioID);
    const usuarios = await Usuario.find({ categoryUser: 'admin' });

    if (usuarios.length > 3) {
        try {
            await usuario.delete();
            res.send({ msg: 'Usuario eliminado' });
        } catch (error) {
            res.status(400).json({ msg: 'error al eliminar el usuario' });
            console.log('🚀 - error', error);
        }
    } else {
        res.status(400).json({ msg: 'No se puede eliminar al Administrador' });
    }
};
