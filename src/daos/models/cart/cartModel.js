import { Schema, model } from "mongoose";

const cartSchema = new Schema({
    products: [{
        product: {
            type: Schema.Types.ObjectId,
            ref: 'products',
        },
        quantity: {
            type: Number,
            default: 1,
        }
    }],
    price: Number
});

cartSchema.pre('findOne', function() {
    this.populate('products.product');
});

export const cartModel = model('carts', cartSchema);