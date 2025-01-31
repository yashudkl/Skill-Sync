import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import { v2 as cloudinary } from 'cloudinary';
import { authenticateUser, getLoginStatus, loginController, signupController } from "./controllers/auth.controller";
import { setupAccountController } from "./controllers/setup.controller";
import cookieParser from "cookie-parser";
import "dotenv/config";
import { acceptUser, createTeamController, declineUser, getCurrentUserTeamsController, getFoundUser, joinTeamController } from "./controllers/team.controller";
// import UsersModel from "./models/Users"; // Adjust the path as per your project structure

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ credentials: true, origin: true,  }));
app.use(cookieParser())
// MongoDB Atlas URI (Avoid hardcoding sensitive data for production)
const MONGO_URI = "mongodb+srv://teamlits:teamlits123@skillsync.tkoov.mongodb.net/?retryWrites=true&w=majority&appName=SkillSync";



//routes

//auth
app.post("/api/auth/login", loginController);
app.post("/api/auth/signup", signupController);
app.post("/api/auth/setup", authenticateUser,setupAccountController);
app.get("/api/auth/status", authenticateUser, getLoginStatus);

//team
app.post("/api/team/create", authenticateUser, createTeamController);
app.post("/api/team/join", authenticateUser, joinTeamController);
app.get("/api/team/current", authenticateUser, getCurrentUserTeamsController);
app.get("/api/team/found/:id", authenticateUser, getFoundUser);

app.put("/api/team/accept/:team_id/:user_id", authenticateUser, acceptUser);
app.put("/api/team/decline/:team_id/:user_id", authenticateUser, declineUser);





async function init() {
    await mongoose.connect(MONGO_URI, {
        dbName: "thelits"
    });
    console.log("Connected to MongoDB")
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
    const PORT = 3001;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

init();

// Start the server

