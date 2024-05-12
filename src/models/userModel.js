const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema ({
    fullName : String,
    userName :String,
    email:String,
    password:String,
    avatarUrl:String
})

const Users = mongoose.model("Users", userSchema)

module.exports = Users