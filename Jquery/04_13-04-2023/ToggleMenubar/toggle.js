// toggle menubar

// var togglebtn = document.querySelector(".toggle-menu")
// var navbar = document.querySelector(".nav")
// var icon = document.querySelector(".fa-bars");

// togglebtn.addEventListener("click",function(){
//     navbar.classList.toggle("nav-change")
//     if(navbar.classList.contains("nav-change") == true){
//         icon.classList.remove("fa-bars")
//         icon.classList.add("fa-xmark");
//     }else{
//         icon.classList.remove("fa-xmark")
//         icon.classList.add("fa-bars")
//     }
// });

$(document).ready(function(){
    $icon = $(".fa-bars");   
    $navbar = $(".nav")
    $(".toggle-menu").click(function(){
        $(".nav").toggleClass("nav-change")
        // contain() = js where hasClass() = jquery
        if($navbar.hasClass("nav-change") == true){
                $icon.removeClass("fa-bars")
                $icon.addClass("fa-xmark");
        }else{
                $icon.removeClass("fa-xmark")
                $icon.addClass("fa-bars")
        }
    })
})

// change menubar background color when it scroll
// function changebg(){
//     let header = document.querySelector("header");
//     let current = window.scrollY;

//     if(current > 0){
//         header.classList.add("header-fixed")
//     }else{
//         header.classList.remove("header-fixed")
//     }
// }
// window.addEventListener("scroll",changebg)

$(document).ready(function(){
    $header = $("#topheader")
    $(window).scroll(function(){
        $current = $(this).scrollTop();
        if($current > 0){
             $header.addClass("header-fixed")
        }else{
            $header.removeClass("header-fixed")
         }
    })
})