const { response } = require('express')
const express = require('express')
const router = express.Router()
const {register, getAll} = require('../controllers/adminController')


router.post('/register', register)

router.get('/list', getAll)


module.exports = router
