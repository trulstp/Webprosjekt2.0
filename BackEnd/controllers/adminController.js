const adminSchema = require("../models/adminSchema");
const { validationResult } = require("express-validator");

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



//* registers the user to the database where the admin will be able to admit or reject you to being able to log in
const register = async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        })
    }
    const emailExist = await adminSchema.findOne({email:req.body.email})
    if(emailExist){
        return res.status(400).send('email already exists')
    }
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

const findUser = async (request, response) => {
    try {
        const user = await adminSchema.find({ _id: request.params._id });
        response.status(200).json({ user });
    } catch (error) {
        response.json({ message: error });
    }
};

const deleteOne = async (request, response) => {
    try {
        await adminSchema.remove({ _id: request.params._id });
    } catch (err) {
        response.json({ message: err });
    }
};

module.exports = {
    register,
    getAll,
    findUser,
    deleteOne,
};
