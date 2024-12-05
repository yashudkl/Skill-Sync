import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import { getLoginStatus, loginController, signupController } from "./controllers/auth.controller";
// import UsersModel from "./models/Users"; // Adjust the path as per your project structure

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ credentials: true, origin: true,  }));

// MongoDB Atlas URI (Avoid hardcoding sensitive data for production)
const MONGO_URI = "mongodb://localhost:27017";



//routes
app.post("/api/auth/login", loginController);
app.post("/api/auth/signup", signupController);
app.get("/api/auth/status", getLoginStatus);


async function init() {
    await mongoose.connect(MONGO_URI, {
        dbName: "thelits"
    });
    console.log("Connected to MongoDB")
    const PORT = 3001;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

init();

// Start the server

