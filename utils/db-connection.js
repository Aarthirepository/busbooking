const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Time2Win",
  database: "testdb",
  multipleStatements: true,
  charset: "utf8mb4",
  connectTimeout: 10000,
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connection has been created");
});

const createUsersQuery = `CREATE TABLE IF NOT EXISTS Users(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20),
  email VARCHAR(20)
)`;

const createBookingQuery = `CREATE TABLE IF NOT EXISTS Bookings(
  id INT AUTO_INCREMENT PRIMARY KEY,
  seatnumber INT
)`;

const createPaymentQuery = `CREATE TABLE IF NOT EXISTS Payments(
  id INT AUTO_INCREMENT PRIMARY KEY,
  amountpaid INT,
  paymentstatus VARCHAR(20)
)`;

// Run queries sequentially to avoid malformed packet
connection.query(createUsersQuery, (err) => {
  if (err) {
    console.log(err);
    connection.end();
    return;
  }
  console.log("Users Table is created");

  connection.query(createBookingQuery, (err) => {
    if (err) {
      console.log(err);
      connection.end();
      return;
    }
    console.log("Booking Table is created");

    connection.query(createPaymentQuery, (err) => {
      if (err) {
        console.log(err);
        connection.end();
        return;
      }
      console.log("Payments Table is created");
    });
  });
});

module.exports = connection;
