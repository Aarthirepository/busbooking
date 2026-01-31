const express = require('express')
const db = require('./utils/db-connection')
const busbookingModel = require('./models/busbooking')

const userRoutes =require('./routes/userRoutes')
const busRoutes = require('./routes/busRouter')
const app  = express()

app.use(express.json());



app.get("/", (req, res) => res.send("Hello World"));

app.use('/user', userRoutes)
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
