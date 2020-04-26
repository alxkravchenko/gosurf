$(function () {

    $(".header__slider").owlCarousel({
        mouseDrag: false,
        items: 1,
        dots: true,
        dotsContainer: '.header__slider-dots',
        nav: false,
        loop: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 250
    });

    $('.slider-item__arrow-right').click(function() {
        $('.header__slider').trigger('next.owl.carousel');
    });

    $('.slider-item__arrow-left').click(function() {
        $('.header__slider').trigger('prev.owl.carousel');
    });

    $('.header__slider-dot').click(function () {
        $('.header__slider').trigger('to.owl.carousel', [$(this).index(), 300]);
    });
});