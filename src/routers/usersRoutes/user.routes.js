import { Router } from "express";
import passport from "passport";
import userController from '../../controllers/usersControllers/userController.js';

const router = Router();

router.post('/register', userController.register);  // Registro del Usuario
router.post('/login', userController.login);        // Logueo del Usuario
router.post('/logout', userController.logout);      // Deslogueo del Usuario
router.get('/profile', passport.authenticate('jwt', 
    {session: false}), userController.profile);     // Muestra del Perfil del Usuario

export default router