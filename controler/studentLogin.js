const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Student = require("../models/user");
const Attendance = require("../models/attendance");
const validateLogin = require("../middleware/vallidation")
const studentLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

  
        console.log("Incoming request body:", req.body);


        const existingStudent = await Student.findOne({ email });
        if (!existingStudent) {
        
            console.log("User not found");
            return res.status(404).json({ error: "User not found" });
        }

        
        const passWordMatch = await bcrypt.compare(password, existingStudent.password);
        if (!passWordMatch) {
       
            console.log("Invalid password");
            return res.status(401).json({ error: "Invalid password" });
        }
        const lastAttendane = await Attendance.findOne({userId:existingStudent.id})
        if(!lastAttendane){
             await Attendance.create({userId:existingStudent.id})
        }else{
            lastDate = `${lastAttendane.createdAt.toISOString()}`.split("T")[0]
            const today = `${(new Date()).toISOString()}`.split("T")[0]
            
            console.log({lastDate,today,createdAt:lastAttendane.createdAt})
            if(today!==lastDate){
                await Attendance.create({userId:existingStudent.id})
            }

        }
   

     
        const token = jwt.sign({ userId: existingStudent._id }, "secretKey", { expiresIn: "3days" });

   
        console.log("Login successful");

        
        res.json({ message: "Login successful", token });
    } catch (error) {
  
        console.error("Error in studentLogin:", error);
     
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { studentLogin };
