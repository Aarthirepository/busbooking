const express = require('express')
const bookingController = require('../controller/bookingController')

const router = express.Router()



router.post("/add", bookingController.addBus)
router.get("/available-seats/:busId", bookingController.retrieveAvailableSeats);
//router.get("/:id/bookings", bookingController.getBusBookings);
module.exports = router