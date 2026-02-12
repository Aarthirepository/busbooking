const express = require('express')

const userController= require('../controller/userController')
const bookingController = require("../controller/bookingController");
const router = express.Router()

router.post('/add', userController.addEntries )

router.get('/get', userController.getUsers)

router.get("/:id/bookings", userController.getUserBookings);

module.exports = router