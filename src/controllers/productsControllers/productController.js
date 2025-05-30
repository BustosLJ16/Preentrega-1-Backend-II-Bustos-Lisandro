import productService from '../../services/productsServices/productService.js';


class productController {
    constructor(service) {
        this.service = service;
    }

    create = async(req, res, next) => {
        try {
            const response = await this.service.create(req.body);
            res.status(201).json(response);
        } catch (error) {
            next(error)
        }
    }

    getById = async(req, res, next) => {
        try {
            const { id } = req.params;
            const response = await this.service.getById(id);
            res.status(200).json(response);
        } catch (error) {
            next(error)
        }
    }

    getAll = async(req, res, next) => {
        try {
            const response = await this.service.getAll();
            res.status(200).json(response);
        } catch (error) {
            next(error)
        }
    }

    update = async(req, res, next) => {
        try {
            const { id } = req.params;
            const response = await this.service.update(id, req.body);
            res.status(200).json(response);
        } catch (error) {
            next(error)
        }
    }

    delete = async(req, res, next) => {
        try {
            const { id } = req.params;
            const response = await this.service.delete(id);
            res.status(200).json(response);
        } catch (error) {
            next(error)
        }
    }
}

export default productController = new productController(productService);