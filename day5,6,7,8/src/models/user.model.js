import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
        lowercase: true,
        trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, // cloudinary url   
      required: true,
      default: "",
    },
    coverImage: {
      type: String, // cloudinary url
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    refreshTokens: [
      {
        type: String,
      },
    ],
    likedVideos: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],   
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.isPasswordMatch = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ 
      id: this._id,
      email: this.email,
      username: this.username,
      fullName: this.fullName, 
    
    }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1h",

    });
    return token;
};
userSchema.methods.generateRefreshToken = function () {
    const token = jwt.sign({ 
      id: this._id,
      email: this.email,
      username: this.username,
      fullName: this.fullName, 
    
    }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "1h",

    });
    return token;
};

const User = mongoose.model("User", userSchema);

export default User;