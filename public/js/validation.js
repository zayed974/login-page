const form = document.querySelector(".form");
const email = document.querySelector("#email");
const password = document.querySelector("#password-field");
const errDisplay = document.getElementById("error");
const pswd = "zayed123";
const emailid = "mzayed9745@gmail.com"
form.addEventListener("submit", onSubmit);

function onSubmit(event) {
    if (email.value === "" || password.value === "" ) {
        event.preventDefault();
        errDisplay.innerHTML = "Please Enter valid email and password !";
       }
    else if(password.value !== pswd || email.value !== emailid){
        event.preventDefault();
        errDisplay.innerHTML = "Incorrect email or password !";
       }
    }

