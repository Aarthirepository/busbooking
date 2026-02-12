const express = require('express')
const db = require('./utils/db-connection')
const busbookingModel = require('./models/busbooking')

const userRoutes =require('./routes/userRoutes')
const bookingRoutes = require('./routes/bookingRoutes')
const busRoutes = require("./routes/busRoutes");
const app  = express()

app.use(express.json());



app.get("/", (req, res) => res.send("Hello World"));

app.use('/user', userRoutes)
app.use('/booking', bookingRoutes)
app.use('/buses', busRoutes)

 
db.sync({ force: true })
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is connected");
    });
  })
  .catch((err) => {
    console.log(err);
  });
