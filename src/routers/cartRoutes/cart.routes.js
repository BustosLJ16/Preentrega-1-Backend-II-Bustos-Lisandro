import { Router } from "express";
import passport from "passport";
import cartController from '../../controllers/cartController/cartController.js'

const router = Router();

router.get('/mycart', passport.authenticate('jwt', {session: false}), cartController.getMyCart);

router.post('/mycart/:pid', passport.authenticate('jwt', {session: false}), cartController.addProduct);

router.delete('/mycart', passport.authenticate('jwt', {session: false}), cartController.clearCart);

router.get('/:id', cartController.getById);

export default router;