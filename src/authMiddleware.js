const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {

    const token = req.cookies.jwt;
    
    //check json web token exists and is verified
    if(token) {
        jwt.verify(token, 'secret123', (err, decodedToken) => {
          if(err) {
              console.log(err.message);
              res.redirect('localhost:3000/app/login')
          } else {
              console.log(decodedToken);
              next()
          }    
        })
    }
    else {
        res.redirect('localhost:3000/app/login')
    }
}

module.exports =  { requireAuth };