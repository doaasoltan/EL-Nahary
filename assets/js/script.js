

$(document).ready(function() {

	// click class active
	$("ul li a").click(function() {
	  	$("ul li").removeClass('current');
		$(this).parent().addClass('current');
	});


	// Add smooth scrolling to all links
    $("a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll The optional number
            // (800) specifies the number of milliseconds it takes to scroll to the
            // specified area
            $('html, body').animate({
                scrollTop: $(hash)
                    .offset()
                    .top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                 window.location.hash = hash;
            });
        } // End if
    });





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






});
