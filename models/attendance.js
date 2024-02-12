
const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    userId:{type: mongoose.Types.ObjectId,
            require:true,
            ref:"User"},
  
},{
    timestamps:true
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
