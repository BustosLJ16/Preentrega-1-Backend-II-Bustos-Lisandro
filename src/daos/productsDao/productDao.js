import { ProductModel } from "../models/products/productModel.js";
import MongoDao from "../mongodb/mongoDao.js";

class ProductDaoMongo extends MongoDao {
    constructor(model) {
        super(model);
    }
};

export const productDao = new ProductDaoMongo(ProductModel);
