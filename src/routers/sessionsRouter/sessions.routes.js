import { Router } from "express";
import passport from "passport";
import userController from "../../controllers/usersControllers/userController.js";

const router = Router();

router.get('/current', passport.authenticate('jwt', {session: false}), userController.profile);

export default router;