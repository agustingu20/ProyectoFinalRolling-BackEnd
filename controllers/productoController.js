const Producto = require('../models/ProductoModel');

exports.createProducto = async (req, res) => {
    try {
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

// exports.deleteProducto = async (req, res) => {
//     try {
//         const { usuario } = req;
//         const { productoId } = req.params;
//         const producto = await Producto.findById(productoId);
//         if (!producto.creator.equals(usuario.id)) {
//             return res.status(403).json({ msg: 'no tiene permitido eliminar este Producto' });
//         }
//         await producto.delete();
//         res.send({ msg: 'Producto eliminado' });
//     } catch (error) {
//         res.status(400).json({ msg: 'error al eliminar el producto' });
//         console.log('🚀 - error', error);
//     }
// };

exports.getProductos = async (req, res) => {
    try {
        const productos = await Producto.find().populate({ path: 'creator', select: 'nombre' });
        res.send(productos);
    } catch (error) {
        res.status(400).json({ msg: 'error al obtener los productos' });
        console.log('🚀 - error', error);
    }
};