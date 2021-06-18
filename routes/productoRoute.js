const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');
// const authMiddleware = require("../middleware/authMiddleware");

router.post('/', productoController.createProducto);
router.get('/:productoId', productoController.getProducto);
router.get('/', productoController.getProductos);
router.delete('/:productoId', productoController.deleteProducto);
router.put('/', productoController.updateProducto);

module.exports = router;
