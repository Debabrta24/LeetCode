const express = require("express")
const main = require("./config/db")
const app = express()
app.use(express.json())
require("dotenv").config()
const cookieParser =require("cookie-parser")
app.use(cookieParser )

main()
    .then(async () => {
        app.listen(process.env.PORT, () => {
            console.log("server listing at port number " + process.env.PORT)
        })

    }
    )
    .catch(err => {
        console.log(err)
    }) 
