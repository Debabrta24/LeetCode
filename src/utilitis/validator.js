// npm i validator
const validator = require("validator")
const validate = (data) => {
    const mandatoryFiled = ['firstName', 'lastName', 'emailId', 'password']
    const isAllowed = mandatoryFiled.every((k) => Object.keys(data).includes(k))
    if (!isAllowed) {
        throw new Error("some Filed missing")
    }
    if (!validator.isEmail(data.emailId))
        throw new Error("Invaild email")
    if (!validator.isStrongPassword(data.password))
        throw new Error("week password")
}
module.exports = validate