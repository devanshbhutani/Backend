import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({}, {timestamps: true});

export default mongoose.model("Category", categorySchema);