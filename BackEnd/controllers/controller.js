const loginSchema = require('../models/loginSchema')
const jwt = require('jsonwebtoken')
const {check,validationResult} = require('express-validator')
const bcrypt = require('bcrypt')

    //handle errors
    const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '' };

    //duplicate error code
    if(err.code === 11000) {
        errors.email = 'that email is already registered';
        return errors;
    }

    // validation errors
    if (err.message.includes('mytable validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors;
}
    const maxAge = 3 * 24 * 60 *60;
    const createToken = (id) => {
        return jwt.sign({ id }, 'secret123', {
            expiresIn: maxAge
        })
    }

const register = async (req, res) =>{
    const registeredUser = new loginSchema({
    name:req.body.name,
    email:req.body.email,
    university:req.body.university,
    phonenr:req.body.phonenr,
    password:req.body.password
    })    
    registeredUser.save()
    .then(data =>{
        res.json(data)
    })
    .catch(err =>{ 
        const errors = handleErrors(err);
        res.status(400).json({ errors })
    })
}

const login = async (req, res) => {
       const user = await loginSchema.findOne({
        email: req.body.email,
        })
        if(!user) {
            return { status: 'error', error: 'Invalid login'}
    }
        const isPassValid = await bcrypt.compare(req.body.password, user.password)
        if(isPassValid){
            const token = createToken(user._id); 
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000})
            res.status(201).json({ status: 'ok', user: user._id})
        } else {
            return res.json({ status: 'error', user: false})
        }
}


module.exports = {
    register,
    login
}