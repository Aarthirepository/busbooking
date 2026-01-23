const express = require('express')
const db = require('./utils/db-connection')

const userRoutes =require('./routes/userRoutes')
const busRoutes = require('./routes/busRouter')
const app  = express()

app.use(express.json());



app.get("/", (req, res) => res.send("Hello World"));

app.use('/user', userRoutes)
app.use('/buses', busRoutes)


 app.listen(3000, ()=>{
    console.log("Server is Running")
 })

