$(function() {

    $(document).on('click', function(e) {
        const
            $toggler = $(e.target).closest('.main-list > li'),
            $block = $(e.target).closest('.main-list > li').find('.submenu');
            $block2 = $(e.target).closest('.main-list > li > a');
        if ($toggler.length) {
            $block.toggleClass('open');
            $block2.toggleClass('active')
        }

        $('.submenu').not($block).removeClass('open');
        $('.main-list > li > a').not($block2).removeClass('active')
    });

    // SCROLL

    $(".sorting").mCustomScrollbar({
        axis: "x",
        mouseWheelPixels: 200,
        advanced:{autoExpandHorizontalScroll:true}
    });
    

    if ($(window).width() < 767) {
        $('.sorting').mCustomScrollbar('destroy');
    }


    $(window).resize(function() {
        if ($(window).width() < 767) {
            $('.sorting').mCustomScrollbar('destroy');
        }
    });

    // DATEPICKER

    new AirDatepicker('.js-calendar', {
       inline: false,
       autoClose: true,
       position: 'bottom right'
    })

    new AirDatepicker('.calendar-pred', {
       inline: false,
       autoClose: true,
       position: 'bottom left'
    })

    // ACCORDION JQUERY

    $('.acc-toggler').click(function(j) {
        var dropDown = $(this).closest('.acc-item').find('.acc-body');

        $(this).closest('.acc').find('.acc-body').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.acc').find('.acc-toggler.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });

    // SEARCH SHOW

    $('.main-list > li:first > a, .header-search__mob').click(function() {
        $('.search').addClass('open')
    });

    $('.search-close').click(function() {
        $('.search').removeClass('open')
    });

    // CATALOG SHOW


    if ($(window).width() < 767) {
        $('.catalog-list > li.has-dropdown > a').click(function(e) {
            e.preventDefault()
            $(this).next().slideToggle()
            $(this).toggleClass('active')
        })
    }

    if ($(window).width() > 767) {
        $(".catalog-list > li.has-dropdown > a").mouseenter(function() {
            $(".catalog-list > li > a").next().hide();
            $(this).next().show();
        });
    }

    // SHOW PSW

    $('.psw-click').click(function() {
        $(this).toggleClass('active')
        var x = $(this).closest('.form__row').find('input');
        if (x.attr("type") === "password") {
            x.attr("type", "text")
        } else {
            x.attr("type", "password")
        }
    });

    // CUSTOM SELECT

    $(".js-select").select2();

    // ADAPTIVE MENU

    $('.hamburger').click(function() {
        $(this).toggleClass('is-active');
        $('.catalog').toggleClass('open');
    });

    // MODAL MAGNIFIC POPUP INIT

    $('.modal-init').magnificPopup({
        type: 'inline',
        fixedContentPos: true,
        removalDelay: 500,
        callbacks: {

            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            },
            open: function() {
                $('.header .main-list').addClass('disabled')
            },
            close: function() {
                $('.header .main-list').removeClass('disabled')
            }
        },
        midClick: true
    });

    $('.modal-close').on("click", function() {
        $.magnificPopup.close();
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