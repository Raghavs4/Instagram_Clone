import {v1 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
dotenv({});

cloudinary.config({
    cloud_name:Process.env.CLOUD_NAME,
    api_key : process.env.API_KEY,
    secret_key : process.env.API_SECRET
})

export default clodinary;