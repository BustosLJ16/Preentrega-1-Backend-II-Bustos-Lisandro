import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
    first_name:{type: String, required: true},
    last_name:{type: String, required: true},
    email:{type: String, required: true, unique: true},
    age:{type: Number, required: true},
    password:{type: String, required: true},
    cart:{type: mongoose.Schema.Types.ObjectId, ref: 'Cart'}, // referencia id de carts
    role:{type: String, default: 'user'},
});

export const userModel = model('users', userSchema);