import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    images: {
        type: [String],
        default: [],
    },
    description: {
        type: String,
        required: true,
    },
    price:{
        type: Number,
        default: 0,
        required: true,
    },
    stock: {
        type: Number,
        default: 0,
        required: true,
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
}, {timestamps: true});

export default mongoose.model("Product", productSchema); 