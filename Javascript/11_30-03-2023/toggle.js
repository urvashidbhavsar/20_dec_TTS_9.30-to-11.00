// toggle menubar

var togglebtn = document.querySelector(".toggle-menu")
var navbar = document.querySelector(".nav")
var icon = document.querySelector(".fa-bars");

togglebtn.addEventListener("click",function(){
    navbar.classList.toggle("nav-change")
    if(navbar.classList.contains("nav-change") == true){
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-xmark");
    }else{
        icon.classList.remove("fa-xmark")
        icon.classList.add("fa-bars")
    }
});


// change menubar background color when it scroll
function changebg(){
    let header = document.querySelector("header");
    let current = window.scrollY;

    if(current > 0){
        header.classList.add("header-fixed")
    }else{
        header.classList.remove("header-fixed")
    }
}
window.addEventListener("scroll",changebg)