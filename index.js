//login button function
document.getElementById("loginButton").
addEventListener("click", function (e){
    e.preventDefault()
    const mobileNumber= 12345678910;
    const pinNumber = 1234;

    const mobileNumberValue = document.getElementById("mobile-number").value
    const MobileNumberValueConverted = parseInt(mobileNumberValue);

    const pinNumberValue = document.getElementById("digit-number").value
     const pinNumberValueConverted = parseInt(pinNumberValue);

     console.log(MobileNumberValueConverted, pinNumberValueConverted);


     if(MobileNumberValueConverted === mobileNumber & pinNumberValueConverted === pinNumber){
        window.location.href="./home.html"
    }else{
        alert("Invalid Credentials")
    }
})
