import mongoose from "mongoose";


const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    cnic: {
        type: String,
        required: true
    }
   
})


export const User = mongoose.model("user", UserSchema);