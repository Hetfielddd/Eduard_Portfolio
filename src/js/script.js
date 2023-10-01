
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

      //validate form
      function validateForms(form) {
        $(form).validate({
          rules: {
            name: {
              required: true
            },
            email: {
              required: true,
              email: true
            },
            checkbox: {
              required: true
            }
          },
          messages: {
            name: {
              required: "*Write your name here",
            },
            email: {
              required: "*Write your e-mail",
              email: "*Write a real e-mail"
            },
            checkbox: {
              required: "*This field is required"
            }
          }
        });
      };

      validateForms('#contacts form');

      //form sending
      $("#contact_form").on('submit', function(e) {
        e.preventDefault();
      });

      $('#contact_form').submit(function(e) {
        e.preventDefault();
        if (!$(this).valid()) {
          return;
        }
        $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
        }).done(function() {
          $(this).find("input").val("");
          

          $('form').trigger('reset');
        });
        return false;
      });


});