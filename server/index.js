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
// needs a delete /* Thinking about making the delete button for all the stuff up there, so like it deletes the compliment functionality and changes the page completely  */ 
// need a put 
// need a post 
app.get('/api/Cups', (require, res) => {

  
 res.status(200).send(CupsFile)
})




AddingCups  = (req, res) => {
  let {name, HasStraw, length , color} = req.body
  let newCup = {
    name,
    HasStraw,
    length,
    color,
    Id
  }
CupsFile.push(newCup)
res.status(200).send(CupsFile)
}
app.post('/api/Cups' , AddingCups)

app.delete(`/api/Cups/:id`, (req,res) => {
  const {id} = req.params
  let index = CupsFile.findIndex(cups => cups.id === +id)
  CupsFile.splice(index,1)
  cl(CupsFile, `We Trashed ${id}`)
  res.status(200).send(CupsFile)

})


app.listen(4000, () => console.log("Server running on 4000"));
