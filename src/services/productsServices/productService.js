import CustomError from '../../utils/customError/customError.js'
import productDao from '../../daos/dao/productsDao/productDao.js'


class ProductService {
    constructor(dao) {
        this.dao = dao
    }

    create = async(body) => {
        try {
            const response = await this.dao.create(body);
            if(!response) throw new CustomError('Error Creating the Product', 404);
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }

    getAll = async() => {
        try {
            return await this.dao.getAll()
        } catch (error) {
            throw new Error(error);
        }
    }

    getById = async(id) => {
        try {
            console.log(id);
            const response = await this.dao.getById(id);
            if(!response) throw new CustomError('Product not Found', 404);
            return response;
        } catch (error) {
            throw error;
        }
    }

    update = async(id, body) => {
        try {
            const response = await this.dao.update(id, body, {new: true});
            if(!response) throw new CustomError('Error Updating the Product', 404);
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }

    delete = async(id) => {
        try {
            const response = await this.dao.delete(id, {new: true});
            if(!response) throw new CustomError('Error Deleting the Product', 404);
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default ProductService = new ProductService(productDao);