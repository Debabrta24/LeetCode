const mongoose = require('mongoose')
async function main(params) {
   await mongoose.connect(process.env.DB_URL)
   console.log("db connected")
}

module.exports = main;