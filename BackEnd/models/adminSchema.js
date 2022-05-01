const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const adminSchema = new mongoose.Schema({
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
    },
    degree: {
        type: String,
    },
    phonenr: {
        type: Number,
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minlength: [6, "Minimum length is 6 characters"],
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

adminSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = mongoose.model("adminTable", adminSchema);
