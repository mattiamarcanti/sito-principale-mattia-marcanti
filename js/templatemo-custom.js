(function ($) {

	"use strict";

	// Header Type = Fixed and buttonToTop
	document.addEventListener("DOMContentLoaded", function(){
	  window.addEventListener('scroll', function() {
	      if (window.scrollY > 0) {
	        document.getElementById('navbarHeader').classList.add('background-header');
	      } else {
	        document.getElementById('navbarHeader').classList.remove('background-header');
	      }
				if (window.scrollY > 100) {
	         document.getElementById('buttonToTop').classList.add('active')
	      } else {
	         document.getElementById('buttonToTop').classList.remove('active')
	      }
	  });
	});

//on load if scrolled
	window.onload = (event) => {
		if (window.scrollY > 0) {
			document.getElementById('navbarHeader').classList.add('background-header');
		} else {
			document.getElementById('navbarHeader').classList.remove('background-header');
		}
		if (window.scrollY > 100) {
			 document.getElementById('buttonToTop').classList.add('active')
		} else {
			 document.getElementById('buttonToTop').classList.remove('active')
		}
	};


	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
    $(".menu-trigger").on('click', function() {
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  }


    // Menu elevator animation
	$('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			var width = $(window).width();
			if(width < 991) {
			  $('.menu-trigger').removeClass('active');
			  $('.header-area .nav').slideUp(200);
			}
			$('html,body').animate({
			  scrollTop: (target.offset().top) + 1
			}, 700);
			return false;
		  }
		}
	  });
	

	// Page loading animation
	 $(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });



	// Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $('.submenu').on('click', function() {
      if(width < 767) {
        $('.submenu ul').removeClass('active');
        $(this).find('ul').toggleClass('active');
      }
    });
  }


	/**
   * Back to top button
   */
  let backtotop = select('.back-to-top');
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }



})(window.jQuery);
