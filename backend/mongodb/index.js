import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config({
    path:".env"
})

const connectDB = async()=>{
    try {
        
       const connection = await mongoose.connect(process.env.MONGODB);
       console.log("Connected to DB")
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;
