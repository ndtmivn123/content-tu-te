$(function() {
    if ($('.canhcam-carousel-5 .owl-carousel').length) {
        $('.canhcam-carousel-5 .owl-carousel').owlCarousel({
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            items: 3,
            loop: true,
            center: false,
            padding: 10,
            margin: 20,
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            nav: true,
            dots: false,
            autoplay: false,
            autoplayTimeout: 3000,
            autoplayHoverPause: false,
            callbacks: true,
            responsive: {
                360: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1140: {
                    items: 3
                }
            }
        });
    }

});
