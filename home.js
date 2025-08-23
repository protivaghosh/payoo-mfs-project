document.getElementById("add-money-button").addEventListener("click", function(e){
e.preventDefault()
console.log("added to add money lissener")
const bank = document.getElementById("bank").value
const amountNumber = document.getElementById("acount-number").value
const addAmount = parseInt(document.getElementById("add-amount").value)
const pinNumber = document.getElementById("pin-number").value
console.log(bank, amountNumber, addAmount, pinNumber);
})