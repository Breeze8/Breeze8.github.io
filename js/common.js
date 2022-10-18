$(function() {

    // CUSTOM SELECT

    // $(".js-select").select2();

    // ADAPTIVE MENU

    $('.hamburger').click(function() {
        $(this).toggleClass('is-active');
        $('.main-nav').toggleClass('open');
        $('body').toggleClass('hidden');
    });

    // SCROLL TO ANY SECTION

    // $('.scroll[href*="#"]').on('click', function(e) {
    //     e.preventDefault();

    //     $('html, body').animate({
    //         scrollTop: $($(this).attr('href')).offset().top
    //     }, 500, 'linear');
    // });

    // TABS JQUERY 

    $(".projects-tabs__item").not(":first").hide();
    $(".projects-round__item").click(function() {
        $(".projects-round__item").removeClass("active").eq($(this).index()).addClass("active");
        $(".projects-tabs__item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $('.projects-round__item:nth-child(1)').click(function(){
        $('.projects-round').css('transform', 'rotate(135deg)')
    })

    $('.projects-round__item:nth-child(2)').click(function(){
        $('.projects-round').css('transform', 'rotate(90deg)')
    })

    $('.projects-round__item:nth-child(3)').click(function(){
        $('.projects-round').css('transform', 'rotate(45deg)')
    })

    $('.projects-round__item:nth-child(4)').click(function(){
        $('.projects-round').css('transform', 'rotate(0deg)')
    })

    $('.projects-round__item:nth-child(5)').click(function(){
        $('.projects-round').css('transform', 'rotate(-45deg)')
    })

    $('.projects-round__item:nth-child(6)').click(function(){
        $('.projects-round').css('transform', 'rotate(-90deg)')
    })

    $('.projects-round__item:nth-child(7)').click(function(){
        $('.projects-round').css('transform', 'rotate(-135deg)')
    })

    $('.projects-round__item:nth-child(8)').click(function(){
        $('.projects-round').css('transform', 'rotate(180deg)')
    })

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

    $('.video-play').magnificPopup({
        type: 'iframe',
        fixedContentPos: true,
        midClick: true
    });

    // SLICK SLIDER INIT

    $('.contacts-slider').slick({
        rows: false,
        dots: true,

        responsive: [{
            breakpoint: 767,
            settings: {

            }
        }, ]
    })


    AOS.init({
      offset: 100,
      duration: 950,
      easing: 'ease-out-back',
      delay: 100,
      once: true,
    });


});