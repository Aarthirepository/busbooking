const db = require("../utils/db-connection");

const { Bookings, Bus,Users} = require("../models"); // import Bookings and Bus for relations

// Add a new user
const addEntries = async (req, res) => {
  try {
    const { email, name } = req.body;

    if (!email || !name) {
      return res.status(400).json({
        message: "email and name are required",
      });
    }

    const user = await Users.create({ email, name });

    console.log("User inserted", user.id);

    res.status(201).json({
      message: `User ${name} with ${email} added successfully`,
      data: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    console.log("User details retrieved");
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};


// NEW: Get all bookings for a specific user, including bus details
const getUserBookings = async (req, res) => {
  try {
    const userId= req.params.id;

    const bookings = await Bookings.findAll({
      where: { userId },
      attributes: ["id", "seatNumber"],
      include: [
        {
          model: Bus,
          attributes: ["busNumber"],
        },
      ],
    });

    res.status(200).json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// NEW: Get all bookings for a specific user with bus details

module.exports = {
  addEntries,
  getUsers,
  getUserBookings, // export the new function
};
