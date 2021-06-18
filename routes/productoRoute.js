const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');
const authMiddleware = require("../middleware/authMiddleware");

router.post('/', productoController.createProducto);
router.get('/:productoId', productoController.getProducto);
router.get('/', productoController.getProductos);
router.delete('/:productoId', productoController.deleteProducto);
router.put('/', productoController.updateProducto);

<<<<<<< HEAD
=======


>>>>>>> 7050fe9732b3037146a0357a5e0b876e1337039e
module.exports = router;
