const adminSchema = require("../models/adminSchema");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

//handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: "", password: "" };

    //duplicate error code
    if (err.code === 11000) {
        errors.email = "that email is already registered";
        return errors;
    }

    // validation errors
    if (err.message.includes("mytable validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors;
};
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, "secret123", {
        expiresIn: maxAge,
    });
};

const register = async (req, res) => {
    const registeredUser = new adminSchema({
        name: req.body.name,
        email: req.body.email,
        phonenr: req.body.phonenr,
        university: req.body.university,
        degree: req.body.degree,
        password: req.body.password,
    });
    registeredUser
        .save()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            const errors = handleErrors(err);
            res.status(400).json({ errors });
        });
};

const getAll = async (request, response) => {
    try {
        const showApplicants = await adminSchema.find();
        return response.json(showApplicants);
    } catch (error) {
        return response.json({ message: error });
    }
};

module.exports = {
    register,
    getAll,
};
