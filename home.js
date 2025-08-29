const validPins = 1234; // Example valid PIN for demonstration

// function  to get input value 
function getInputValueNumber(id) {
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)
    return inputFieldValueNumber;
}
function getInputValue(id){
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value
    return inputFieldValue;
}

// Function to get inner-text value
function getInnerTextValue(id) {
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    const elementValueNumber = parseInt(elementValue);
    return elementValueNumber;
}

// Function to set inner-text 
function setInnerTextValue(value){
 const availableBalanceElement = document.getElementById('available-balance')
    availableBalanceElement.innerText = value;
}



// Add Money Functionality
document.getElementById('add-money-btn').addEventListener("click", function (e) {
    e.preventDefault();
    // console.log('Add Money Button Clicked');
    const bank = getInputValue('bank');
    const accountNumber = document.getElementById('account-number').value;
    const amount = getInputValueNumber('add-amount');
    const pin = getInputValueNumber('add-pin');

    const availableBalance = getInnerTextValue('available-balance');
    

    if (accountNumber.length < 11) {
        alert('Please Enter a valid Account Number');
        return;
    }

    if (pin !== validPins) {
        alert('Please Enter a valid Pin');
        return;
    }

    const totalNewBalance = availableBalance + amount;
    setInnerTextValue(totalNewBalance);
    // document.getElementById('available-balance').innerText = totalNewBalance;
});

// Cash Out Functionality
document.getElementById('withdraw-btn').addEventListener("click", function (e) {
    e.preventDefault();
    const amount = getInputValueNumber('withdraw-amount');
    const accountNumber = document.getElementById('account-number').value;
    const pin = parseInt(document.getElementById('add-pin').value);

    const availableBalance = getInnerTextValue('available-balance');

    if (accountNumber.length < 11) {
        alert('Please Enter a valid Account Number');
        return;
    }
    if (pin !== validPins) {
        alert('Please Enter a valid Pin');
        return;
    }

    const totalNewBalance = availableBalance - amount;
    console.log(totalNewBalance);
    setInnerTextValue(totalNewBalance);
    // document.getElementById('available-balance').innerText = totalNewBalance;
});



// Toggling features 

document.getElementById('add-btn').addEventListener("click", function () {
    document.getElementById("cashout-parent").style.display = "none";
    document.getElementById("add-money-parent").style.display = "block";


    // const formBtn = document.grtElementByClassName('form-btn');
    // for(const btn of formBtn){
    //     btn.classList.remove ("border-[#0874f2]", "bg-[#0874f20d]"); 
    // }

    // document.getElementById('add-btn').classList.remove("border-gray-300");
    // document.getElementById('add-btn').classList.add("border-[#0874f2]", "bg-[#0874f20d]");


});

document.getElementById('cashout-btn').addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cashout-parent").style.display = "block";

});    