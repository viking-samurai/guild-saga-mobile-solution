

$(function ($) {
    "use strict";

    // Feature Animations
    const featureObserver = new IntersectionObserver(entries => {
        // Loop over the entries
        entries.forEach(entry => {
            // If the element is visible
            if (entry.isIntersecting) {
                // Add the animation class
                entry.target.classList.add('animate', 'slide-left');
            }
        });
    });
    
    document.querySelectorAll('.single-feature').forEach((i) => {
        if (i) {
            featureObserver.observe(i);
        }
    });

    // Roadmap Animations
    const roadmapObserver = new IntersectionObserver(entries => {
        // Loop over the entries
        entries.forEach(entry => {
            // If the element is visible
            if (entry.isIntersecting) {
                // Add the animation class
                entry.target.classList.add('animate');
            }
        });
    });
    
    document.querySelectorAll('.single-roadmap').forEach((i) => {
        if (i) {
            roadmapObserver.observe(i);
        }
    });

    // Roadmap Animations
    const roadmapArrowObserver = new IntersectionObserver(entries => {
        // Loop over the entries
        entries.forEach(entry => {
            // If the element is visible
            if (entry.isIntersecting) {
                // Add the animation class
                entry.target.classList.add('animate');
            }
        });
    });
    
    document.querySelectorAll('.roadmap-arrow').forEach((i) => {
        if (i) {
            roadmapArrowObserver.observe(i);
        }
    });

    // Splider
    var splide = new Splide('.splide', {
        type: 'loop',
        perPage: 3,
        focus: 'center',
        breakpoints: {
            640: {
                perPage: 1,
            },
        }
    });
    splide.mount();

    // Navbar Smooth Scrolling
    $('#goto-nft').on('click', function() {
        $('html,body').animate({
            scrollTop: $('#nft').offset().top - 100
        }, 1000);
        // Collapse menu
        $('.collapse').collapse("hide");
     });
    $('.goto-nft').on('click', function() {
       $('html,body').animate({
           scrollTop: $('#nft').offset().top - 100
       }, 1000);
    });
    $('#goto-roadmap').on('click', function() {
        $('html,body').animate({
            scrollTop: $('#roadmap').offset().top - 75
        }, 1000);
        // Collapse menu
        $('.collapse').collapse("hide");
    });
    $('#goto-gallery').on('click', function() {
       $('html,body').animate({
           scrollTop: $('#gallery').offset().top - 25
       }, 1000);
       // Collapse menu
       $('.collapse').collapse("hide");
    });
    $('#goto-team').on('click', function() {
        $('html,body').animate({
            scrollTop: $('#team').offset().top - 100
        }, 1000);
        // Collapse menu
        $('.collapse').collapse("hide");
    });
    
    // Active nav highlighting
    /*
    $('#nft').waypoint(function() {
        $(".nav-link").removeClass("active");
        $("#goto-nft").addClass("active");
    }, { offset: 101 });
    
    $('#roadmap').waypoint(function() {
        $(".nav-link").removeClass("active");
        $("#goto-roadmap").addClass("active");
    }, { offset: 100 });
    
    $('#gallery').waypoint(function() {
        $(".nav-link").removeClass("active");
        $("#goto-gallery").addClass("active");
    }, { offset: 105 });
    
    $('#team').waypoint(function() {
        $(".nav-link").removeClass("active");
        $("#goto-team").addClass("active");
    }, { offset: 101 });
    */

    // Bottom to Top button
    $(document).on('click', '.bottomtotop', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 2000);
    });

    $(window).on('scroll', function () {
        // Fixed nav on scroll
        if($(this).scrollTop() > 300) {
            $('.mainmenu-area').addClass('opaque');
            $('.header-logo-main').addClass('scrolled-down');
        } else {
            $('.mainmenu-area').removeClass('opaque');
            $('.header-logo-main').removeClass('scrolled-down');
        }

        // Hide top arrow nav button on scroll
        var ScrollTop = $('.bottomtotop');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }
    });

    $(window).on('load', function () {
        var backtoTop = $('.bottomtotop');
        backtoTop.fadeOut(100);
    });
});

//Roadmap Section///////////////////
//Checkcicle operation
function checkRoadmap() {
    //Create the components
    const checkboxes = document.querySelectorAll('.check-circle');
    const items = document.querySelectorAll('.roadmap-list-item');
    //Start the loop
    for(var i=0; i<checkboxes.length; i++) {
        //Run the variable
        if (checkboxes[i].classList.contains('event-complete')) {
            //Complete the solution
            items[i].classList.add('triggered');
        }
    }
}