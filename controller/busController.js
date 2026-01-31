const db = require("../utils/db-connection");
const {Bookings} = require('../models/busbooking')




const addBus = async (req, res) => {
  try {
    const { seatnumber } = req.body;

    if (!seatnumber) {
      return res.status(400).send("seatnumber is required");
    }

    const booking = await Bookings.create({
      seatNumber: seatnumber,
    });

    console.log("Booking added ✅", booking.id);

    res.status(201).json({
      message: "Seat added successfully",
      data: booking,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error adding booking");
  }
};
const retrieveAvailableSeats = async (req, res) => {
  try {
    const totalSeats = 50;

    const bookedSeats = await Bookings.count();

    const availableSeats = totalSeats - bookedSeats;

    if (availableSeats > 10) {
      return res.status(200).json({
        availableSeats,
        status: "Seats available",
      });
    }

    return res.status(200).json({
      availableSeats,
      status: "Low seat availability",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports = {
  addBus,retrieveAvailableSeats
};
