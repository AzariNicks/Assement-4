const cl = (TheThingYouWantToConsoleLog) => {console.log(TheThingYouWantToConsoleLog)}




document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

InspireButton = document.getElementById('inspire')
Congrats = document.getElementById('Congrats')
MakeYourOwn = document.getElementById('Diy')

InspireButton.addEventListener('click' , () => {
     axios.get("http://localhost:4000/api/inspire/")
                .then(function (response) 
                {
                     window.alert((response.data))
                
                } 
                )
}
)

Congrats.addEventListener('click', () => {
    axios.get('http://localhost:4000/api/Congrats/')
    .then(function (response) {

    window.alert(response.data)
         }
    )


})
MakeYourOwn.addEventListener('click', () => {
    axios.get('http://localhost:4000/api/Diy/')
    .then(function (response) {

    window.alert(response.data)
         }
    )


})


