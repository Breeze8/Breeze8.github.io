$(function() {

    // CUSTOM SELECT

     $(".js-select").select2();

    // ADAPTIVE MENU

    $('.hamburger').click(function() {
        $(this).toggleClass('is-active');
        $('.main-nav').toggleClass('open');
        $('body').toggleClass('hidden');
    });

    // SCROLL TO ANY SECTION

    $('.scroll-down[href*="#"]').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 50
        }, 500, 'linear');
    });

    // TABS JQUERY 

    $(".tabs-content__item").not(":first").hide();
    $(".tabs-nav__item").click(function() {
        $(".tabs-nav__item").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs-content__item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    // MODAL MAGNIFIC POPUP INIT

    $('.modal-init').magnificPopup({
        type: 'inline',
        fixedContentPos: true,
        removalDelay: 500,
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        midClick: true
    });

    // SLICK SLIDER INIT

    $('.slider').slick({
        rows: false,
        responsive: [{
            breakpoint: 767,
            settings: {

            }
        }, ]
    })

});