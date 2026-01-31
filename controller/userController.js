const db = require("../utils/db-connection");
const {Users} = require('../models/busbooking')

const addEntries = async (req, res) => {
  try {
    const { email, name } = req.body;

    if (!email || !name) {
      return res.status(400).json({
        message: "email and name are required",
      });
    }

    const user = await Users.create({
      email,
      name,
    });

    console.log("User inserted", user.id);

    res.status(201).json({
      message: `User ${name} with ${email} added successfully`,
      data: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll();

    console.log("User details retrieved");

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  addEntries,
  getUsers,
};
