import express from "express";
import { engine } from 'express-handlebars';
import { initMongoDB } from "./daos/mongodb/connection.js";
import productRouter from "./routers/productsRoutes/products.routes.js";
import usersRouter from './routers/usersRoutes/user.routes.js'
import cartRouter from './routers/cartRoutes/cart.routes.js'
import sessionsRouter from './routers/sessionsRoutes/sessions.routes.js'
import cookieParser from "cookie-parser";
import passportConfig from './config/passport/passport.js';


// Inicio mi Servidor con Express
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Configuración de CookieParser y Passport
app.use(cookieParser());
app.use(passportConfig.initialize());

// Inicio de conexión con MongoDB
initMongoDB()
    .then(() => console.log('Conectado con MongoDB Exitosamente!'))
    .catch((error) => console.log(error));

// Establezco configuración de Handlebars
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', 'src/views');
    
// Establezco rutas provisorias
app.use('/products', productRouter);
app.use('/api/users', usersRouter);
app.use('/api/sessions', sessionsRouter);
app.use('/api/carts', cartRouter);

// Rutas renderizadas con Views
app.get('/register', (req, res) => res.render('register'));
app.get('/login', (req, res) => res.render('login'));


// Configurando escucha del Servidor
const PORT = 8080;
app.listen(PORT, ()=>{
    console.log(`Escuchando el Servidor en el Puerto ${PORT}.`);
});