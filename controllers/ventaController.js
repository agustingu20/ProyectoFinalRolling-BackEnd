const VentaProducto = require('../models/VentaModel');
const { validationResult } = require('express-validator');
const Producto = require('../models/ProductoModel');

exports.ventaProducto = async (req, res) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ msg: errores.array() });
    }
    req.body.carrito?.map( async (producto) => {
        let product = await Producto.findById(producto.producto)
        await product.save();
    })

    try {
        let venta = new VentaProducto(req.body);
        await venta.save();
        res.send('Mensaje enviado');
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error al enviar el mensaje');
    }
};

exports.getVentas = async (req, res) => {
    try {
        const ventas = await VentaProducto.find().populate({ path: 'creator', select: 'nombre' });
        res.send(ventas);
    } catch (error) {
        res.status(400).json({ msg: 'error al obtener los usuarios' });
        console.log('🚀 - error', error);
    }
};
