import { Router } from "express";
import passport from "passport";
import cartController from '../../controllers/cartController/cartController.js'

const router = Router();

router.get('/mycart', passport.authenticate('jwt', {session: false}), 
cartController.getMyCart);                                              // Obtener el Carrito del Usuario

router.post('/mycart/:pid', passport.authenticate('jwt', {session: false}),
 cartController.addProduct);                                            // Agregar Producto al Carrito 

router.delete('/mycart', passport.authenticate('jwt', {session: false}), 
cartController.clearCart);                                              // Vaciar Carrito

router.get('/:id', cartController.getById);                             // Obtener carrito por ID

export default router;