import express from "express";
import cookieParser from "cookie-parser";
import { engine } from 'express-handlebars';
import { initMongoDB } from "./daos/mongodb/connection.js";
import passportConfig from './config/passport/passport.js';
import mainRouter from "./routers/main.routes.js";

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
    
// Rutas de mi App
app.use('/api', mainRouter) // LLamada de mis Rutas en el Main
app.get('/register', (req, res) => res.render('register'));
app.get('/login', (req, res) => res.render('login'));

// Configurando escucha del Servidor
const PORT = 8080;
app.listen(PORT, ()=>{
    console.log(`Escuchando el Servidor en el Puerto ${PORT}.`);
});