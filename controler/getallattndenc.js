const Attendance = require("../models/attendance");
const jwt = require("jsonwebtoken")
const getallanttnd = async (req, res) => {
  try {
   console.log(req.user)
    const numberOfAttnd = await Attendance.countDocuments();
    
  
    const attendance = await Attendance.find({userId:req.user.userId});
    
  
    if (!attendance || attendance.length === 0) {
      console.log("No attendance records found.");
      return res.status(404).json({ message: "No attendance records found." });
    }

  
    return res.status(200).json({ statusText: "Successfully fetched all attendance records.", data: attendance });
  } catch (error) {
   
    console.error("Error fetching attendance records:", error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports ={ getallanttnd};
