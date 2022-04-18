const cl = (TheThingYouWantToConsoleLog) => {console.log(TheThingYouWantToConsoleLog)}
const express = require("express");
const cors = require("cors");
const CupsFile = require('./Cups.json')
const app = express();
app.use(cors());
app.use(express.json());// When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",];
  
  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];


  res.status(200).send(randomCompliment);
  
}
); //original get
app.get("/api/inspire", (required, res) => {
          let InspireingThing = ['You Did This Part Well', 'Im Glad you made it this far' , 
          'Nothing could be said', `Youve Come this far you can go further` , `Goodluck`, 
          `Goodluck with the rest with the rest of this project lol`]
          let rN = Math.floor(Math.random() * InspireingThing.length)
          res.status(200).send(InspireingThing[rN])
}
) // new get
app.get('/api/Cups', (require, res) => {

  
 res.status(200).send(CupsFile)
}) //3rd get
AddingCups  = (req, res) => {
  let {name, HasStraw, radius, length , color,id} = req.body
  let newCup = {
    name,
    HasStraw,
    length,
    radius,
    color,
    id
    
  }
  cl(newCup)
CupsFile.push(newCup)

res.status(200).send(CupsFile)
}
app.post('/api/CupAdd' , AddingCups)
//post completed 
app.delete(`/api/Cups/:id`, (req,res) => {
  const {id} = req.params
    CupsFile.splice(id ,1)
   //cl(`We've deleted the ${id} in the cupsfile list, which subtracts 
  //the new length by 1 so in you have to bring the server back  `)
    res.status(200).send(CupsFile)
    

}) // delete completed 


//Needs an edit 
app.listen(4000, () => console.log("Server running on 4000"));
