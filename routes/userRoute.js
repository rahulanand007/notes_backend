const express = require("express")
const {registerUser, loginUser} = require("../controllers/userController")


const router = express.Router();

router.route("/auth/signup").post(registerUser)
router.route("/auth/login").post(loginUser)



module.exports = router;