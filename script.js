
  var clicks = 0
  var clicksToAdd = 1
  var scoreHeader = document.querySelector("#scoreHeader")
  var button = document.querySelector("#button")
  var buykidbtn1 = document.querySelector("#buykidbtn")
  button.addEventListener("click",()=>{
    clicks += clicksToAdd
    scoreHeader.textContent = clicks + " €"
  })