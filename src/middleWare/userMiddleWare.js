const jwt = require("jsonwebtoken");
const redisClient = require("../config/radis");

const userMiddleWare = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        if (!token)
            throw new Error("Token is not present ");
        const payload = await jwt.verify(token, process.env.JWT_KEY)
        // console.log(payload)
        const { _id } = payload;
        // console.log(_id)
        if (!_id) {
            throw new Error("Invaild token ");
        }
        if (!payload) {
            throw new Error("user Doesn't exit")
        }


        // now check if it is present in my  radis client 
        const IsBlocked = await redisClient.exists(`token:${token}`)
        if (IsBlocked) {
            throw new Error("invaild token")
        }
        req.user = payload;
        next();
    }
    catch (err) {

        res.send("error " + err.message)
    }
}

module.exports = userMiddleWare


// 36 minuites