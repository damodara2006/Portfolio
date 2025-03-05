import { nameSchema } from "../models/name.js";
import mongoose from "mongoose";


const name = async(req,res)=>{
    const user = await nameSchema.findOne({name:"DAMODARA PRAKASH P"})

   if(!user){
    const newname = new nameSchema({
        name:"DAMODARA PRAKASH P"
    })

    await newname.save();
  
    return res.status(201).send(newname)
   }
        
try{
    const username = await nameSchema.findOne({name:"DAMODARA PRAKASH P"})

  return res.status(201).json(username)
}
catch(err){
    return res.status(400).send("Error")
}


}

export {name}


 
