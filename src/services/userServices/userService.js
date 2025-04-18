import bcrypt from 'bcrypt'
import CustomError from "../../utils/customError/customError.js";
import { userDao } from '../../daos/usersDao/userDao.js';

class userService {
    constructor(dao){
        this.dao = dao;
    }

    register = async (userData) => {
        try {
            const existing = await this.dao.findByEmail(userData.email);
            if (existing){
                throw new CustomError('El Usuario ya está Registrado.', 400);
            }
            const hashedPassword = await bcrypt.hash(userData.password, 10);
            const user = {...userData, password: hashedPassword };

            const response = await this.dao.create(user);
            if (!response){
                throw new CustomError('Error al crear el Usuario', 500);
            }
            return response;
        } catch (error) {
            throw error;
        }
    };

    login = async (email, password) => {
        try {
            const user = await this.dao.findByEmail(email);
            if (!user){
                throw new CustomError('Usuario no encontrado', 404);
            }
            const match = await bcrypt.compare(password, user.password);
            if (!match){
                throw new CustomError('La contraseña es Incorrecta', 401);
            }
            return user;
        } catch (error) {
            throw error;
        }
    };
}

export default userService = new userService(userDao);