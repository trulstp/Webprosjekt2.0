const { response } = require('express')
const express = require('express')
const router = express.Router()
const {deleteExam, registerExam, findTag, getAll, updateExam, findExam} = require('../controllers/examController')

router.post('/', registerExam)

router.get('/', getAll)

router.get('/:tag', findTag)

router.delete('/:_id', deleteExam)

router.patch('/:_id', updateExam)

router.get('/_id', findExam)

module.exports = router