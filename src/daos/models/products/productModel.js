import {Schema, model} from "mongoose";

const ProductSchema = new Schema({
    name:{type: String, required: true},
    description:{type: String, required: true},
    category:{type: String, required: true},
    type:{type: String, required: true},
    thumbnail:{type: String, required: true},
    price:{type: Number, required: true},
    stock:{type: Number, required: true},
    code:{type: Number, required: true},
});

export const ProductModel = model('products', ProductSchema);