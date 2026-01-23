const express = require('express')

const app  = express()


const mysql= require('mysql2')


const connection = mysql.createConnection({
   host:"localhost",
   user :'root',
   password:"Time2Win",
   database:"testdb"
}) 


connection.connect( (err)=>{
    if(err){
        console.log(err)
    }
    console.log("Connection has been created")
})

const createUsersQuery = `create table Users(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20),
  email  VARCHAR(20)
)`

connection.execute(createUsersQuery, (err)=>{
  if(err){
    console.log(err)
    connection.end()
    return
  }
  console.log(" Users Table is created")
})

const createBookingQuery = `create table Bookings(
  id INT AUTO_INCREMENT PRIMARY KEY,
  seatnumber INT
)`


connection.execute(createBookingQuery, (err)=>{
   if(err){
     console.log(err)
     connection.end()
     return
   }
   console.log("Booking Table is created")
})


const createPayementQuery = `create table Payments(
   id INT AUTO_INCREMENT PRIMARY KEY,
   amountpaid  INT,
   paymentstatus VARCHAR(20)
)`

connection.execute(createPayementQuery,(err)=>{
   if(err){
     console.log(err)
     connection.end()
     return
   }
   console.log("Payments table is created")
})

app.get('/', (req,res)=>{
    res.send("Hello World")
})


 app.listen(3000, ()=>{
    console.log("Server is Running")
 })

