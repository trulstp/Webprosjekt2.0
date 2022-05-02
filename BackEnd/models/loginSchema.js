const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const loginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: [true, "Please enter an email"],
        unique: true,
        validate: [isEmail, "Please enter an valid email"],
    },
    university: {
        type: String,
        required: true,
    },
    degree: {
        type: String,
        required: true,
    },
    phonenr: {
        type: Number,
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minlength: [6, "Minimum length is 6 characters"],
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("mytable", loginSchema);
