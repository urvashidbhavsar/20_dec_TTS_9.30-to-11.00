function changebg(){
    let header = document.querySelector("header")
    let current = window.scrollY;
    if(current > 0){
        header.classList.add("header-fixed")
    }else{
        header.classList.remove("header-fixed")
    }
}
window.addEventListener("scroll",changebg)