const db = require("../utils/db-connection");

const addBus = (req, res) => {
  const { seatnumber } = req.body;
  const insertQuery = "INSERT INTO bookings(id,seatnumber) VALUES (?)";

  db.execute(insertQuery, [ seatnumber], (err) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      //  connection.end();
      return;
    }
    console.log("Value has been inserted");
    res.status(200).send(`User  seatnumber ${seatnumber} is added`);
  });
};


const  retrieveAvailableSeats = (req,res)=>{
       const minseats= req.params.seats
       const total_seats = 50
       const  retrieveSeatQuery =`  SELECT (
        ${total_seats} - count(*)) AS available_seats
        from Bookings
        HAVING available_seats > ?`
       
   
  db.execute(retrieveSeatQuery, [minseats], (err,results)=>{
    if(err){
        return res.status(500).json({error:err.message})
    }
    return res.status(200).json(results)
  })
}
module.exports = {
  addBus,retrieveAvailableSeats
};
