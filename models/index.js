const Bookings = require("./busbooking");
const Users = require("./users");
const Payments = require("./payments");
const Bus = require("./bus");


// One User → Many Bookings
Users.hasMany(Bookings, { foreignKey: "userId" });
Bookings.belongsTo(Users, { foreignKey: "userId" });

// One Bus → Many Bookings
Bus.hasMany(Bookings, { foreignKey: "busId" });
Bookings.belongsTo(Bus, { foreignKey: "busId" });



module.exports = {
Users,
Bookings,
Payments,
Bus
};
