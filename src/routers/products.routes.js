import { Router } from "express";
import productController from "../controllers/products/productController.js";


const router = Router();

router.get('/', productController.getAll);          // Todos los Productos
router.get('/:id', productController.getById);       // Producto especifico por ID
router.post('/', productController.create);         // Crear un Producto
router.put('/:id', productController.update);       // Actualizar un Producto
router.delete('/:id', productController.delete);    // Eliminar un Producto

export default router;