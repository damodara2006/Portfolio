import { app } from "./app.js";
import connectDB from "../mongodb/index.js";
import dotenv from "dotenv";


dotenv.config({
    path:".env"
})

try {
   await connectDB();
} catch (error) {
    console.log(error)
}
app.get("/",(req,res)=>{
  return res.send("Hello");
})

app.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${process.env.PORT}`);
})
