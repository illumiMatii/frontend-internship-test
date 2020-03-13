document.addEventListener("DOMContentLoaded", function(){
    showBtn.addEventListener("click", function(){
        loginForm.style.display = "block";
        showBtn.style.display = "none";  
    });

    loginForm.addEventListener("click", (e) =>{
        if(e.target.closest("#closebtn") !== null){
            loginForm.style.display = "none";
            showBtn.style.display = "block";
        }
    });
});


const showBtn = document.querySelector("#show-popup-form");
const loginForm = document.querySelector(".popup");
const closeBtn = document.querySelector("#closebtn");