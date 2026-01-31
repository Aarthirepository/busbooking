const {DataTypes} = require('sequelize')
const sequelize = require('../utils/db-connection')

const Users = sequelize.define("Users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Bookings = sequelize.define("Bookings", {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
    },

    seatNumber: {
        type:DataTypes.INTEGER,
        allowNull:false
    }
})


const Payments= sequelize.define("Payments",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
    },

    amountpaid:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },

    paymentstatus:{
        type:DataTypes.STRING,
        allowNull:false,
    }

})

module.exports= {
    Users,Bookings,Payments,
}
