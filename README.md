# Preentrega N°1 - Backend II | Ecommerce con Autenticación

Este proyecto es una preentrega del curso **Backend II** de Coderhouse, donde se implementa un backend funcional para un sistema de ecommerce. El foco está en la **gestión de usuarios**, **autenticación**, **autorización** y uso de **JWT**.

---

## 🚀 Tecnologías Utilizadas

- **Node.js**
- **Express**
- **MongoDB + Mongoose**
- **Passport + JWT**
- **bcrypt**
- **Handlebars**
- **dotenv**

---

## 📁 Estructura del Proyecto

```
src/
├── app.js               # Inicialización del servidor
├── config/              # Configuración de Passport
├── controllers/         # Lógica de negocio de usuarios
├── daos/                # Modelos y acceso a datos (Mongo)
├── routers/             # Rutas Express
├── services/            # Lógica de negocio (servicios)
└── views/               # Vistas con Handlebars
```

---

## 👤 Modelo de Usuario

El modelo de usuario (`User`) incluye los siguientes campos:

- `first_name` (String)
- `last_name` (String)
- `email` (String, único)
- `age` (Number)
- `password` (String, encriptado con **bcrypt**)
- `cart` (ObjectId, referencia al carrito)
- `role` (String, por defecto `'user'`)

---

## 🔐 Autenticación y Autorización

- **Contraseñas** encriptadas con `bcrypt.hashSync`.
- **Login** con generación de **JWT**, almacenado como cookie HTTP-only.
- **Passport JWT** implementado para proteger rutas.
- Ruta protegida `/api/sessions/current` devuelve los datos del usuario autenticado.

---

## 📦 Scripts disponibles

```bash
npm install      # Instala las dependencias
npm run dev      # Ejecuta el servidor en modo desarrollo con nodemon
npm start        # Ejecuta el servidor en modo producción
```

---

## 🌐 Endpoints principales

### Auth

- `POST /api/sessions/register` → Registro de usuario
- `POST /api/sessions/login` → Login de usuario con generación de token
- `GET /api/sessions/current` → Devuelve el usuario autenticado (requiere JWT)

### Usuarios

- `GET /api/users/` → Listado de usuarios
- `POST /api/users/` → Crear nuevo usuario (admin)
- `DELETE /api/users/:id` → Eliminar usuario

---

## ⚙️ Variables de entorno

Crear un archivo `.env` con las siguientes variables:

```env
PORT=8080
MONGO_URL=mongodb://localhost:27017/ecommerce
SECRET_JWT=tu_secreto_super_secreto
```

---

## 💻 Autor

**Lisandro Bustos**  
Proyecto desarrollado para la preentrega N°1 de Backend II – Coderhouse
