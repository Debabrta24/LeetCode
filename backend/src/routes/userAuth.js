const express = require('express')
const authRouter = express.Router();
const { register, login, logout, adminRegister } = require("../controlers/userAuthenticate")
const userMiddleWare = require("../middleWare/userMiddleWare")
const adminMiddleware = require("../middleWare/adminMiddleWare")
//register
authRouter.post("/register", register)
//login
authRouter.post('/login', login)
//logout
authRouter.post("/logout", userMiddleWare, logout)
//getProfile
// authRouter.post("getProfile",getProfile)

// for admin
authRouter.post("/admin/register", adminMiddleware, adminRegister);

module.exports = authRouter