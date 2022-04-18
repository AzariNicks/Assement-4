globalID = 2

const cl = (TheThingYouWantToConsoleLog) => {console.log(TheThingYouWantToConsoleLog)}
document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };// orginal get 

InspireButton = document.getElementById('inspire')
let x = 0
let PartO = document.getElementById('wholePage')

InspireButton.addEventListener('click' , () => {
     axios.get("http://localhost:4000/api/inspire/")
                .then(function (response) 
                {
                     window.alert((response.data))
                
                } 
                )
}

)

const RemovingContent = () => {while(CupsStuff.lastChild != null){CupsStuff.removeChild(CupsStuff.lastChild)}} /* Deletes Prevous content w/o .delete lol*/
const AddDelReplace = (res,num) => { let text = document.createElement("div") 
text.innerHTML = `<h2>Name: ${res.data[num].name}  <button id = 'Trash${num}canbutton' TrashCanButton>Trash</h2>
               <p>Has a Straw? ${res.data[num].HasStraw} </p>
               <p>How fat is this cup? ${res.data[num].radius} </p>
               <p>How long is this cup ${res.data[num].length} inches </p>
               <p>Color: ${res.data[num].color} </p>`
               CupsStuff.appendChild(text)
               NewButtons = document.getElementById(`Trash${num}canbutton`)
               NewButtons.addEventListener('click', (e) =>{e.preventDefault()
                    cl(`working on ${num}`)
                    axios.delete(`http://localhost:4000/api/Cups/${num}`)
                    .then(res => {
                    RemovingContent()
                    for(let i = 0; i < res.data.length;i++){AddDelReplace(res, i)}
                    cl(res.data)
                     
                })

     
     
     
     
     
     
     
     } 
               )
          
          } /*Creates The content, Deletes previois content then, Adds the new connetent with more content */
let CupsStuff = document.getElementById('CupStuff') 
let correct = document.getElementById('Correct')
const password = document.getElementById('PswInput')
const SubmitButton = document.getElementById('StButton')
SubmitButton.addEventListener('click', (e) => {e.preventDefault()
     
     if((password.value).toLowerCase() === 'joely'){ 
          axios.get(`http://localhost:4000/api/Cups/`)
               .then((res, req) => {
                  RemovingContent()
              for(let i = 0; i < res.data.length;i++){AddDelReplace(res, i)}
          }) 
           cl('thingshappen')
     correct.textContent = ''
   PartO.classList.add('clear')}
     else if((password.value).toLowerCase() != 'joely'){x = x + 1
     
     if(x === 1) {correct.textContent = 'Wrong Password'}
     else if(x > 1 && x <= 5){correct.textContent = `You've entered the wrong password ${x} times`}
     else if(x > 5 && x < 11){correct.textContent = `${x} Too Many ATTEMPTS`}
     else if(x === 11){correct.textContent = "Okay Ill put it for you" , password.value = 'Joely'}
     }
     }
) /* Lots of effort, a little logic to make it to where only joely brings up new content */


const Addbutton = document.getElementById('AddButton')
Addbutton.addEventListener('click', e => {
     e.preventDefault()
     let nCN = document.getElementById('CupName').value
      if(document.getElementById('HasStraw').value === 'on'){nCS = true}else(nCS = false)
     let nCC = document.getElementById('Color').value
     let nCR = document.getElementById('Radius').value
     let nCL = document.getElementById('Length').value
     globalID = globalID + 1 

     const newCup = {
          name : nCN,
          HasStraw : nCS,
          radius : nCR,
          length:nCL,
          color: nCC,
          id: globalID
          
}
axios
.post('http://localhost:4000/api/CupAdd',newCup)
.then(res => {console.log(res.data)
     RemovingContent()
     for(let i = 0; i < res.data.length;i++){AddDelReplace(res, i)}


})
 
cl(newCup)

})