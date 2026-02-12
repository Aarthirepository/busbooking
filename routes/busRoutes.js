console.log("Bus routes loaded");

const express = require("express");
const router = express.Router();
const busController = require("../controller/busController");
const bookingController = require("../controller/bookingController");

router.post("/add", busController.addBus);
router.get("/:id/bookings", busController.getBusBookings);
module.exports = router;
