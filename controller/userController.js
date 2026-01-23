const db = require("../utils/db-connection");


     const addEntries = (req, res) => {
       const { email, name } = req.body;
       const insertQuery = "INSERT INTO users(email,name) VALUES (?,?)";

       db.execute(insertQuery, [email, name], (err) => {
         if (err) {
           console.log(err.message);
           res.status(500).send(err.message);
         //  connection.end();
           return;
         }
         console.log("Value has been inserted");
         res.status(200).send(`User ${name} and ${email} is added`);
       });
     };

     
const getUsers = (req, res) => {
  const retrieveQuery = "SELECT * FROM  users";
  db.execute(retrieveQuery, (err, results)=>{
     if(err){
        console.log(err.message)
        res.status(500).send((err.message))
        return
     }
     console.log("User details retrieved")
     res.status(200).json(results)
  })
};



module.exports= {
    addEntries, getUsers
}