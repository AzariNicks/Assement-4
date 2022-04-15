const cl = (TheThingYouWantToConsoleLog) => {console.log(TheThingYouWantToConsoleLog)}

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());// When we want to be able to accept JSON.





app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];
  
  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];


  res.status(200).send(randomCompliment);
  
});


 
app.get("/api/inspire", (required, res) => {
          let InspireingThing = ['You Did This Part Well', 'Im Glad you made it this far' , 
          'Nothing could be said', `Youve Come this far you can go further` , `Goodluck`, 
          `Goodluck with the rest with the rest of this project lol`]
          let rN = Math.floor(Math.random() * InspireingThing.length)
          res.status(200).send(InspireingThing[rN])
}
)

app.get("/api/Congrats", (required, res) => {
  let InspireingThing = ['You Did This Part Well', 'Im Glad you made it this far' , 
  'Nothing could be said', `Youve Come this far you can go further` , `Goodluck`, 
  `Goodluck with the rest with the rest of this project lol`]
  let rN = Math.floor(Math.random() * InspireingThing.length)
  res.status(200).send(InspireingThing[rN])


  
}
)

app.get("/api/Diy", (required, res) => {
  let InspireingThing = ['You Did This Part Well', 'Im Glad you made it this far' , 
  'Nothing could be said', `Youve Come this far you can go further` , `Goodluck`, 
  `Goodluck with the rest with the rest of this project lol`]
  let rN = Math.floor(Math.random() * InspireingThing.length)
  res.status(200).send(InspireingThing[rN])


  
}
)









app.listen(4000, () => console.log("Server running on 4000"));
