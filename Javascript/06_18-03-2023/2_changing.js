function changebg(){
    let menu_fixed = document.querySelector(".header");
    let current = window.scrollY;

    if(current > 0){
        menu_fixed.classList.add("header-fixed");
    }else{
        menu_fixed.classList.remove("header-fixed");
    }
}
window.addEventListener("scroll",changebg);