// Rutas para cargar productos de carrito
const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/ventaController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', ventaController.ventaProducto);
router.get('/', ventaController.getVentas);


module.exports = router;
