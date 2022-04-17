

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


AddingConted = (res,num) => { let text = document.createElement("div")
text.innerHTML = `<h2>Name: ${res.data[num].name}</h2>
               <p>Has a Straw? ${res.data[num].HasStraw} </p>
               <p>How fat is this cup? ${res.data[num].radius} </p>
               <p>How long is this cup ${res.data[num].length} inches </p>
               <p>Color: ${res.data[num].color} </p>`
               CupsStuff.appendChild(Text)}
let CupsStuff = document.getElementById('CupStuff')
// New Advanced Get 
let correct = document.getElementById('Correct')
correct.textContent
const password = document.getElementById('PswInput')
const SubmitButton = document.getElementById('StButton')
SubmitButton.addEventListener('click', (e) => {e.preventDefault()
     
     if((password.value).toLowerCase() === 'joely'){
          axios.get(`http://localhost:4000/api/Cups/`)
               .then((res, req) => {console.log(res.data)
                    console.log(res.data[0])
               console.log(res.data.length)
               console.log(text.innerHTML)
               for(let i = 0; i < res.data.length;i++){AddingConted(res, i)}
    

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


)