// Rutas para cargar productos de carrito
const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/ventaController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, ventaController.ventaProducto);
router.get('/:productoId', authMiddleware, ventaController.carrito);
router.delete('/:productoId', ventaController.deleteCarrito);

module.exports = router;
