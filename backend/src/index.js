import { app } from "./app.js";
import connectDB from "../mongodb/index.js";
import dotenv from "dotenv";
import router from "../route/route.js";
import cors from "cors"
dotenv.config({
    path:".env"
})

app.use(cors({
    origin:["https://portfolio-frontend-swwd.onrender.com","http://localhost:5173"],
    credentials:true
}))

try {
   await connectDB();
} catch (error) {
    console.log(error)
}
app.get("/",router)
app.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${process.env.PORT}`);
})
