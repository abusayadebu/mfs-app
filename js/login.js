document.getElementById("btn-login")
        .addEventListener("click", function(event){
            event.preventDefault();
            console.log("login button clicked")

            const phoneNumberValue = document.getElementById("phoneNumber").value;
            console.log(phoneNumberValue)
})
