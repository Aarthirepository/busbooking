const express = require('express')

const userController= require('../controller/userController')
const router = express.Router()

router.post('/add', userController.addEntries )
router.get('/get', userController.getUsers)

module.exports = router