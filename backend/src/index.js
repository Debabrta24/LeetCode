const express = require("express")
const main = require("./config/db")
const app = express()
app.use(express.json())
require("dotenv").config()
const authRouter = require("./routes/userAuth")
const redisClient = require("./config/radis")
const cookieParser = require("cookie-parser")
app.use(cookieParser())

app.use("/user", authRouter);

// app.use("/user/register", (req, res) => {
//     res.send("hii")
// });



const initalizeConnection = async () => {
    try {
        await main();
        await redisClient.connect()
        app.listen(process.env.PORT, () => {
            console.log("server listing at port number " + process.env.PORT)
        })
    }
    catch (err) {
        throw new Error(err.message)
    }
}
initalizeConnection()
// main()
//     .then(async () => {
//         app.listen(process.env.PORT, () => {
//             console.log("server listing at port number " + process.env.PORT)
//         })

//     })
//     .catch(err => {
//         console.log(err)
//     }) 
