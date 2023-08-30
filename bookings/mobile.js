// MOBILE STYLES

/*$('.book__right-order').mCustomScrollbar({
    axis: "y",
    live: "on",
    mouseWheel: { preventDefault: true },
    mouseWheelPixels: 120,
    advanced: { updateOnContentResize: true }
});*/


$('.js-mobile .footer__head').unbind('click').click(function() {
    $(this).next().slideToggle();
    $(this).toggleClass('active')
})

$('.search-toggler').click(function() {
    $(this).toggleClass('active')
    $('.search').toggleClass('open');
    $('.hamburger').removeClass('is-active');
    $('.mobile-nav').removeClass('open');
    $('.dropdown-mobile').removeClass('active');
    $('.mobile-filter').removeClass('active');
    $('.dropdown-mobile-overlay').hide();
    $('html').removeClass('fixed');
})

$('.hamburger').click(function() {
    $(this).toggleClass('is-active');
    $('.mobile-nav').toggleClass('open');
    $('.search').removeClass('open');
    $('.search-toggler').removeClass('active');
    $('.dropdown-mobile').removeClass('active');
    $('.mobile-filter').removeClass('active');
    $('html').removeClass('fixed');
    $('.dropdown-mobile-overlay').hide();
});

$('.mobile-filter').click(function() {
    $('body').toggleClass('fixed');
    $('.mobile-filter').toggleClass('active');
    $('.dropdown-mobile').toggleClass('active');
    $('.hamburger').removeClass('is-active');
    $('.search-toggler').removeClass('active');
    $('.mobile-nav').removeClass('open');
    $('.search').removeClass('open');
    $('.dropdown-mobile-overlay').toggle();

})

$('.mobile-nav .language-toggler').click(function() {
    $(this).next().slideToggle();
    $('.mobile-nav .login').toggleClass('active')
})

$('.mobile-nav .language-dropdown li').click(function() {
    $('.mobile-nav .language-dropdown').slideUp();
    $('.mobile-nav .language-dropdown').removeClass('open')
    $('.mobile-nav .login').removeClass('active')
})
