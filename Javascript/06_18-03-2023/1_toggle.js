let disp_btn = document.querySelector(".disp-btn");
let nav = document.querySelector(".navigations");
let close_btn = document.querySelector(".btn-close");

disp_btn.addEventListener("click",function(){
    nav.classList.add("show_menu");
})
 
close_btn.addEventListener("click",function(){
    nav.classList.remove("show_menu")
})