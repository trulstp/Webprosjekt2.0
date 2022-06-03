const loginSchema = require("../models/loginSchema");
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

//* register user to the database
const register = async (req, res) => {
    const registeredUser = new loginSchema({
        name: req.body.name,
        email: req.body.email,
        phonenr: req.body.phonenr,
        university: req.body.university,
        degree: req.body.degree,
        password: req.body.password,
        description: "",
        role:'Basic',
        verified:false
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

//* login to the database, check if user exist and if it has been verified
const login = async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        })
    }
    const user = await loginSchema.findOne({
        email: req.body.email
    });
    if (!user) {
        return res.status(401).send('user doesnt exist');
    }
    if(!user.verified){
        return res.status(400).json({
          errors: [{ msg: "User has not been verified yet, please wait for the admin to verify" }],
        });
      }
    console.log('found user')
    const isPassValid = await bcrypt.compare(req.body.password, user.password);
    if (isPassValid) {
        const token = jwt.sign(
            {id: user.id, name: user.name, role: user.role, verified: user.verified},
            process.env.ACCESS_TOKEN, {
                expiresIn: 3600,
            }
            );
        res.header("auth", token).send(token);
    } else {
        return res.json({ status: "error", user: false });
    }
};

const getAll = async (request, response) => {
    try {
        const showUsers = await loginSchema.find();
        return response.json(showUsers);
    } catch (error) {
        return response.json({ message: error });
    }
};

const getUnverified = async (req, res) => {
    try {
        const unverified = await loginSchema.find({ "verified": false });
        return res.json(unverified);
    } catch (error) {
        return res.json({message: error});
    }
}

const findUser = async (request, response) => {
    try {
        const user = await loginSchema.find({ _id: request.params._id });
        response.status(200).json({ user });
    } catch (error) {
        response.json({ message: error });
    }
};

const updateUser = async (request, response) => {
    try {
        const _id = request.params;
        const updateUser = await loginSchema.findOneAndUpdate(_id, request.body, {
            new: true,
        });
        response.send(updateUser);
    } catch (e) {
        response.status(404).send(e);
    }
};


const verifyUser = async (req,res) => {
    try{
        const user = await loginSchema.findByIdAndUpdate(
            { _id: req.params.id },
            {
                verified: true
            }
        );
        res.json(user);
    } catch(error) {
        console.log(error.message);
        res.status(404).json("Id not found"); 
    }
};


const deleteOne = async (request, response) => {
    try {
        await loginSchema.remove({ _id: request.params._id });
    } catch (err) {
        response.json({ message: err });
    }
};

module.exports = {
    register,
    login,
    getAll,
    findUser,
    updateUser,
    verifyUser,
    getUnverified,
    deleteOne,
};
