document.getElementById("add-money-button").addEventListener("click", function(e){
e.preventDefault()
//console.log("added to add money lissener")
const bank = document.getElementById("bank").value
const amountNumber = document.getElementById("acount-number").value
const addAmount = parseInt(document.getElementById("add-amount").value)
const pinNumber = document.getElementById("pin-number").value

const availableBalance = parseInt(document.getElementById("available-balance").innerText)

//console.log(availableBalance)
if(amountNumber.length < 11){
    alert("please provide valid account number");
    return;
}

const newAvailableBalance = addAmount + availableBalance;

document.getElementById("available-balance").innerText=newAvailableBalance
})