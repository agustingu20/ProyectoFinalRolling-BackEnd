const Producto = require('../models/ProductoModel');

exports.createProducto = async (req, res) => {
    const { nombre, descripcion } = req.body;
    try {
        let productoEncontrado = await Producto.findOne({ nombre });
        let descripcionEncontrada = await Producto.findOne({ descripcion });

        if (productoEncontrado) {
            return res.status(400).json({ msg: 'El nombre del producto ya se encuentra en uso' });
        }

        if (descripcionEncontrada) {
            return res.status(400).json({ msg: 'La descripción del producto ya se encuentra en uso' });
        }

        const { body } = req;
        const newProducto = new Producto({ ...body });
        await newProducto.save();
        res.send(newProducto);
    } catch (error) {
        res.status(400).json({ msg: 'error al crear el producto' });
        console.log('🚀 - error', error);
    }
};

exports.getProducto = async (req, res) => {
    try {
        const { productoId } = req.params;
        const producto = await Producto.findById(productoId);
        res.send(producto);
    } catch (error) {
        res.status(400).json({ msg: 'error al obtener el producto' });
        console.log('🚀 - error', error);
    }
};

exports.deleteProducto = async (req, res) => {
    try {
        const { productoId } = req.params;
        const producto = await Producto.findById(productoId);

        await producto.delete();
        res.send({ msg: 'Producto eliminado' });
    } catch (error) {
        res.status(400).json({ msg: 'error al eliminar el producto' });
        console.log('🚀 - error', error);
    }
};

exports.getProductos = async (req, res) => {
    try {
        const productos = await Producto.find().populate({ path: 'creator', select: 'nombre' });
        res.send(productos);
    } catch (error) {
        res.status(400).json({ msg: 'error al obtener los productos' });
        console.log('🚀 - error', error);
    }
};

exports.updateProducto = async (req, res) => {
    try {
        const { body } = req;
        const updatedProducto = await Producto.findByIdAndUpdate(body._id, body, {
            new: true,
        });
        res.send(updatedProducto);
    } catch (error) {
        res.status(400).send('Hubo un error al editar el producto');
    }
};