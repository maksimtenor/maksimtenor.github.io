let closed = document.getElementById("close");
let forma = document.getElementById("formahead");
let insta = document.getElementById("inst");
let dispForma = window.getComputedStyle(forma).getPropertyValue("display");

    closed.addEventListener("click",closez);
    insta.addEventListener("click",openz);


function closez() {
        forma.style.display = "none";
        console.log("Скрыл");
}
function openz() {
        forma.style.display = "block";
        console.log("Показал");
}

// Validation FORM 
