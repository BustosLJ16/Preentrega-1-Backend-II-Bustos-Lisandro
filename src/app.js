import express from "express";
import { initMongoDB } from "./daos/mongodb/connection.js";

// Inicio mi Servidor con Express
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Inicio de conexión con MongoDB
initMongoDB()
    .then(() => console.log('Conectado con MongoDB Exitosamente'))
    .catch((error) => console.log(error));

// Configurando escucha del Servidor
const PORT = 8080;
app.listen(()=>{
    console.log(`Escuchando el Servidor en el Puerto ${PORT}.`);
    
})