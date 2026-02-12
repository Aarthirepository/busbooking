const { Bus,Bookings,Users } = require("../models");

const addBus = async (req, res) => {
  try {
    const { busNumber, totalSeats, availableSeats } = req.body;

    if (!busNumber || !totalSeats || !availableSeats) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const bus = await Bus.create({
      busNumber,
      totalSeats,
      availableSeats,
    });

    res.status(201).json({ message: "Bus added successfully", data: bus });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
const getBusBookings = async (req, res) => {
  try {
    const busId = req.params.id;

    const bookings = await Bookings.findAll({
      where: { busId },
      attributes: ["id", "seatNumber"],
      include: {
        model: Users,
        attributes: ["name", "email"],
      },
    });

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addBus ,getBusBookings}; // export this separately
