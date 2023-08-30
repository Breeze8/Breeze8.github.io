$(function() {

    $('.form__file-close').click(function() {
        $(this).parent().remove()
    })

    // GALLERY MODAL

    $('.modal-gallery-for__image img').click(function() {
        $('.modal-gallery__header, .modal-gallery-small').toggleClass('active')
    })

    // ALERT

    $('.alert-close').click(function() {
        $(this).closest('.alert').hide()
    })

    // COOKIES

    $('.cookies-close').click(function() {
        $(this).closest('.cookies').hide()
    })


    // CUSTOM SCROLL

    $(".alphabet__nav").mCustomScrollbar({
        axis: "y"
    });

    // ALPHABET NAV

    $(window).bind('scroll', function() {
        var currentTop = $(window).scrollTop();
        var elems = $('.alphabet__content-row');
        elems.each(function(index) {
            var elemTop = $(this).offset().top - 60;
            var elemBottom = elemTop + $(this).outerHeight();
            if (currentTop >= elemTop && currentTop <= elemBottom) {
                var id = $(this).attr('id');
                var navElem = $('.alphabet__list a[href="#' + id + '"]');
                navElem.parent().addClass('active').siblings().removeClass('active');
            }
        })
    });


    // COUNTRY SELECT

    $("#country_selector").countrySelect({
        defaultCountry: "us"
    });

    // STAR RATING

    $('.bar-rating--1').barrating({
        theme: 'fontawesome-stars'
    });

    // FORM PASSWORD HIDE / SHOW

    $(".form__icon--click").click(function() {

        var input = $(this).siblings('input');
        if (input.attr("type") == "password") {
            input.attr("type", "text");
            $(this).find('.second').show();
            $(this).find('.first').hide();
        } else {
            input.attr("type", "password");
            $(this).find('.first').show();
            $(this).find('.second').hide();
        }
    });

    // REMINDER FOCUS

    $('.reminder input').keyup(function() {
        if (this.value.length == $(this).attr("maxlength")) {
            $(this).parent().next().find('input').focus();
        }
    });

    // CANCEL BTN

    $('.cancel-btn').click(function() {
        $(this).parent().parent().remove()
    })

    // DATEPICKER

    $('.datepicker-input').datepicker({})

    // PHONE NUMBERS

    $(".phone-input").intlTelInput({
        nationalMode: false,
        autoHideDialCode: false,
        formatOnDisplay: true,
    });

    // CART

    var cartInput = $('.cart__table-row').find('input[type="checkbox"]');

    cartInput.change(function() {
        if ($(this).is(":checked")) {
            $(this).parent().parent().addClass("active");
        } else {
            $(this).parent().parent().removeClass("active");
        }
    });

    $('.cart__table-row input[type="checkbox"]').change(function() {
        if ($('.cart__table-row input[type="checkbox"]').is(":checked")) {
            $('.cart__table-header').addClass('active')
        } else {
            $('.cart__table-header').removeClass('active')
        }
    });

    $('.cart__table-header input[type="checkbox"]').change(function() {
        if ($('.cart__table-header input[type="checkbox"]').is(":checked")) {
            var checkbox = $('.cart__table-row').find('input[type="checkbox"]');
            checkbox.prop('checked', !checkbox.prop('checked'));
            $('.cart__table-header').addClass('active')
            $('.cart__table-row').addClass('active')
        } else {
            var checkbox = $('.cart__table-row').find('input[type="checkbox"]');
            checkbox.prop('checked', !checkbox.prop('checked'));
            $('.cart__table-header').removeClass('active')
            $('.cart__table-row').removeClass('active')
        }
    });

    $('.cart__table-header .btn').click(function(e) {
        e.preventDefault()
        $('.cart__table-row.active').remove()
        $('.cart__table-header').removeClass('active')
        $('.cart__table-header input[type="checkbox"]').prop("checked", false);
    })

    $('.cart__table-close').click(function() {
        $(this).parent().parent().remove()
    })

    // SHOW MORE

    $(".lk__order-show a").click(function(e) {
        e.preventDefault()
        var elem = $(this).text();
        if (elem == "Show more") {

            $(this).text("Show less");
            $(this).parent().prev().slideDown();
        } else {

            $(this).text("Show more");
            $(this).parent().prev().slideUp();
        }
    });

    // READMORE

    $(".comments-btn").click(function(e) {
        e.preventDefault()
        var elem = $(this).find('span').text();
        if (elem == "Add comments") {

            $(this).find('span').text("Hide comments");
            $(this).prev().slideDown();
        } else {

            $(this).find('span').text("Add comments");
            $(this).prev().slideUp();
        }
    });

    $(".read-more-button").click(function() {
        var elem = $(this).text();
        if (elem == "Read More»") {

            $(this).text("Read Less»");
            $(this).prev().find('.seotext-hidden').slideDown();
        } else {

            $(this).text("Read More»");
            $(this).prev().find('.seotext-hidden').slideUp();
        }
    });

    $(".read-more-seo").click(function() {
        var elem = $(this).text();
        if (elem == "Show more information") {

            $(this).text("Show less information");
            $(this).parent().prev().find('.seotext-hidden').slideDown();
        } else {

            $(this).text("Show more information");
            $(this).parent().prev().find('.seotext-hidden').slideUp();
        }
    });

    $(".read-more-block").click(function(e) {
        e.preventDefault()
        var elem = $(this).text();
        if (elem == "Show all details") {

            $(this).text("Hide all details");
            $(this).prev().find('.item__details-hidden').slideDown();
            $(this).addClass('active')
        } else {

            $(this).text("Show all details");
            $(this).prev().find('.item__details-hidden').slideUp();
            $(this).removeClass('active')
        }
    });

    // FILTER

    $('.catalog__content-filter-mark:not(.closing)').click(function() {
        $(this).remove()
    })

    $('.catalog__content-filter-mark.closing').click(function() {
        $(this).parent().remove()
    })

    // FIXED HEADER

    var c, currentScrollTop = 0,
        sticky = $('.header:not(.header--order)'),
        mains = $('.main');

    $(window).scroll(function() {
        var a = $(window).scrollTop();
        var b = sticky.height();

        currentScrollTop = a;

        if (c < currentScrollTop && a > b + b && $(window).width() > 1023) {
            mains.removeClass('fixed');
            sticky.removeClass('fixed');
            $('.alphabet__nav').removeClass('fixed')
            $('body').removeClass('opacity hidden opacity-custom opacity-custom')
            $('.main-list').removeClass('showed')
            $('.header__fixed-catalog').removeClass('active')
        } else if (c > currentScrollTop && !(a <= b) && $(window).width() > 1023) {
            mains.addClass('fixed');
            $('.alphabet__nav').addClass('fixed')
            sticky.addClass('fixed');
            if ($('.dropdown__block').hasClass('showed')) {
                $('.dropdown__block').removeClass('showed')
                $('.dropdown__toggler').removeClass('active')
            }
        } else if (a < 350) {
            mains.removeClass('fixed');
            sticky.removeClass('fixed');
            $('.alphabet__nav').removeClass('fixed')
        }

        if (c < currentScrollTop && a > b + b && $(window).width() < 1023) {
            $('.body-laptop .header:not(.header--order)').removeClass('fixed-mob')
            $('.body-laptop .main').removeClass('fixed-mob')
            $('.alphabet__nav').removeClass('fixed')
        } else if (c > currentScrollTop && !(a <= b) && $(window).width() < 1023) {
            $('.body-laptop .header:not(.header--order)').addClass('fixed-mob')
            $('.body-laptop .main').addClass('fixed-mob')
            $('.alphabet__nav').addClass('fixed')
        } else if (a < 350) {
            $('.body-laptop .header:not(.header--order)').removeClass('fixed-mob');
            $('.body-laptop .main').removeClass('fixed-mob');
            $('.alphabet__nav').removeClass('fixed')
        }

        c = currentScrollTop;
    });


    $(window).scroll(function() {

        if (scroll >= 96 && $(window).width() < 767) {
            $('.main-list__overlay').addClass('mobile-fix')
        } else {
            $('.main-list__overlay').removeClass('mobile-fix')
        }

        if ($(window).width() < 1023 && $(window).width() > 767 && $(this).scrollTop() > 10) {
            $('.main-nav').removeClass("showed");
            $('.header__laptop-close.show').removeClass('show')
            $('.header__laptop-catalog.hide').removeClass('hide')
        }

    });

    function myResizeFunction() {

        if ($(window).width() < 1023) {
            $('body').addClass('body-laptop')

        } else {
            $('body').removeClass('body-laptop')
        }

        if ($(window).width() < 767) {
            $(".lk__table-wrap").mCustomScrollbar({
                axis: "x"
            });
        } else {
            // $(".lk__table-wrap").mCustomScrollbar("destroy");
        }

    }

    $(window).resize(myResizeFunction).trigger('resize');

    // ACCORDION JQUERY

    // $('.catalog__sidebar-list > .catalog__sidebar-item:eq(0) a').addClass('active').next().slideDown();

    $('.catalog__sidebar .catalog__sidebar-item-toggler').click(function(j) {
        var dropDown = $(this).closest('.catalog__sidebar-item').find('.catalog__sidebar-menu');

        // $(this).closest('.catalog__sidebar').find('.catalog__sidebar-menu').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            // $(this).closest('.catalog__sidebar').find('.catalog__sidebar-item-toggler.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });

    $('.catalog__sidebar-list .catalog__sidebar-menu-toggler').click(function(j) {
        var dropDown = $(this).closest('.catalog__sidebar-menu-item').find('.catalog__sidebar-filter');

        // $(this).closest('.catalog__sidebar-list').find('.catalog__sidebar-filter').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            // $(this).closest('.catalog__sidebar-list').find('.catalog__sidebar-menu-toggler.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });

    // CATALOG MENU MOBILE

    $('.catalog__content-filter-settings').click(function() {
        $('.catalog__mobile').addClass('showed');
        $('body').toggleClass('hidden opacity')
    })

    $('.catalog__mobile .dropdown__close').click(function() {
        $('body').removeClass('opacity hidden')
    })

    $('.catalog__mobile .catalog__sidebar-item-toggler').click(function() {
        $(this).next().addClass('showed');
        $('.catalog__mobile-prev').addClass('showed')
    })

    $('.catalog__mobile-prev').click(function() {
        $('.catalog__sidebar-menu').removeClass('showed')
        $(this).removeClass('showed')
    })

    $('.header__fixed-catalog').click(function() {
        $('.main-list').toggleClass('showed')
        $('body').toggleClass('opacity')
        $(this).toggleClass('active')
    })

    // SEARCH DROPDOWN

    $(".search__form input").focusin(function() {
        $(".search__dropdown").addClass('showed');
        $(".search").addClass('open')
        $('body').addClass('opacity-custom')
        $('.main-nav').removeClass('showed')
        $('.header__laptop-close').removeClass('show')
        $('.header__laptop-catalog').removeClass('hide')
    }).focusout(function() {
        $(".search__dropdown").removeClass('showed');
        $(".search").removeClass('open')
        $('body').removeClass('opacity-custom')
        $('body').removeClass('hidden hidden-custom')
    });

    $(document).keydown(function(e) {
        if (e.keyCode == 27) {
            $(".search__dropdown").removeClass('showed');
            $(".search").removeClass('open')
            $('body').removeClass('opacity-custom')
            $('body').removeClass('hidden hidden-custom')
            $('.search__input').blur()
        }
    });

    // ADAPTIVE MENU

    $('.hamburger').click(function() {
        $(this).toggleClass('is-active');
        $('.header__top-row').toggleClass('showed');
        $('body').toggleClass('hidden opacity');
        $('.dropdown__block').removeClass('showed')
        $('.main-nav').removeClass('showed')
        $('.header__laptop-close').removeClass('show')
        $('.header__laptop-catalog').removeClass('hide')
        $('.header__laptop-next').removeClass('show')
        $('.main-dropdown').removeClass('showed')
        $('.main-dropdown__list').slideUp()
        $('.main-dropdown__head').removeClass('active')
    });

    $('.dropdown__close').click(function() {
        $(this).parent().removeClass('showed')
        $('body').removeClass('opacity')
        $('.dropdown__toggler').removeClass('active')
    })

    // DROPDOWN SHOW

    $('.dropdown__toggler').click(function(e) {
        e.stopPropagation();
        $(this).next().toggleClass('showed');
        $(this).toggleClass('active');
        $('.main-nav').removeClass('showed')
        $('.header__laptop-close').removeClass('show')
        $('.header__laptop-catalog').removeClass('hide')
        $('.header__laptop-next').removeClass('show')
    })

    $('.header__laptop-catalog').click(function() {
        $('.header__laptop-close').addClass('show')
        $('.header__laptop-catalog').addClass('hide')
        $('.main-nav').addClass('showed')
    })

    $('.header__laptop-close').click(function() {
        // timer = setTimeout(function() {
        $('.header__laptop-close').removeClass('show')
        $('.header__laptop-catalog').removeClass('hide')
        $('.main-nav').removeClass('showed')
        // }, 1000);
        $('body').removeClass('hidden-custom')
    })

    $('.header__laptop-next').click(function() {
        $('.main-dropdown').removeClass('showed');
        $('.header__laptop-close').removeClass('hide')
        $('.header__laptop-close').addClass('show')
        $('.header__laptop-next').removeClass('show')
    })

    $('.card__close').click(function() {
        $(this).parent().remove()
    })

    // LAPTOP JS

    if ($(window).width() < 1023) {
        $('.header__top .dropdown__toggler').click(function(e) {
            $(this).next().slideToggle()
            e.stopPropagation();
        })
        $('.dropdown__toggler:not(.dropdown__toggler--gray)').click(function() {
            $('body').addClass('opacity hidden')
        })
        $('.header__laptop-catalog').click(function() {
            $('body').addClass('hidden')
        })
    }

    if ($(window).width() < 1024) {
        $('.main-list > li.has-dropdown > a').click(function() {
            $('.main-list').removeClass('hide-menu')
        })

        $('.main-list__overlay').click(function() {
            $('.main-list').addClass('hide-menu')
        })
    }

    if ($(window).width() > 767) {

        $('.main-list > li.has-dropdown > a').mouseover(function() {
            // timer = setTimeout(function() {
            $('.main-list').removeClass('hide-menu')
            // }, 1000);
        })

        $('.main-list .main-dropdown').mouseleave(function() {
            $('.main-list').addClass('hide-menu')
        })

        function debouncer(func, timeout) {
            var timeoutID, timeout = timeout || 200;
            return function() {
                var scope = this,
                    args = arguments;
                clearTimeout(timeoutID);
                timeoutID = setTimeout(function() {
                    func.apply(scope, Array.prototype.slice.call(args));
                }, timeout);
            }
        }

        function viewPort() {
            var e = window,
                a = 'inner';
            if (!('innerWidth' in window)) {
                a = 'client';
                e = document.documentElement || document.body;
            }
            return e[a + 'Width'];
        }

        var timeOutDisplayMenu = null;
        var timeOutDisplayMenuSender = null;
        var windowWidth = viewPort();
        $(document).ready(function() {
            navigationInit();
        });

        function navigationInit() {
            $("body").on("click", ".js--togglenav", navigationToggle);
            navigationSetup();
            $(window).resize(debouncer(function() {
                var newWidth = viewPort();
                if (newWidth != windowWidth) {
                    navigationSetup();
                }
            }));
        }

        function navigationToggle(e) {
            e.preventDefault();
            var navigation = $(".main-nav");
            var classToggle = "navbar--open";
            navigation.toggleClass(classToggle);
        }

        function navigationSetup() {
            var viewWidth = viewPort();
            var navLink = $(".main-list li.has-dropdown > a");
            var navPanel = $(".main-dropdown");
            var classLinkActive = "showed";
            var overlay = $('.main-list__overlay');
            var classPanelOpen = "showed";
            navLink.off();
            navPanel.off();
            if (viewWidth > 1023) {
                overlay.removeClass(classLinkActive);
                navPanel.removeClass(classPanelOpen);
                navLink.on("click touchstart", {
                    interaction: "click"
                }, navigationHandler);
                navLink.on("mouseenter", {
                    interaction: "mouseenter"
                }, navigationHandler);
                navLink.on("mouseleave", {
                    interaction: "mouseleave"
                }, navigationHandler);
            } else {
                navLink.on("click", {
                    interaction: "click"
                }, navigationHandler);
            }
        }

        function navigationHandler(event) {
            var page = $(document);
            var viewWidth = viewPort();
            var navLink = $(".main-list li.has-dropdown > a");
            var navPanel = $(".main-dropdown");
            var navLinkPanel = navLink.add(navPanel);
            var classLinkActive = "showed";
            var classPanelOpen = "showed";
            var overlay = $('.main-list__overlay');
            var clickLink = $(this);
            var clickPanel = clickLink.siblings(navPanel);
            var clickTarget = clickLink.attr("href");
            if (event.data.interaction === "mouseenter") {
                if (!timeOutDisplayMenu) {
                    timeOutDisplayMenu = setTimeout(function() {
                        if (timeOutDisplayMenuSender) {
                            timeOutDisplayMenuSender.trigger('click');
                            timeOutDisplayMenuSender = null;
                            timeOutDisplayMenu = null;
                        }
                    }, 200);
                }
                timeOutDisplayMenuSender = $(this);
                return;
            }
            if (event.data.interaction === "mouseleave") {
                if (timeOutDisplayMenu) {
                    timeOutDisplayMenuSender = null;
                    timeOutDisplayMenu = null;
                    clearTimeout(timeOutDisplayMenu);
                }
                return;
            }
            if ((viewWidth > 1023) && (event.data.interaction === "click") && (event.originalEvent !== undefined)) {
                if (clickPanel.hasClass(classPanelOpen)) {
                    window.location.href = clickTarget;
                    var trackingLabel = event.currentTarget.innerText;
                    trackingLabel = trackingLabel.replace(/[^0-9a-zA-Z]+/g, '');
                    _gaq.push(['_trackEvent', 'Navigation', 'click', trackingLabel]);
                }
            }
            if (viewWidth < 1023) {
                // overlay.addClass(classLinkActive);
                // clickPanel.addClass(classPanelOpen);
            } else {
                overlay.removeClass(classLinkActive);
                navPanel.removeClass(classPanelOpen);
                clickLink.addClass(classLinkActive);
                clickPanel.addClass(classPanelOpen);
                page.on("click.navClose touchstart.navClose", function() {
                    navLink.removeClass(classLinkActive);
                    navPanel.removeClass(classPanelOpen);
                    page.off(".navClose");
                });
                clickPanel.off(".navStop");
                clickPanel.on("click.navStop touchstart.navStop", function(event) {
                    event.stopPropagation();
                });
                navLinkPanel.off(".navClose");
                navLinkPanel.on("mouseleave.navClose", function() {
                    var timeoutId = setTimeout(function() {
                        overlay.removeClass(classLinkActive);
                        navPanel.removeClass(classPanelOpen);
                    }, 800);
                    navLinkPanel.one("mouseenter.navClose", function() {
                        clearTimeout(timeoutId);
                    });
                });
            }
            return false;
        }

    }



    if ($(window).width() < 767) {

        $('.main-list__overlay').click(function(e) {
            $('.main-nav').removeClass('showed')
            $('.header__laptop-next').removeClass('show')
            $('.header__laptop-close').removeClass('show')
            $('.header__laptop-catalog').removeClass('hide')
            $('.main-dropdown').removeClass('showed')
        })

        $('.main-dropdown .main-dropdown__head').click(function(j) {
            var dropDown = $(this).closest('.main-dropdown__item').find('.main-dropdown__list');

            $(this).closest('.main-dropdown').find('.main-dropdown__list').not(dropDown).slideUp();

            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                $(this).closest('.main-dropdown').find('.main-dropdown__head.active').removeClass('active');
                $(this).addClass('active');
            }

            dropDown.stop(false, true).slideToggle();

            j.preventDefault();
        });

        $('.main-list > li.has-dropdown > a').click(function() {
            $(this).next().toggleClass('showed');
            $('.header__laptop-close').removeClass('show')
            $('.header__laptop-next').addClass('show')
        })

        $('.dropdown__toggler').click(function(e) {
            e.stopPropagation();
            $('.main-nav').removeClass('showed')
            $('.header__laptop-close').removeClass('show')
            $('.header__laptop-catalog').removeClass('hide')
            $('.header__laptop-next').removeClass('show')
            $('.main-dropdown').removeClass('showed')
            $('.main-dropdown__list').slideUp()
            $('.main-dropdown__head').removeClass('active')
        })

        $(".search__form input").focusin(function() {
            $('.main-nav').removeClass('showed')
            $('.header__laptop-close').removeClass('show')
            $('.header__laptop-catalog').removeClass('hide')
            $('.header__laptop-next').removeClass('show')
            $('.main-dropdown').removeClass('showed')
            $('.main-dropdown__list').slideUp()
            $('.main-dropdown__head').removeClass('active')
        }).focusout(function() {
            $('body').removeClass('opacity-custom')
            $('body').removeClass('hidden hidden-custom')
        });

    }

    $(document).on('click', function(e) {

        var container = $(".hamburger, .catalog__content-filter-settings, .catalog__mobile, .catalog__sidebar-filter, .header__fixed-catalog, .header__laptop-catalog, .main-nav, .header__laptop-next");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $(".header__top-row").removeClass('showed');
            $(".catalog__mobile").removeClass('showed');
            $("body").removeClass('opacity hidden-custom hidden');
            $('.header.fixed .main-list').removeClass('showed')
            $('.header__fixed-catalog').removeClass('active')
        }

        var container2 = $(".dropdown__toggler");
        if (!container2.is(e.target) && container2.has(e.target).length === 0) {
            $(".dropdown__block").removeClass('showed');
            $(".dropdown__toggler").removeClass('active');
            $('.dropdown__block').removeAttr('style')
        }

    });



    // CUSTOM SELECT

    $(".js-select-delivery").select2({
        placeholder: 'United States'
    });

    // SCROLL TO ANY SECTION

    $('.alphabet__list a[href*="#"]').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 30
        }, 500, 'linear');
    });

    // TABS JQUERY 

    $(".item-tabs__item").not(":first").hide();
    $(".item-tabs__nav-item").click(function() {
        $(".item-tabs__nav-item").removeClass("active").eq($(this).index()).addClass("active");
        $(".item-tabs__item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    var loc = window.location.hash;

    if (loc == "/#tab2") {
        $("#tab-3").fadeOut()
        $("#tab-1").fadeOut()
        $("#tab-2").fadeIn()
    }

    if (loc == "/#tab3") {
        $("#tab-3").fadeIn()
        $("#tab-1").fadeOut()
        $("#tab-2").fadeOut()
    }

    // SLICK SLIDER INIT

    $('.main__slider').slick({
        rows: false,
        dots: true,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,
        responsive: [{
            breakpoint: 767,
            settings: {

            }
        }, ]
    })

    $('.main__info-item').addClass('init')

    $('.tour__block-slider .row').slick({
        rows: false,
        dots: true,
        slidesToShow: 3,
        speed: 600,
        arrows: false,
        responsive: [{
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    })

    $('.reviews__slider').slick({
        rows: false,
        slidesToShow: 3,
        dots: true,
        speed: 600,
        arrows: false,
        responsive: [{
            breakpoint: 1023,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        }, ]
    })

    $('.goods__slider').slick({
        rows: false,
        slidesToScroll: 5,
        speed: 600,
        slidesToShow: 5,
        infinite: false,
        responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
            }
        }, ]
    })

    $('.c-blog .row').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        dots: true,
        arrows: false,
        responsive: [{
            breakpoint: 768,
            settings: 'unslick'
        }]
    });

    $('.c-search__slider').slick({
        rows: false,
        slidesToScroll: 4,
        speed: 600,
        slidesToShow: 4,
        infinite: false,
        responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }, ]
    })

    $('.c-content__image--slider').slick({
        rows: false,
        slidesToScroll: 1,
        speed: 600,
        dots: true,
        arrows: false
    })

    // var slickSliderActive = false;

    // function checkSlider() {
    //     if ($(window).width() < 1023 - getScroll()) {
    //         if (slickSliderActive == false) {
    //             $('.header__features').slick({
    //                 slidesToShow: 3,
    //                 arrows: false,
    //                 rows: false,
    //                 draggable: false,
    //                 focusOnSelect: false,
    //                 pauseOnFocus: false,
    //                 pauseOnHover: false,
    //                 speed: 900,
    //                 autoplay: true,
    //                 autoplaySpeed: 3000,
    //                 responsive: [{
    //                     breakpoint: 767,
    //                     settings: {
    //                         slidesToShow: 1,
    //                     }
    //                 }, ]
    //             });
    //             slickSliderActive = true;
    //         }
    //     } else {

    //         if (slickSliderActive) {
    //             $('.header__features').slick('unslick');
    //             slickSliderActive = false;
    //         }

    //     }
    // };


    var slider = $(".header__features");

    slider.not(".slick-initialized").slick({
        slidesToShow: 1,
        arrows: false,
        rows: false,
        draggable: false,
        focusOnSelect: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 900,
        autoplay: true,
        autoplaySpeed: 3000,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 2000,
                settings: 'unslick'
            },
            {
                breakpoint: 1600,
                settings: 'unslick'
            },
            {
                breakpoint: 1200,
                settings: 'unslick'
            },
            {
                breakpoint: 1024,
                settings: 'unslick'
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
        ]
    });

    $(window).on('resize', function() {
        slider.slick('resize');
    });


    // checkSlider();

    // $(window).on('resize', function() {
    //     checkSlider();
    // });

    // function getScroll() {
    //     var div = document.createElement('div');
    //     div.style.overflowY = 'scroll';
    //     div.style.width = '50px';
    //     div.style.height = '50px';
    //     div.style.visibility = 'hidden';
    //     document.body.appendChild(div);
    //     var scrollWidth = div.offsetWidth - div.clientWidth;
    //     document.body.removeChild(div);
    //     return scrollWidth;
    // }

    // CARD SLIDER INIT


    $('.item-image__main, .item-image__preview').each(function() {
        $(this).children('*').each(function(i) {
            $(this).attr('data-original-index', i);
        });
    });

    var $inlineBigSlider = $('.item-image .item-image__main').slick({
        asNavFor: '.item-image .item-image__preview',
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 400,
        rows: false,
        arrows: false,
        useTransform: true,
        fade: false,
        responsive: [{
            breakpoint: 1023,
            settings: {
                dots: true,
            }
        }]
    });

    var $inlineMinSlider = $('.item-image .item-image__preview').slick({
        asNavFor: '.item-image .item-image__main',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        verticalSwiping: true,
        vertical: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        rows: false,
        speed: 400,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 450,
            settings: {
                slidesToShow: 3,
            }
        }]
    });


    function myResizeFunctions() {

        if ($(window).width() > 767) {
            $('.item .item-image__main').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
                var img = $(slick.$slides[nextSlide]).find("img");
                $('.zoomWindowContainer,.zoomContainer').remove();
                $(img).ezPlus();
            });

            // ZOOM

            $('.item .item-image__main .slick-current img').ezPlus({
                // zoomType: 'inner',
                cursor: 'crosshair'
            });
        } else {
            $.removeData($(this), 'elevateZoom'); //remove zoom instance from image
            $('.zoomContainer').remove(); // remove zoom container from DOM
            return false;
        }

    }

    $(window).resize(myResizeFunctions).trigger('resize');

    var $modalMinSlider = $('.item-modal .item-image__preview').slick({
        asNavFor: '.item-modal .item-image__main',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        verticalSwiping: true,
        vertical: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        rows: false,
        speed: 400,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 450,
            settings: {
                slidesToShow: 3,
            }
        }]
    });

    var $modalBigSlider = $('.item-modal .item-image__main').slick({
        asNavFor: '.item-modal .item-image__preview',
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 400,
        rows: false,
        useTransform: true,
        fade: false,
        prevArrow: $('.item-modal__nav-prev'),
        nextArrow: $('.item-modal__nav-next'),
        responsive: [{
            breakpoint: 450,
            settings: {}
        }]
    });

    $modalBigSlider.on('afterChange', function(e, slick, currentSlide) {
        $inlineBigSlider.slick('slickGoTo', currentSlide);
    });

    $('.modal-gallery-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        rows: false,
        fade: true,
        prevArrow: $('.gallery-slider__nav-item--prev'),
        nextArrow: $('.gallery-slider__nav-item--next'),
        asNavFor: '.modal-gallery-small'
    });
    $('.modal-gallery-small').slick({
        slidesToShow: 8,
        rows: false,
        arrows: false,
        slidesToScroll: 1,
        infinite: false,
        asNavFor: '.modal-gallery-for',
        focusOnSelect: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });

    // MODAL SLIDER INIT

    $('.item-image__main-slide').magnificPopup({
        type: 'inline',
        fixedContentPos: true,
        removalDelay: 500,
        callbacks: {
            open: function() {
                $modalBigSlider.slick('refresh');
                $modalMinSlider.slick('refresh');
                $('.item-modal').closest('.mfp-container').addClass('active')
            },
            beforeOpen: function() {
                var currentSlide = $inlineBigSlider.slick('slickCurrentSlide');

                this.st.mainClass = this.st.el.attr('data-effect');

                $modalBigSlider.slick('slickGoTo', currentSlide);



            },
        },
        midClick: true
    });

    $('.modal__close').on("click", function() {
        $.magnificPopup.close();
    });

    $('.modal-closing').on("click", function() {
        $.magnificPopup.close();
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
                $('.mfp-bg, .mfp-wrap').addClass('open');
            }
        },
        midClick: true
    });

    $('.init-gallery').magnificPopup({
        type: 'inline',
        fixedContentPos: true,
        removalDelay: 500,
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            },
            close: function() {
                 $('.modal-gallery__header, .modal-gallery-small').removeClass('active')
            },
            open: function() {
                $('.mfp-bg, .mfp-wrap').addClass('gallery-modals');
                $('.modal-gallery-for').slick('refresh');
                $('.modal-gallery-small').slick('refresh');
            }
        },
        midClick: true
    });


    // CUSTOM INPUT TYPE NUMBER

    $('<div class="quantity-nav"><div class="quantity-button quantity-up"></div><div class="quantity-button quantity-down"></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });


    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');

    window.addEventListener('resize', function() {
        var vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', vh + 'px');
    });

});