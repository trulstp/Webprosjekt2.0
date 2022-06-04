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
    role:{
        type: String,
        required:true,
        default: "basic"
    },
    verified:{
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});


loginSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = mongoose.model("mytable", loginSchema);
