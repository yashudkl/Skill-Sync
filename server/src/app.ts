import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
// import UsersModel from "./models/Users"; // Adjust the path as per your project structure

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Atlas URI (Avoid hardcoding sensitive data for production)
const MONGO_URI = "mongodb+srv://yashudkl:0MMNikPcsjiCzQJQ@u-a.gaphj.mongodb.net/SkillSync?retryWrites=true&w=majority";

// Connecting MongoDB Atlas
mongoose
  .connect(MONGO_URI, {
    

  })
  .then(() => console.log("Connected to MongoDB - Skill-Sync"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// // Interfaces for request bodies (optional but recommended)
// interface SignupRequestBody {
//   name?: string;
//   email: string;
//   password: string;
// }

// interface LoginRequestBody {
//   email: string;
//   password: string;
// }

// // Signup API
// app.post("/Signup", async (req: Request<{}, {}, SignupRequestBody>, res: Response) => {
//   try {
//     const user = await UsersModel.create(req.body);
//     res.status(201).json(user);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to create user", details: err });
//   }
// });

// // Login API
// app.post("/login", async (req: Request<{}, {}, LoginRequestBody>, res: Response) => {
//   const { email, password } = req.body;

//   try {
//     const user = await UsersModel.findOne({ email });
//     if (user) {
//       if (user.password === password) {
//         res.json({ message: "success" });
//       } else {
//         res.status(400).json({ error: "The password is incorrect" });
//       }
//     } else {
//       res.status(404).json({ error: "Account is not registered" });
//     }
//   } catch (err) {
//     res.status(500).json({ error: "Internal server error", details: err });
//   }
// });

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
