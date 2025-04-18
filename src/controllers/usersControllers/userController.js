import jwt from "jsonwebtoken";
import userService from '../../services/userServices/userService.js';

class userController {
    constructor(service) {
        this.service = service;
    }

    register = async (req, res, next) => {
        try {
            const user = await this.service.register(req.body);
            res.status(201).json({ message: 'Usuario Registrado!', user });
        } catch (error) {
            next(error)
        }
    }

    login = async (req, res, next) => {
        try {
            const { email, password } = req.body;
            const user = await this.service.login(email, password);

            const token = jwt.sign(
            {id: user._id, role: user.role},
            process.env.SECRET_JWT,
            { expiresIn: '1h'}
        );

        res.cookie('token', token, { httpOnly: true })
        .json({
            message: 'Login exitoso!',
            token,
            user:{
                id: user._id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                role: user.role
            }
        });
        } catch (error) {
            next(error);
        }
    }

    logout = (req, res, next) => {
        try {
            res.clearCookie('token').json({
                message: 'Logout exitoso!'
            })
        } catch (error) {
            next(error)
        }
    }

    profile = (req, res, next) => {
        try {
            res.json({
                user: req.user
            });
        } catch (error) {
            next(error)
        }
    }
}

export default new userController(userService);