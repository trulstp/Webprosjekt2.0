const { response } = require('express')
const express = require('express')
const router = express.Router()
const {deleteExam, registerExam, findTag, getAll, updateExam} = require('../controllers/controller2')

router.post('/', registerExam)

router.get('/list', getAll)

router.get('/tag', findTag)

router.delete('/_id', deleteExam)

router.patch('/:_id', updateExam)

module.exports = router