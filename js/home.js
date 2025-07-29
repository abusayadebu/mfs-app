// Add money main button
document.getElementById("add-money-main")
        .addEventListener("click", function(e){
            const addMoneyForm = document.getElementById("add-money-form");
            addMoneyForm.classList.remove("hidden");

            const hideCashOutForm = document.getElementById("cash-out-form");
            hideCashOutForm.classList.add("hidden");
})


// cashout main button
document.getElementById("cash-out-btn")
        .addEventListener("click", function(e){
            e.preventDefault();
            const cashoutmoneyForm = document.getElementById("cash-out-form");
            cashoutmoneyForm.classList.remove("hidden");

            const hideAddMoneyForm = document.getElementById("add-money-form");
            hideAddMoneyForm.classList.add("hidden");
})




// button add money in the  add-money form
document.getElementById("add-money").addEventListener("click", function(event){
    event.preventDefault();
    const amountValue = document.getElementById("amount-value").value;
    const amountValueNumber = Number(amountValue);

    const pinNumber = document.getElementById("pin-number").value;
    const currentBalence = document.getElementById("current-balance").innerText;
    const currentBalanceNumber = Number(currentBalence);

    // validation here---
    if(pinNumber == 1234){
        const takeBalance = currentBalanceNumber + amountValueNumber;
        document.getElementById("current-balance").innerText = takeBalance; //updated balance show here
    }
    else{
        alert("Credencial wrong")
    }

})


// Button cashout in the cashout form---

document.getElementById("cash-out").addEventListener("click", function(e){
    e.preventDefault();
    
    const currentBalance = document.getElementById("current-balance").innerText;
    const cBalancenumber = Number(currentBalance);
    const cashOutPin = document.getElementById("cashout-pin").value;
    const cashOutValue = document.getElementById("cashout-value").value;
    const cashOutNumber =Number(cashOutValue);

    if(cashOutPin == 1234){
        const makeCashoutAmount = cashOutNumber - cBalancenumber;
        document.getElementById("current-balance").innerText = makeCashoutAmount;
    }
    else{
        alert("Credencials are wrong");
    }

    }
)
