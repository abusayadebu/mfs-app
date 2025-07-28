// Add money main button
document.getElementById("add-money-main")
        .addEventListener("click", function(e){
            e.preventDefault();
            const addMoneyForm = document.getElementById("add-money-form");
            addMoneyForm.style.display = "block";
})






// button add money in the form
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