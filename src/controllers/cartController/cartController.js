import cartService from '../../services/cartServices/cartService.js';

class CartController {
    constructor(service){
        this.service = service;
    }

    getById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const response = await this.service.getById(id);
            res.status(200).json(response);
        } catch (error) {
            next(error)
        }
    }

    getMyCart = async (req, res, next) => {
        try {
            const response = await this.service.getById(req.user.cart);
            res.status(200).json(response);
        } catch (error) {
            next(error)
        }
    }

    addProduct = async (req, res, next) => {
        try {
            const { pid } = req.params;
            const response = await this.service.addProduct(req.user.cart, pid);
            res.status(200).json(response);
        } catch (error) {
            next(error)
        }
    }

    clearCart = async (req, res, next) => {
        try {
            const response = await this.service.clearCart(req.user.cart);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    };
};

export default new CartController(cartService);