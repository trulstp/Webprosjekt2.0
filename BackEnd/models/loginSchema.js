const mongoose = require('mongoose')

const loginSchema = new mongoose.Schema(
    {
        userName: {
            type:String,
            required: true
        },
        email: {
            type:String,
            required: true,
            unique: true
        },
        password: {
            type:String,
            required: true
        },
        date: {
            type:Date,
            default:Date.now
        }
    }
)

module.exports = mongoose.model('mytable', loginSchema)