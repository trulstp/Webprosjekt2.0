const { response } = require('express')
const express = require('express')
const router = express.Router()
const {register, getAll} = require('../controllers/adminController')


router.post('/', register)

router.get('/', getAll)


module.exports = router
