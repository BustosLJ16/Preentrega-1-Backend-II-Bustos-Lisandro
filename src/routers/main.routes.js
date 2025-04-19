import { Router } from "express";

// LLamo a mis Rutas
import productsRouter from '../routers/productsRoutes/products.routes.js'
import usersRouter from '../routers/usersRoutes/user.routes.js'
import sessionsRouter from '../routers/sessionsRoutes/sessions.routes.js'
import cartRouter from '../routers/cartRoutes/cart.routes.js'

const router = Router();

router.use('/products', productsRouter);    // Rutas de Productos
router.use('/users', usersRouter);          // Rutas de Usuarios
router.use('/sessions', sessionsRouter);    // Rutas de Session Current
router.use('/carts', cartRouter);           // Rutas de Cart

export default router;
