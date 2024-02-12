const express = require ("express")
const app = express()
const mongoose = require("mongoose")
 require ("dotenv").config()
const connectDB = require("./db")
const student =require("./route/userRoute")
const cors = require("cors")
 const port =5500
app.use(express.json())
app.use(cors({
  origin:"*"
}))


app.use("/api",student)


app.listen(port,async ()=>{
    try {
     await connectDB()
      console.log("saver 'je suis en train de courir'....")
    } catch (error) {
      console.error(error)
    }
  
  })