import { ProductModel } from '../../models/products/productModel.js';
import MongoDao from '../mongoDao/mongoDao.js';

class ProductDaoMongo extends MongoDao {
    constructor(model) {
        super(model);
    }
};

const productDao = new ProductDaoMongo(ProductModel);
export default productDao;