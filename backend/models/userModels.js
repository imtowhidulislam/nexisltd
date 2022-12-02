import mongoose from "mongoose";

const createUser = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
      },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: Date,
        default: new Date(),
    },
    },
    {
      timestamps: true,
    }
)

const myUser = mongoose.model("myUser", createUser);
export default myUser;