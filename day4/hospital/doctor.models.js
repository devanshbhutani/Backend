import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    specialization: {
        type: String,
        required: true,
    },
    licenseNumber: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    qualifications: {
        type: String,
        required: true,
    },
    experience: {
        type: Number,
        required: true,
    },
    worksInfHospoitals:[
        {
            type: [mongoose.Schema.Types.ObjectId],
            ref: "Hospital",
            required: true,
        },
    ],
}, {timestamps: true});

export default mongoose.model("Doctor", doctorSchema);