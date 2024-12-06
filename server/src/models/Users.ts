import mongoose from "mongoose"
const UsersSchema = new mongoose.Schema({
    username: String,
    full_name: String,
    email : String,
    password: {
        type: String,
        require: true
    },
    bio: {
        default: "",
        type: String
    },
    pfp_url: {
        default: "",
        type: String
    },
    skills: {
        default: [],
        type: [String]
    },
})

export const User = mongoose.model("user", UsersSchema)
