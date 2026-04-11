const redisClient = require("../config/radis")
const User = require("../models/user")
const validate = require("../utilitis/validator")
const bcrypt = require("bcrypt")//npm i bcrypt
const jwt = require("jsonwebtoken")

const register = async (req, res) => {
    try {
        // console.log(req.body)
        validate(req.body)
        const { firstName, lastName, emailId, password } = req.body
        //need to validate all function 👆👆 

        req.body.password = await bcrypt.hash(password, 10)
        req.body.role = 'user';
        // //kahi yea mail id already existis or not  check this 👇👇
        const ans = User.exists(req.body)


        const user = await User.create(req.body)

        //now we need to sent user token for login 
        const token = jwt.sign({ _id: user._id, emailId: user.emailId, role: user.role }, process.env.JWT_KEY, { expiresIn: 3600 }) //no need to add await here  //timre is in second
        res.cookie('token', token, { maxAge: 60 * 60 * 1000 }) // time is in millisecond 
        return res.status(200).send("User Registered Successfully")
    }
    catch (err) {
        res.status(400).send("bad request" + err.message)
    }
}

const login = async (req, res) => {
    try {
        const { emailId, password } = req.body
        if (!emailId) {
            throw new Error("Invaild  credntial")
        }
        if (!password) {
            throw new Error("Invaild  credntial")
        }
        const user = await User.findOne({ emailId }) //findinnd by email id 
        const match = bcrypt.compare(password, user.password) //no need to await
        if (!match) {
            throw new Error("Invaild credntial")
        }

        //now we need to sent user token for login 
        const token = jwt.sign({ _id: user._id, emailId: user.emailId, role: "user" }, process.env.JWT_KEY, { expiresIn: 3600 }) //no need to add await here  //timre is in second
        res.cookie('token', token, { maxAge: 60 * 60 * 1000 }) // time is in millisecond 
        res.status(200).send("User login Successfully")
    }
    catch (err) {
        res.status(401).send("error" + err)
    }
}

const logout = async (req, res) => {
    try {
        //validate the token 
        // alreday checked by this "userMiddleWare" 
        //if vaild then need to add in radis for block 
        const { token } = req.cookies;

        const payload = jwt.decode(token);
        // console.log(payload)
        await redisClient.set(`token:${token}`, 'Blocked');
        await redisClient.expireAt(`token:${token}`, payload.exp)

        res.cookie("token", null, { expires: new Date(Date.now()) })
        res.send("logout sussfully")
    }
    catch (err) {
        res.status(503).send("error" + err)
    }
}

const adminRegister = async (req, res) => {
    try {
        // console.log(req.body)
        validate(req.body)
        const { firstName, lastName, emailId, password } = req.body
        //need to validate all function 👆👆 

        req.body.password = await bcrypt.hash(password, 10)
        req.body.role = 'admin';
        // //kahi yea mail id already existis or not  check this 👇👇
        const ans = User.exists(req.body)


        const user = await User.create(req.body)

        //now we need to sent user token for login 
        const token = jwt.sign({ _id: user._id, emailId: user.emailId, role: user.role }, process.env.JWT_KEY, { expiresIn: 3600 }) //no need to add await here  //timre is in second
        res.cookie('token', token, { maxAge: 60 * 60 * 1000 }) // time is in millisecond 
        return res.status(200).send("User Registered Successfully")
    }
    catch (err) {
        res.status(400).send("bad request" + err.message)
    }
}

module.exports = { register, login, logout,adminRegister };