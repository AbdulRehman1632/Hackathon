import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose";
// import ListingRoutes from "./routes/Webroutes.js";
import { AllRoutes } from "./AllRoutes/Index.js";

const app = express()

app.use(express.json());
app.use(cors());
dotenv.config();

const PORT=process.env.PORT || 4040
const MONOGO_URI = process.env.URL_MONGODB

app.get("/",(req,res)=>{
    res.send("welcome to backend")

})

const DB_CONNECTION = async() => {
    try{
        await mongoose.connect(MONOGO_URI)
        console.log("Db connected")

    }

    catch(error){
        console.log("Db not connected")

    }
}

DB_CONNECTION()

app.use(AllRoutes)



app.listen(PORT,()=>{
    console.log(`Server start ${PORT}`)
})