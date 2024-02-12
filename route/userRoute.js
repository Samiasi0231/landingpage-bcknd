const express = require("express")
const studentSignup =require("../controler/studentSignup")
const studentLogin =require("../controler/studentLogin")
const validateLogin = require("../middleware/vallidation")
const getallanttnd =require("../controler/getallattndenc")
const router =express.Router()

router.post("/signup",studentSignup.studentSignUp)


router.post("/login",studentLogin.studentLogin)
router.get("/allattnd",validateLogin,getallanttnd.getallanttnd)





module.exports = router