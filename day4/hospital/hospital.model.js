import  mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true,
    },
    specializationIn: [{
        type: String,
        required: true,
    }],
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    website: {
        type: String,
        required: false,
    },
}, {timestamps: true});

export default mongoose.model("Hospital", hospitalSchema);