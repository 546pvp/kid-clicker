
  var clicks = 0
  var scoreHeader = document.querySelector("#scoreHeader")
  var button = document.querySelector("#button")
  button.addEventListener("click",()=>{
    clicks++
    scoreHeader.textContent = clicks + " €"
    if(clicks > 30){
      
    }
  })