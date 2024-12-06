import mongoose from "mongoose"
const TeamSchema = new mongoose.Schema({
    user_id: String,
    team_name: String,
    description: String,
    team_members: {
        default: [],
        type: [String]
    },
    category: String,
    foundUsers: {
        type: [String],
        default: []
    },
    rejectedUsers: {
        type: [String],
        default: []
    },
})


export const Team = mongoose.model("team", TeamSchema)