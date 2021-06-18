const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');
const authMiddleware = require("../middleware/authMiddleware");

router.post('/', productoController.createProducto);
router.get('/', productoController.getProductos);
<<<<<<< HEAD
router.get('/:productoId', productoController.getProducto);

// router.delete('/:productoId', authMiddleware, productoController.deleteProducto);
// router.delete('/:productoId', productoController.deleteProducto);
=======
router.delete('/:productoId', productoController.deleteProducto);
>>>>>>> 7050fe9732b3037146a0357a5e0b876e1337039e
router.put('/', productoController.updateProducto);



module.exports = router;
