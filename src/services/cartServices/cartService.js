import cartDao from '../../daos/dao/CartDao/cartDao.js';
import productDao from '../../daos/dao/productsDao/productDao.js';
import CustomError from '../../utils/customError/customError.js';

class cartService {
    constructor(cartDao, productDao){
        this.cartDao = cartDao;
        this.productDao = productDao;
    }

    getById = async (cartId) => {
        return await this.cartDao.getById(cartId);
    }

    addProduct = async (cartId, productId) => {
        const cart = await this.cartDao.getById(cartId);
        if (!cart) {
            throw new CustomError('Carrito no encontrado.', 404);
        }

        const product = await this.productDao.getById(productId);
        if (!product){
            throw new CustomError('Producto no encontrado.', 404);
        }

        const existingProduct = cart.products.find(p => p.product.toString() === productId);
        if(existingProduct){
            existingProduct.quantity += 1;
        } else {
            cart.products.push({ product: productId, quantity: 1 });
        }

        return await cart.save();
    };

    clearCart = async (cartId) => {
        const cart = await this.cartDao.getById(cartId);
        if(!cart){
            throw new CustomError('Carrito no encontrado', 404);
        }
        cart.products = [];
        return await cart.save();
    };

    createCart = async () => {
        return await this.cartDao.create({
            products: []
        });
    };
};

export default new cartService(cartDao, productDao);