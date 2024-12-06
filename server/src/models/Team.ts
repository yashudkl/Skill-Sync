import mongoose from "mongoose"
const TeamSchema = new mongoose.Schema({
    team_name: String,
    description: String,
    team_members: {
        default: [],
        type: [String]
    },
    category: String
})

export const Team = mongoose.model("team", TeamSchema)
