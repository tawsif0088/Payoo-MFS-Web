// Login button functionalaties
document.getElementById("loginButton").addEventListener("click", function (e){

    e.preventDefault()
    const mobileNUmber = 12345678910
    const pinNumber = 1234

    const mobileNumberValue = document.getElementById("mobile-number").value
    const mobileNumberValueConverted = parseInt(mobileNumberValue)

    const pinNumberValue = document.getElementById("pin-number").value
    const pinNumberValueConverted = parseInt(pinNumberValue)

    console.log(mobileNumberValueConverted, pinNumberValueConverted)
    if (mobileNumberValueConverted === mobileNUmber && pinNumberValueConverted === pinNumber) {
        window.location.href = "./home.html"
    } else {
        alert("Invalid Mobile Number or Pin Number")
    }
});