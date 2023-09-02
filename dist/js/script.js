const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close'),
        overlayElem = document.querySelector('.menu__overlay'),
        menuLink = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlayElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuLink.forEach((menuLink) => {
    menuLink.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

    //a script for procentage
const counters = document.querySelectorAll('.skills__stats-procentage'),
        lines = document.querySelectorAll('.skills__stats-filled');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
        });
    } // End if
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 640) {
          $('.hamburger__bg').fadeIn();
        } else {
          $('.hamburger__bg').fadeOut();
        }
      });

      $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
          $('.sidepanel__bg').fadeIn();
        } else {
          $('.sidepanel__bg').fadeOut();
        }
      });

});