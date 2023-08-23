import mongoose from "mongoose";

 export async function connectDB(){
    try{
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;
        connection.on("connected",()=>{
            console.log("Mongo connected successfully")
        })
    }
    catch(error : any){
        console.log(error)
    }
 }