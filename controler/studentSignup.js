const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const studentSignUp = async (req, res) => {
    try {
        const { email, password } = req.body;
console.log(req.body)
        const alreadyExisting = await User.findOne({ email });
        if (alreadyExisting) {
            return res.status(400).json({ message: "This user account already exists!" });
        }
console.log({password})
       
        const hashedPassword = await bcrypt.hash(password, 10); 

        
        const newUser = await User.create({ email, password: hashedPassword });

        // Generate JWT token
        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: "7days" }); 
        return res.status(201).json({ message: "User created successfully", user: newUser, token });
    } catch (error) {
        console.error("Error in studentSignUp:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { studentSignUp };



