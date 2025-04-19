import { cartModel } from '../../models/cart/cartModel.js';
import MongoDao from '../mongoDao/mongoDao.js';

class cartDao extends MongoDao {
    constructor() {
        super(cartModel);
    }
};

export default new cartDao();