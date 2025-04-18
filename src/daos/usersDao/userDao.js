import { userModel } from "../models/users/userModel.js";
import MongoDao from "../mongodb/mongoDao.js";

class userDaoMongo extends MongoDao {
    constructor(model){
        super(model);
    }

    findByEmail = async (email) => {
        try {
            return await this.model.findOne({ email });
        } catch (error) {
            throw new Error(error);
        }
    }
}

export const userDao = new userDaoMongo(userModel);