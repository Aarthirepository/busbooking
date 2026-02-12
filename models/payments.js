const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db-connection");

const Payments = sequelize.define("Payments", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  amountpaid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  paymentstatus: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Payments
  

