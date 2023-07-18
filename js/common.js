$(function() {

    $.fn.inputFilter = function(inputFilter) {
        return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }
        });
    };

    $(".js-phone").inputFilter(function(value) {
        return /^-?\d*$/.test(value);
    });

    $(".js-validate").each(function() {
        $(this).validate({
            ignore: [],
            rules: {
                phone: {
                    required: true,
                },
                name: {
                    required: true,
                },
                name2: {
                    required: true,
                },
                text: {
                    required: true,
                },
            },
            messages: {
                phone: {
                    required: "Пожалуйста, заполните это поле",
                },
                name: {
                    required: "Пожалуйста, заполните это поле",
                },
                name2: {
                    required: "Пожалуйста, заполните это поле",
                },
                text: {
                    required: "Пожалуйста, заполните это поле",
                },
            },
            submitHandler: function(form) {
               form.submit(function() {
                    $.ajax({
                        type: "POST",
                        url: "mail.php",
                        data: $(this).serialize()
                    }).done(function() {
                        $(this).find("input").val("");
                        $.magnificPopup.open({
                            items: {
                                src: '#thanksDesigner',
                                type: 'inline'
                            }
                        })
                        form.trigger("reset");

                    });
                    return false;
                });
            }
        });
        
    })

    $('.btn-step-1').click(function() {
        if ($("#textId").valid() == true) {
            $('.step-1').hide()
            $('.step-2').show()
        }
    })

    //JS

    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');

    window.addEventListener('resize', function() {
        var vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', vh + 'px');
    });


    // CUSTOM SELECT

    $(".js-select").select2();

    // ADAPTIVE MENU

    $('.hamburger').click(function() {
        $(this).toggleClass('is-active');
        $('.main-nav').toggleClass('open');
        $('body').toggleClass('hidden');
    });

    $('.m-toggler').click(function() {
        $('.m-box .submenu').toggleClass('open');
    });

    // SCROLL TO ANY SECTION

    $('.scrolls[href*="#"]').on('click', function(e) {
        e.preventDefault();

        $('body').removeClass('hidden')
        $('.hamburger').removeClass('is-active')
        $('.main-nav').removeClass('open');

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

    // TABS JQUERY 

    $(".tabs-content__box").not(":first").hide();
    $(".tabs-nav__item").click(function(e) {
        e.preventDefault();
        $(".tabs-nav__item").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs-content__box").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $(".submenu li").click(function(e) {
        e.preventDefault();
        $(".tabs-nav__item").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs-content__box").hide().eq($(this).index()).fadeIn()
        $('html, body').animate({
            scrollTop: $($(this).find('a').attr('href')).offset().top
        }, 900, 'linear');
        $('.m-box .submenu').removeClass('open');
    }).eq(0).addClass("active");


    // $(".tabs-nav a[data-toggle=tab]").on("click", function() {

    // });


    // MODAL MAGNIFIC POPUP INIT

    $('.modal-close').on("click", function() {
        $.magnificPopup.close();
    });

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

    $('.review-slider').slick({
        rows: false,
        arrows: false,
        // adaptiveHeight: true,
        responsive: [{
            breakpoint: 767,
            settings: {

            }
        }, ]
    })
    $('.review__arrow-prev').click(function() {
        $('.review-slider').slick('slickPrev');
    })

    $('.review__arrow-next').click(function() {
        $('.review-slider').slick('slickNext');
    })


    $('.spec-slider').slick({
        rows: false,
        arrows: false,
        // adaptiveHeight: true,
        responsive: [{
            breakpoint: 767,
            settings: {

            }
        }, ]
    })
    $('.spec__arrow-prev').click(function() {
        $('.spec-slider').slick('slickPrev');
    })

    $('.spec__arrow-next').click(function() {
        $('.spec-slider').slick('slickNext');
    })

    // ACCORDION JQUERY


    $('.accordion > li > a').click(function(j) {
        var dropDown = $(this).closest('li').find('.accordion-hidden');

        $(this).closest('.accordion').find('.accordion-hidden').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });

});