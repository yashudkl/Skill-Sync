const mongoose = require('mongoose')
const UsersSchema = new mongoose.Schema({
    username: String,
    full_name: String,
    email : String,
    password: String,
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
