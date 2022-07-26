(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $('.change-bg2').css('top', $('.fixed-top').height()*1.05);
    $('.fixed-top').css('top', $('.top-bar').height());
    $('.scroll-section').css('scroll-margin-top',($('.fixed-top').height()+ $('.change-bg2').height())*1.5 )
    // $('#usdtransfers').css('scroll-margin-top',($('.fixed-top').height()+ $('.change-bg2').height())*1.2 )
    // $('#eurotransfers').css('scroll-margin-top',($('.fixed-top').height()+ $('.change-bg2').height())*1.2 )
    // $('#poundstransfers').css('scroll-margin-top',($('.fixed-top').height()+ $('.change-bg2').height())*1.2 )
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.change-bg1').addClass('bg-dark').css('top', 0);
            
        } else {
            $('.change-bg1').removeClass('bg-dark').css('top', $('.top-bar').height());
            
        }
    });
    
  
    $(window).scroll(function () {
        if ($(this).scrollTop() >   ($('.top-image').offset().top + $('.top-image').outerHeight(true))*0.8) {
            $('.change-bg2').addClass('bg-dark');
            $('.change-bg2').removeClass('bg-primary');
        } else {
            $('.change-bg2').addClass('bg-primary');
            $('.change-bg2').removeClass('bg-dark');
        }
    });

    $(window).resize(function() {
        $('.change-bg2').css('top', $('.change-bg1').height()*1.05);
        $('.fixed-top').css('top', $('.top-bar').height());
        $('.scroll-section').css('scroll-margin-top',($('.fixed-top').height()+ $('.change-bg2').height())*1.5 )
        // $('#usdtransfers').css('scroll-margin-top',($('.fixed-top').height()+ $('.change-bg2').height())*1.2 )
        // $('#eurotransfers').css('scroll-margin-top',($('.fixed-top').height()+ $('.change-bg2').height())*1.2 )
        // $('#poundstransfers').css('scroll-margin-top',($('.fixed-top').height()+ $('.change-bg2').height())*1.2 )
          });


    



    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        loop: true,
        nav: true,
        dots: false,
        items: 1,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    
})(jQuery);

