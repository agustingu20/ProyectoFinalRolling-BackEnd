const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');
const authMiddleware = require("../middleware/authMiddleware");

router.post('/', productoController.createProducto);
router.get('/', productoController.getProductos);
router.get('/:productoId', productoController.getProducto);

// router.delete('/:productoId', authMiddleware, productoController.deleteProducto);
// router.delete('/:productoId', productoController.deleteProducto);
router.put('/', productoController.updateProducto);


module.exports = router;
