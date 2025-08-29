const validPins = 1234; // Example valid PIN for demonstration

// Add Money Functionality
document.getElementById('add-money-btn').addEventListener("click", function (e) {
    e.preventDefault();
    console.log('Add Money Button Clicked');
    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const amount = parseInt(document.getElementById('add-amount').value);
    const pin = parseInt(document.getElementById('add-pin').value);

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    console.log(availableBalance);

    if (accountNumber.length < 11) {
        alert('Please Enter a valid Account Number');
        return;
    }

    if (pin !== validPins) {
        alert('Please Enter a valid Pin');
        return;
    }

    const totalNewBalance = availableBalance + amount;
    document.getElementById('available-balance').innerText = totalNewBalance;
});

// Cash Out Functionality
document.getElementById('withdraw-btn').addEventListener("click", function (e) {
    e.preventDefault();
    const amount = parseInt(document.getElementById('withdraw-amount').value);
    const accountNumber = document.getElementById('account-number').value;
    const pin = parseInt(document.getElementById('add-pin').value);

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

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
    document.getElementById('available-balance').innerText = totalNewBalance;



});



// Toggling features 

document.getElementById('add-btn').addEventListener("click", function () {
    document.getElementById("cashout-parent").style.display = "none";
    document.getElementById("add-money-parent").style.display = "block";
});

document.getElementById('cashout-btn').addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cashout-parent").style.display = "block";

});    