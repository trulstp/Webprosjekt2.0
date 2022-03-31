const loginSchema = require('../models/loginSchema')
const jwt = require('jsonwebtoken')
const {check,validationResult} = require('express-validator')
const bcrypt = require('bcrypt')

const register = async (request, response) =>{
    const newPass = await bcrypt.hash(request.body.password, 10)
    const registeredUser = new loginSchema({
    userName:request.body.userName,
    email:request.body.email,
    password: newPass
    })    
    registeredUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
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
            const token = jwt.sign({
                userName:req.body.userName,
                mail:req.body.email
            }, 'secret123')
            return res.json({ status: 'ok', user: token})
        } else {
            return res.json({ status: 'error', user: false})
        }
}


module.exports = {
    register,
    login
}