const VentaProducto = require('../models/VentaModel');

exports.ventaProducto = async (req, res) => {
    let { nombre } = req.body;
    try {
        let productoEncontrado = await VentaProducto.findOne({ nombre });
        if (productoEncontrado) {
            return res.status(400).send('producto no disponible');
        }
        //nuevo producto
        let ventaProducto = new VentaProducto(req.body);

        //guardar producto
        await ventaProducto.save();

        //mensaje de éxito
        res.send(ventaProducto);
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
};

exports.carrito = async (req, res) => {
    try {
        const { productoId } = req.params;
        const producto = await VentaProducto.findById(productoId);
        res.send(producto);
    } catch (error) {
        res.status(400).json({ msg: 'error al obtener meme' });
        console.log('error', error);
    }
};

exports.deleteCarrito = async (req, res) => {
    try {
        const { productoId } = req.params;
        await VentaProducto.findByIdAndDelete(productoId);
        res.send({ msg: 'producto eliminado de carrito' });
    } catch (error) {
        res.status(400).json({ msg: 'error al eliminar producto' });
        console.log('error', error);
    }
};