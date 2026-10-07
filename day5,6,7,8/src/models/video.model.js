import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const videoSchema = new Schema(
    {
       videoFile: {
        type: String,
        required: true,
      },
      thumbnail: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      views: {
        type: Number,
        default: 0,
      },
      likes: {
        type: Number,
        default: 0,
      },
      dislikes: {
        type: Number,
        default: 0,
      },                
      duration: {
        type: Number,
        required: true,
    }
    },
    { timestamps: true }
);

  videoSchema.plugin(require("mongoose-aggregate-paginate-v2"));
        
export const Video = mongoose.model("Video", videoSchema);      