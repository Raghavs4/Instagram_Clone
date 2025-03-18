import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;


const __dirname = path.resolve();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));
const corsOptions = {
    origin: process.env.URL,
    credentials: true
}
app.use(cors(corsOptions));

// Routes
app.use("/api/v1/user", userRoute);

// ✅ Connect DB THEN start server!
// connectDB().then(() => {
//     app.listen(PORT, () => {
//         console.log(`✅ MongoDB Connected & Server running at port ${PORT}`);
//     });
// }).catch((err) => {
//     console.log(" Failed to connect MongoDB", err);
// });
// app.listen(PORT, () => {
//     connectDB();
//     console.log(`Server listen at port ${PORT}`);
// });
const startServer = async () => {
    try {
        await connectDB(); // Wait until MongoDB connected
        console.log("✅ MongoDB Connected");
        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("❌ Failed to connect MongoDB", error);
    }
};
startServer();