import express from "express"
import { ListingRoutes } from "../routes/Webroutes.js"
import authRoutes from "../Auth/AuthRoutes/AuthRoutes.js";


export const AllRoutes = express()


AllRoutes.use("/User",ListingRoutes)
AllRoutes.use('/auth',authRoutes);
