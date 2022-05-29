const jwt = require('jsonwebtoken');
const loginSchema = require('jsonwebtoken')

const auth = async (req,res,next) => {
    const token = req.header('auth')
    if(!token){
        return res.status(401).send('Access denied')
    }
    try{
        const verified = jwt.verify(token,process.env.ACCESS_TOKEN)
        req.user = verified;
        next()
    }catch(err){
        res.status(400).send('Invalid token')
    }
}

function authRole(role) {
    return (req,res,next) => {
        if(req.user.role !== role){
            res.status(401)
            return res.send('you have no permission')
        }
        next()
    }
}

module.exports = {auth, authRole};