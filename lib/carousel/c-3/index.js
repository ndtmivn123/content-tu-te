$(function() {
    if ($('.canhcam-carousel-3 .owl-carousel').length) {
        $('.canhcam-carousel-3 .owl-carousel').owlCarousel({
            // animateIn: 'fadeIn',
            // animateOut: 'fadeOut',
            items: 1,
            loop: false,
            center: false,
            // margin: 10,
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            nav: true,
            dots: false,
            autoplay: false,
            autoplayTimeout: 3000,
            autoplayHoverPause: false,
            callbacks: true,
            margin: 30,
            responsive: {
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        });
    }

});