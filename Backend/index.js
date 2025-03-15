import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
dotenv.config({});
const app = express();

const PORT = process.env.port || 8000;

app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({extended:true}));

const corsOptions = {
    origin:'http://localhost:5173',
    credentials:true
}
app.use(cors(corsOptions));

app.get("/",(req,res) => {
    res.send("Working");
})


app.listen(PORT,() => {
    connectDB();
    console.log(`server run at port number ${PORT}`);
})