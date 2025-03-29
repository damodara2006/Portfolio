import mongoose from "mongoose"
import { Schema } from "mongoose"

const name = new Schema({
    name:{
        type:String
    }
})

export const nameSchema = mongoose.model("name" , name);