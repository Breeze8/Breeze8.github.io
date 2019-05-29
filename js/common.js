$(function() {

    // ADAPTIVE MENU

    $('.hamburger').click(function() {
        $(this).toggleClass('is-active');
        $('.main-nav').toggleClass('open');
        $('body').toggleClass('hidden');
    });

    if( $(window).width() < 767 ) {
        $('.main-list a[href*="#"]').click(function() {
            $('.main-nav').removeClass('open');
            $('body').removeClass('hidden');
            $('.hamburger').removeClass('is-active');

        });
    }

    // SCROLL TO ANY SECTION

    $('.main-list a[href*="#"]').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

    // MODAL MAGNIFIC POPUP INIT

    $('.btn-modal').magnificPopup({
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

});