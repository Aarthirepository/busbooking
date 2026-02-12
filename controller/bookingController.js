const db = require("../utils/db-connection");
const {Bookings,Users} = require("../models");


// Add a booking
const addBus = async (req, res) => {
  try {
    const { seatNumber, userId, busId } = req.body;

    if (!seatNumber || !userId || !busId) {
      return res.status(400).send("seatNumber, userId, and busId are required");
    }

    const booking = await Bookings.create({ seatNumber, userId, busId });

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

// Retrieve available seats for a bus
const retrieveAvailableSeats = async (req, res) => {
  try {
    const { busId } = req.params;
    const totalSeats = 50;

    const bookedSeats = await Bookings.count({ where: { busId } });
    const availableSeats = totalSeats - bookedSeats;

    res.status(200).json({
      busId,
      totalSeats,
      bookedSeats,
      availableSeats,
      status: availableSeats > 10 ? "Seats available" : "Low seat availability",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// const getBusBookings = async (req, res) => {
//   try {
//     const userId = req.params.id;

//     const bookings = await Bookings.findAll({
//       where: { userId }, // if userId matches → fetch records
//       include: {
//         model: Bus,
//         attributes: ["busNumber"],
//       },
//     });

//     res.status(200).json(bookings);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


module.exports = {
  addBus,
  retrieveAvailableSeats

};
