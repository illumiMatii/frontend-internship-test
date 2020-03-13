document.addEventListener("DOMContentLoaded", () =>{
    showBtn.addEventListener("click", () =>{
        loginForm.style.display = "block";
        showBtn.style.display = "none";  
    });

    loginForm.addEventListener("click", (e) => closeForm(e));
    submit.addEventListener("click", (e) => checkValidation(e));
});


const showBtn = document.querySelector("#show-popup-form");
const loginForm = document.querySelector(".popup");
const closeBtn = document.querySelector("#closebtn");
const submit = document.querySelector("#submit");
const email = document.querySelector("#email");
const passwd = document.querySelector("#passwd");
const checkbox = document.querySelector("#checkbox");


function closeForm(e){
    if(e.target.closest("#closebtn") !== null){
        loginForm.style.display = "none";
        showBtn.style.display = "block";
    }
}

function checkValidation(e){
    e.preventDefault();

    if(email.value === "" & passwd.value === ""){
        alert("Fill required fields!");
    } else if(email.value === "" || email.value.includes("@") === false){
        alert("Please enter a valid email!");
    } else if(passwd.value.length < 8){
        alert("Your password should have at least 8 characters!");
    } else if(checkbox.checked === false){
        alert("Please accept terms & conditions!");
    }
}