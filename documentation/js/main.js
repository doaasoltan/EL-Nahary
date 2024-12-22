/*=============== SHOW MENU ===============*/
const navMenu=document.getElementById("nav-menu"),
navToggle= document.getElementById("nav-toggle"),
navClose=document.getElementById("nav-close")

if(navToggle){
    navToggle.addEventListener("click" ,() =>{
        navMenu.classList.add("show-menu")
    }

    )
}

/*menu hidden*/
if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove("show-menu")
    }


    )
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink=document.querySelectorAll(".nav__link")
const linkAction =() =>{
    const navMenu=document.getElementById("nav-menu")

    navMenu.classList.remove("show-menu")
}

navLink.forEach(n=> n.addEventListener("click",linkAction))


(function($){
	"use strict";

	// Sidebar Menu
	$('.sidebar-area ul li a').on('click', function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 80);
        e.preventDefault();
    });

}(jQuery));