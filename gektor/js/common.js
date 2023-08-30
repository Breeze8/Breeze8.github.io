window.addEventListener("load", function(event) {
    $('img.lazyImg').lazy({
        bind: "event",
        // delay: 1500,
        placeholder: 'https://gektor-studio.com/wp-content/themes/gektor/img/load-svg.svg',
        afterLoad: function(element) {
            $('.blog-item__play').addClass('show')
        },
    });
});

$(function() {

    // ACCORDION JQUERY

    $('.js-accordion-desktop > li:eq(0) a').addClass('active').next().slideDown();

    $('.js-accordion-desktop > li > a').click(function(j) {
        var dropDown = $(this).closest('li').find('.accordion__hidden');

        $(this).closest('.js-accordion-desktop').find('.accordion__hidden').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.js-accordion-desktop').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });

    // COUNTER

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $(function($, win) {
        $.fn.inViewport = function(cb) {
            return this.each(function(i, el) {
                function visPx() {
                    var H = $(this).height(),
                        r = el.getBoundingClientRect(),
                        t = r.top,
                        b = r.bottom;
                    return cb.call(el, Math.max(0, t > 0 ? H - t : (b < H ? b : H)));
                }
                visPx();
                $(win).on("resize scroll", visPx);
            });
        };
    }(jQuery, window));

    $(window).on('resize scroll', function() {
        if ($('.num-anim').length) {
            if ($('.num-anim').isInViewport()) {

                if ($('#num-anim-1').length) {
                    var currentNumber1 = $('#num-anim-1').text();
                    var currentVals1 = $('#vals-1').text();

                    $({ numberValue1: currentNumber1 }).animate({ numberValue1: currentVals1 }, {
                        duration: 2000,
                        easing: 'linear',
                        step: function(now) {
                            $('#num-anim-1').text(now.toFixed(0));
                        }
                    });
                }

                if ($('#num-anim-2').length) {
                    var currentNumber2 = $('#num-anim-2').text();
                    var currentVals2 = $('#vals-2').text();

                    $({ numberValue2: currentNumber2 }).animate({ numberValue2: currentVals2 }, {
                        duration: 2000,
                        easing: 'linear',
                        step: function(now) {
                            $('#num-anim-2').text(now.toFixed(0));
                        }
                    });
                }

                if ($('#num-anim-3').length) {
                    var currentNumber3 = $('#num-anim-3').text();
                    var currentVals3 = $('#vals-3').text();

                    $({ numberValue3: currentNumber3 }).animate({ numberValue3: currentVals3 }, {
                        duration: 2000,
                        easing: 'linear',
                        step: function(now) {
                            $('#num-anim-3').text(now.toFixed(1));
                        }
                    });
                }

                if ($('#num-anim-4').length) {
                    var currentNumber4 = $('#num-anim-4').text();

                    var currentVals4 = $('#vals-4').text();
                    $({ numberValue4: currentNumber4 }).animate({ numberValue4: currentVals4 }, {
                        duration: 2000,
                        easing: 'linear',
                        step: function(now) {
                            $('#num-anim-4').text(now.toFixed(0));
                        }
                    });
                }

            }
        }
    });


    // FILE TEXT UPLOAD

    $('input[type="file"]').change(function() {
        var val = $(this).val().replace(/C:\\fakepath\\/i, '')
        $(this).next().find('span').text(val)
    })

    // MAP MOBILE


    // DISABLED

    $('.form .form__checkbox input[type="checkbox"]').each(function() {
        $(this).change(function() {
            if ($(this).is(':checked')) {

                $(this).closest('.form').find('.btn').removeClass('disabled')
                $(this).closest('.form').find('.btn-box').removeClass('disabled')
            } else {
                $(this).closest('.form').find('.btn').addClass('disabled')
                $(this).closest('.form').find('.btn-box').addClass('disabled')
            }
        })
    })

    // BTN ANIM

    $('.btn-transparent').on('mouseenter', function(e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('.colors').css({ top: relY, left: relX })
        })
        .on('mouseout', function(e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('.colors').css({ top: relY, left: relX })
        });

    $('.tabs-nav__item .btn').find('.colors').remove()

    // VALIDATION

    $(".form").each(function() {
        $(this).validate({
            rules: {
                terms: {
                    required: true
                },
                name: {
                    required: true
                },
                phone: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                terms: {
                    required: "Ознакомьтесь с политикой безопасности!"
                },
                name: {
                    required: "Укажите Ваше имя!"
                },
                phone: {
                    required: "Укажите Ваш телефон!"
                },
                email: {
                    required: "Укажите Ваш email!"
                }
            },
            errorPlacement: function(error, element) {
                var placement = $(element).closest('.form__row').find('.errorTxt span')
                if (placement) {
                    placement.append(error)
                } else {
                    error.insertAfter(element);
                }
            },
            // s1egh4rdt edition start - обработка формы
            submitHandler: function(form) {
                var th = $(form);
                var form_data = new FormData(form);
                $.ajax({
                    type: "POST",
                    url: "/wp-content/themes/gektor/phpmailer/send_mail.php", //Change
                    // data: th.find('input, textarea').serialize(), //th.serialize()
                    data: form_data,
                    cache: false,
                    contentType: false,
                    processData: false,
                }).done(function() {
                    // $(this).reset();
                    // Правка по верстке: Тут надо вызвать попап THANKS
                    $.magnificPopup.open({
                        items: {
                            src: '#modalThanks',
                            type: 'inline'
                        }
                    })
                    // For Metrika start
                    //
                    // For Metrika end

                    // gtag('event', 'request', {'event_category': 'lead'});
                });
                return false;
            }
            // s1egh4rdt edition end
        });
    })




    // MODAL ANIM

    $(".form__input").focus(function() {
        $(this).closest('.modal').find('.modal-image').addClass('active')
        $(this).closest('.form__row').find('.form__icon').addClass('focused')
    });

    $(".form__input").focusout(function() {
        $(this).closest('.modal').find('.modal-image').removeClass('active')
        $(this).closest('.form__row').find('.form__icon').removeClass('focused')
    });

    $(".form__input").change(function() {
        if ($(".modal .form__input").val().length > 0) {
            $(this).addClass('active')
            $(this).closest('.modal').find('.modal-image').addClass('open')

        } else {
            $(this).removeClass('active')
            $(this).closest('.modal').find('.modal-image').removeClass('open')

        }
    })



    // MASK

    $('.phone-mask').mask("+7 (999) 999-9999");
    $('.phone-mask-ua').mask("+38 (099) 999-99-99");
    // SIDE NAV POPOVER

    $('.fp-nav a').each(function() {
        var $this = $(this);

        $this.on('click', function(e) { e.preventDefault(); }).popover({
            trigger: 'hover',
            container: $this.closest('li'),
            html: true,
        });
    });

    $('.brands-item[data-toggle="popover"]').each(function() {
        var $this = $(this);

        $this.on('click', function(e) { e.preventDefault(); }).popover({
            trigger: 'hover',
            html: true,
        })
    });

    $('.brands-item[data-toggle="popover"]').on('shown.bs.popover', function() {
        $('.popover').addClass('popover-cs')
    });

    $('.list-tooltip [data-toggle="popover"]').each(function() {
        var $this = $(this);

        $this.on('click', function(e) { e.preventDefault(); }).popover({
            trigger: 'hover',
            // container: 'body',
            // content: function () {
            //     // Get the content from the hidden sibling.
            //     return $(this).siblings('.popover-content').html();
            // },
            html: true,
        });
    });

    if ($(window).width() < 1023) {
        $('.brands-item[data-toggle="popover"]').popover('disable');
    }

    if ($(window).width() < 767) {
        $('.footer-item .h4').click(function() {
            $(this).next().slideToggle()
            $(this).toggleClass('active')
        })
        $('.c-menu-list > li > a').click(function() {
            $(this).next().slideToggle()
            $(this).toggleClass('active')
        })
    }

    $('.scroller[href*="#"]').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 110
        }, 900, 'linear');
    });

    // CUSTOM SCROLL

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    if (!isMobile.any()) {
        $(".c-menu").mCustomScrollbar({
            axis: "y",
            mouseWheelPixels: 300
        });
        $(".contacts-menu__body").mCustomScrollbar({
            axis: "y",
            mouseWheelPixels: 300
        });

        $(".portfolio-modal .portfolio-modal__content").mCustomScrollbar({
            axis: "y",
            mouseWheelPixels: 600
        });
    }

    $(".modal-vacancy__info").mCustomScrollbar({
        axis: "y",
        mouseWheelPixels: 300
    });

    $(".portfolio-modal .portfolio-modal__view").mCustomScrollbar({
        axis: "y",
        mouseWheelPixels: 600
    });

    $(".modal-webdev__scroll").mCustomScrollbar({
        axis: "y",
        mouseWheelPixels: 600
    });


    // PORTFOLIO CARD

    $('#portToggler').change(function() {
        if ($('#portToggler').is(":checked")) {
            $('.portfolio-modal__view-hidden').addClass('show')
            $('.portfolio-modal__view-main').addClass('hides')
            // $('#portToggler').next().text('Выключить прототип')
            $('#portToggler + label').addClass('active')
        } else {
            $('.portfolio-modal__view-hidden').removeClass('show')
            $('.portfolio-modal__view-main').removeClass('hides')
            // $('#portToggler').next().text('Включить прототип')
            $('#portToggler + label').removeClass('active')
        }
        if ($('#portToggler + label').hasClass('active')) {
            $('#portToggler + label').text('Выключить прототип')
        } else {
            $('#portToggler + label').text('Включить прототип')
        }
    })

    $('.card').on('click', function() {
        $('.portfolio-modal').addClass('show')
        // $('body').addClass('hide')


        var ths = $(this),
            head = ths.find('.card-popup .m-head').text(),
            tooltip = ths.find('.card-popup .modal-tooltip__content').clone(),
            toggler = ths.find('.card-popup__modal').clone(),
            video = ths.find('.card-popup .video-nav').attr('href'),
            videoContent = ths.find('.card-popup .video-nav__content').clone(),
            company = ths.find('.card-popup .m-company').text(),
            imgMain = ths.find('.card-popup .portfolio-modal__view-main').clone(),
            imgHidden = ths.find('.card-popup .portfolio-modal__view-hidden').clone(),
            ports = $('.portfolio-modal');

        // s1egh4rdt edition start - скрытие/показ SVG-иконки YouTube
        if (video == '#')
            ports.find('.video-nav__img').css('display', 'none');
        else
            ports.find('.video-nav__img').css('display', 'flex');
        // s1egh4rdt edition end
        // s1egh4rdt edition start - название компании в форму рассчета стоимости
        $(".s-name").val(company + ' - ' + head);
        // s1egh4rdt edition end

        // ports.find('.m-head').text(head);
        // toggler.insertAfter('.portfolio-modal__wrap .modal-head');
        // videoContent.appendTo('.portfolio-modal .video-nav');
        // ports.find('.video-nav').attr('href', video);
        // ports.find('.m-company').text(company);

        tooltip.appendTo('#modalTooltip');

        imgHidden.prependTo('.portfolio-modal .portfolio-modal__view .mCSB_container');
        imgMain.prependTo('.portfolio-modal .portfolio-modal__view .mCSB_container');

        setTimeout(function() {
            $('.portfolio-modal .portfolio-modal__view').removeClass('open')
        }, 1500);
    }).on('click', '.js-video-init, .card-popup__modal', function(e) {
        // clicked on descendant div
        e.stopPropagation();
    });

    $('.portfolio-modal .closed').click(function() {
        // s1egh4rdt edition start - чистим название компании в форме рассчета стоимости
        $(".s-name").val('');
        // s1egh4rdt edition end

        var ths = $(this).closest('.portfolio-modal'),
            list = ths.find('.m-list');

        ths.find('.card-popup__modal').remove();
        ths.find('.portfolio-modal .portfolio-modal__view-hidden').remove();
        ths.find('.portfolio-modal .portfolio-modal__view-main').remove();
        ths.find('.video-nav__content').remove();
        $('#modalTooltip .modal-tooltip__content').remove()

        $('.portfolio-modal').removeClass('show')
        $('.portfolio-modal .portfolio-modal__view').addClass('open')
        $('body').removeClass('hide')
    })

    $('.portfolio-modal .portfolio-modal__view .scroll-down').on('click', function(e) {
        $('.portfolio-modal .portfolio-modal__view').mCustomScrollbar("scrollTo", "bottom");
    });


    // PORTFOLIO CARD END

    // BRANDS POPOVER

    $('.brands-nav .popover .btn').click(function(e) {
        e.preventDefault()
        $('.portfolio-modal').addClass('show')
        setTimeout(function() {
            $('.portfolio-modal .portfolio-modal__view').removeClass('open')
        }, 1500);
    })


    // BRANDS POPOVER END

    // LAZY



    $('.card').click(function() {
        $('img.lazyPort').lazy({
            bind: "event",
            delay: 1500,
            afterLoad: function(element) {
                $('.portfolio-modal .portfolio-modal__view').removeClass('open')
            },
        });
    });

    $('.brands-nav .popover .btn').click(function(e) {
        e.preventDefault()
        $('img.lazyPort').lazy({
            bind: "event",
            delay: 1500,
            afterLoad: function(element) {
                $('.portfolio-modal .portfolio-modal__view').removeClass('open')
            },
        });
    })

    if ($(window).width() < 767) {
        var heightCont = $('.portfolio-modal .portfolio-modal__content').outerHeight();

        $('.portfolio-modal .portfolio-modal__view').css({
            'height': 100 - heightCont + '%'
        })
    }

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 150) {
            $('.navbar').addClass('navbar-fixed');
        } else {
            $('.navbar').removeClass('navbar-fixed');
        }
    });

    //Select2
    function iformat(icon) {
        var originalOption = icon.element;
        return $('<a href="#"><svg class="icon icon-' + $(originalOption).data('icon') + '"><use xlink:href="#' + $(originalOption).data('icon') + '"></use></svg> ' + icon.text + '</a>');
    }

    if ($('.js-select').length) {
        $('.js-select').select2({
            templateSelection: iformat,
            templateResult: iformat,
            allowHtml: true
        });
    }

    // DROPDOWN

    $('.dropdown-toggle').dropdown()



    // ADAPTIVE MENU

    $('.hamburger').click(function() {
        $('.c-menu').toggleClass('open');
        $('.overlay').addClass('active')
    });

    $('.c-menu .closed').click(function() {
        $('.c-menu').removeClass('open')
        $('.overlay').removeClass('active')
    });

    $('.contacts-menu .closed').click(function() {
        $('.contacts-menu').removeClass('open')
        $('body').removeClass('contacts-menu-body')
        $('.overlay').removeClass('active')
    });

    $('.callback-init').click(function(e) {
        e.preventDefault()
        $('body').addClass('contacts-menu-body')
        $('.contacts-menu').addClass('open')
        $('.overlay').addClass('active')
    });

    $(document).on('click', function(e) {
        var container = $(".contacts-menu, .callback-init");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.removeClass('open')
            $('.contacts-menu-body .overlay').removeClass('active')
        }
    });

    $('.c-menu-header .logo').click(function(e) {
        e.preventDefault()
    })


    // TABS JQUERY 

    $('#portTab .js-tab-nav-port').on('click', function(e) {
        e.preventDefault();
        $(this).tab('show')
        $('#portTab .js-tab-nav-port').removeClass('active')
        $(".portfolio-slider").css({
            'opacity': 0
        })
        setTimeout(function() {
            $(".portfolio-slider").slick('refresh');
            $(".portfolio-slider").css({
                'opacity': 1
            })

        }, 50);
    })

    $('#clientsTabs .js-tab-nav-client').on('click', function(e) {
        e.preventDefault();
        $(this).tab('show')
        $('#clientsTabs .js-tab-nav-client').removeClass('active')
        $(".review-slider").css({
            'opacity': 0
        })
        $(".docs-slider").css({
            'opacity': 0
        })
        $(".video-slider").css({
            'opacity': 0
        })
        setTimeout(function() {

            $(".review-slider").slick('refresh');
            $(".review-slider").css({
                'opacity': 1
            })
            $(".docs-slider").slick('refresh');
            $(".docs-slider").css({
                'opacity': 1
            })
            $(".video-review").slick('refresh');
            $(".video-slider").css({
                'opacity': 1
            })

        }, 50);
    })

    $(".js-tab-nav-client:nth-child(1)").click(function(e) {
        e.preventDefault()
        $(".docs-slider").css({
            'opacity': 0
        })
        setTimeout(function() {

            $(".docs-slider").slick('refresh');
            $(".docs-slider").css({
                'opacity': 1
            })
        }, 50);
    })

    $(".js-tab-nav-client:nth-child(2)").click(function(e) {
        e.preventDefault()
        $(".review-slider").css({
            'opacity': 0
        })
        setTimeout(function() {

            $(".review-slider").slick('refresh');
            $(".review-slider").css({
                'opacity': 1
            })
        }, 50);
    })

    $(".js-tab-nav-client:nth-child(3)").click(function(e) {
        e.preventDefault()
        $(".video-review").css({
            'opacity': 0
        })
        setTimeout(function() {

            $(".video-review").slick('refresh');
            $(".video-review").css({
                'opacity': 1
            })
        }, 50);
    })

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
                $('.mfp-wrap').addClass('modal-main')
                $('.mfp-bg').addClass('modal-main-wrap')
                $('body').addClass('magnificpopupnoscroll');
                setTimeout(function() {
                    $('.modal-thanks').addClass('loads');
                    $('.modal-thanks__head .h4').text('Готово! Заявка отправлена')
                    $('.modal-thanks__head p span').text('Спасибо за Ваше обращение, заявка отправлена. В ближайшее время с Вами свяжется представитель web-студии Gektor и уточнит все детали, которые Вас интересуют. Чтобы не терять время, вы можете заполнить бриф и прислать нам на')
                }, 8000);
            },
            close: function() {
                $('.modal-thanks').removeClass('loads')
                $('.modal-thanks__head .h4').html('<span>Подождите, заявка <br> находится в обработке</span>')
                $('.modal-thanks__head p span').text('Спасибо за Ваше обращение. Чтобы не терять время, вы можете заполнить бриф и прислать нам на')
                $('body').removeClass('magnificpopupnoscroll')
            },
        },
        midClick: true
    });



    $('.modal-init-map').click(function() {
        $(this).next().slideToggle()
    })

    var videoHeight = screen.height / 4;

    $(".js-video-init").fancybox({
        type: "iframe",
        baseClass: 'fancy-ratios',
    })

    $("[data-fancybox]").fancybox({
        lang: "ru",
        arrows: true,
        infobar: true,
        animationEffect: "zoom",
        animationDuration: 366,
        i18n: {
            ru: {
                CLOSE: "Закрыть",
                NEXT: "Вперед",
                PREV: "Назад"
            }
        },
        buttons: [
            "close"
        ],
    })

    $('.modal .closed').on("click", function() {
        $.magnificPopup.close();
    });

    // BRAND SLIDER

    if ($('.brands-for').length) {
        $('.brands-for').each(function() {
            var brands = $(this);
            var prev = brands.closest('.brands-block').next().find('.slider-arrows__item--prev');
            var next = brands.closest('.brands-block').next().find('.slider-arrows__item--next');
            var counts = brands.closest('.brands-block').next().find('.slider-counter__nums')

            brands.on("init reInit afterChange", function(event, slick, currentSlide, nextSlide) {
                var i = (currentSlide ? currentSlide : 0) + 1,
                    paginCurrent = i < 10 ? "0" + i : i,
                    slickLength = slick.slideCount < 10 ? "0" + slick.slideCount : slick.slideCount;
                counts.html(
                    '<div class="slider-counter__nums-big">' + paginCurrent + '</div>' +
                    '<div class="slider-counter__nums-small">' + "/ " + slickLength + '</div>'
                );
            });

            brands.slick({
                slidesToShow: 15,
                speed: 500,
                rows: false,
                prevArrow: prev,
                focusOnSelect: true,
                nextArrow: next,
                asNavFor: '.brands-nav',
                responsive: [{
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 2,
                        variableWidth: true,
                    }
                }, ]
            });

        })
    }

    if ($('.brands-nav').length) {
        $('.brands-nav').each(function() {
            var brandsNav = $(this);
            var prev = brandsNav.closest('.brands-block').next().find('.slider-arrows__item--prev');
            var next = brandsNav.closest('.brands-block').next().find('.slider-arrows__item--next');
            var counts = brandsNav.closest('.brands-block').next().find('.slider-counter__nums')

            brandsNav.on("init reInit afterChange", function(event, slick, currentSlide, nextSlide) {
                var i = (currentSlide ? currentSlide : 0) + 1,
                    paginCurrent = i < 10 ? "0" + i : i,
                    slickLength = slick.slideCount < 10 ? "0" + slick.slideCount : slick.slideCount;
                counts.html(
                    '<div class="slider-counter__nums-big">' + paginCurrent + '</div>' +
                    '<div class="slider-counter__nums-small">' + "/ " + slickLength + '</div>'
                );
            });

            brandsNav.slick({
                slidesToShow: 1,
                speed: 500,
                rows: false,
                lazyLoad: 'ondemand',
                fade: true,
                focusOnSelect: true,
                prevArrow: prev,
                nextArrow: next,
                asNavFor: '.brands-for',
                responsive: [{
                        breakpoint: 1023,
                        settings: {
                            slidesToShow: 1,
                            fade: false,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            fade: false,
                        }
                    },
                ]
            });

        })
    }

    // REVIEW SLIDER

    if ($('.video-review').length) {
        $('.video-review').each(function() {
            var videoReview = $(this);
            var prev = videoReview.closest('.tabs-content__item').find('.slider-arrows__item--prev');
            var next = videoReview.closest('.tabs-content__item').find('.slider-arrows__item--next');
            var counts = videoReview.closest('.tabs-content__item').find('.slider-counter__nums')

            videoReview.on("init reInit afterChange", function(event, slick, currentSlide, nextSlide) {
                var i = (currentSlide ? currentSlide : 0) + 1,
                    paginCurrent = i < 10 ? "0" + i : i,
                    slickLength = slick.slideCount < 10 ? "0" + slick.slideCount : slick.slideCount;
                counts.html(
                    '<div class="slider-counter__nums-big">' + paginCurrent + '</div>' +
                    '<div class="slider-counter__nums-small">' + "/ " + slickLength + '</div>'
                );
            });

            videoReview.slick({
                slidesToShow: 4,
                speed: 500,
                rows: false,
                prevArrow: prev,
                nextArrow: next,
                responsive: [{
                        breakpoint: 2100,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
                ]
            });

        })
    }

    // REVIEW SLIDER

    if ($('.review-slider').length) {
        $('.review-slider').each(function() {
            var review = $(this);
            var prev = review.closest('.tabs-content__item').find('.slider-arrows__item--prev');
            var next = review.closest('.tabs-content__item').find('.slider-arrows__item--next');
            var counts = review.closest('.tabs-content__item').find('.slider-counter__nums')

            review.on("init reInit afterChange", function(event, slick, currentSlide, nextSlide) {
                var i = (currentSlide ? currentSlide : 0) + 1,
                    paginCurrent = i < 10 ? "0" + i : i,
                    slickLength = slick.slideCount < 10 ? "0" + slick.slideCount : slick.slideCount;
                counts.html(
                    '<div class="slider-counter__nums-big">' + paginCurrent + '</div>' +
                    '<div class="slider-counter__nums-small">' + "/ " + slickLength + '</div>'
                );
            });

            review.slick({
                slidesToShow: 4,
                speed: 500,
                rows: false,
                prevArrow: prev,
                nextArrow: next,
                responsive: [{
                        breakpoint: 2100,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
                ]
            });

        })
    }

    // DOCS SLIDER

    if ($('.docs-slider').length) {
        $('.docs-slider').each(function() {
            var docs = $(this);
            var prev = docs.closest('.tabs-content__item').find('.slider-arrows__item--prev');
            var next = docs.closest('.tabs-content__item').find('.slider-arrows__item--next');
            var counts = docs.closest('.tabs-content__item').find('.slider-counter__nums')

            docs.on("init reInit afterChange", function(event, slick, currentSlide, nextSlide) {
                var i = (currentSlide ? currentSlide : 0) + 1,
                    paginCurrent = i < 10 ? "0" + i : i,
                    slickLength = slick.slideCount < 10 ? "0" + slick.slideCount : slick.slideCount;
                counts.html(
                    '<div class="slider-counter__nums-big">' + paginCurrent + '</div>' +
                    '<div class="slider-counter__nums-small">' + "/ " + slickLength + '</div>'
                );
            });

            docs.slick({
                slidesToShow: 6,
                speed: 500,
                rows: false,
                infinite: false,
                lazyLoad: 'ondemand',
                prevArrow: prev,
                nextArrow: next,
                responsive: [{
                        breakpoint: 2100,
                        settings: {
                            slidesToShow: 5,
                        }
                    },

                    {
                        breakpoint: 1800,
                        settings: {
                            slidesToShow: 4,
                        }
                    },
                    {
                        breakpoint: 1439,
                        settings: {
                            slidesToShow: 3,
                        }
                    }, {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            variableWidth: true,
                        }
                    },
                ]
            });

        })
    }

    // PORT SLIDER

    if ($('.portfolio-slider').length) {
        $('.portfolio-slider').each(function() {
            var portfolio = $(this);
            var prev = portfolio.closest('.tabs-content__item').find('.slider-arrows__item--prev');
            var next = portfolio.closest('.tabs-content__item').find('.slider-arrows__item--next');
            var counts = portfolio.closest('.tabs-content__item').find('.slider-counter__nums')

            portfolio.on("init reInit afterChange", function(event, slick, currentSlide, nextSlide) {
                var i = (currentSlide ? currentSlide : 0) + 1,
                    paginCurrent = i < 10 ? "0" + i : i,
                    slickLength = slick.slideCount < 10 ? "0" + slick.slideCount : slick.slideCount;
                counts.html(
                    '<div class="slider-counter__nums-big">' + paginCurrent + '</div>' +
                    '<div class="slider-counter__nums-small">' + "/ " + slickLength + '</div>'
                );
            });

            portfolio.slick({
                slidesToShow: 5,
                infinite: true,
                slidesToScroll: 1,
                speed: 500,
                lazyLoad: 'ondemand',
                rows: false,
                prevArrow: prev,
                nextArrow: next,
                responsive: [{
                        breakpoint: 2100,
                        settings: {
                            slidesToShow: 4,
                        }
                    },
                    {
                        breakpoint: 1460,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 1023,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
                ]
            });

        })
    }

    // WEBDEV SLIDER

    if ($('.webdev-slider').length) {
        $('.webdev-slider').each(function() {
            var webdev = $(this);
            var prev = webdev.closest('.webdev').find('.slider-arrows__item--prev');
            var next = webdev.closest('.webdev').find('.slider-arrows__item--next');
            var counts = webdev.closest('.webdev').find('.slider-counter__nums')

            webdev.on("init reInit afterChange", function(event, slick, currentSlide, nextSlide) {
                var i = (currentSlide ? currentSlide : 0) + 1,
                    paginCurrent = i < 10 ? "0" + i : i,
                    slickLength = slick.slideCount < 10 ? "0" + slick.slideCount : slick.slideCount;
                counts.html(
                    '<div class="slider-counter__nums-big">' + paginCurrent + '</div>' +
                    '<div class="slider-counter__nums-small">' + "/ " + slickLength + '</div>'
                );
            });
            $('.webdev-slider').slick({
                slidesToShow: 1,
                infinite: true,
                slidesToScroll: 1,
                speed: 500,
                rows: false,
                prevArrow: prev,
                nextArrow: next,
            });
        })
    }

    // TEAM SLIDER

    if ($('.team-slider').length) {
        var prev = $('.team-slider').next().find('.slider-arrows__item--prev');
        var next = $('.team-slider').next().find('.slider-arrows__item--next');
        $('.team-slider').slick({
            slidesToShow: 4,
            infinite: true,
            slidesToScroll: 1,
            speed: 500,
            rows: false,
            prevArrow: prev,
            nextArrow: next,
            responsive: [{
                    breakpoint: 2100,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 1460,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    }

    // TABS NAV SLIDER 

    $tabs = $('.tabs-nav-wrap');
    $tabs.slick({
        arrows: false,
        rows: false,
        touchMove: true,
        variableWidth: true,
        adaptiveHeight: true,
        slidesToScroll: 1,
        infinite: false,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToScroll: 1,

            }
        }, ]
    });

    $tabs.on('wheel', (function(e) {
        e.preventDefault();

        if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickPrev');
        } else {
            $(this).slick('slickNext');
        }
    }));


    $tabs2 = $('.tabs-nav-wraps');
    $tabs2.slick({
        arrows: false,
        rows: false,
        touchMove: true,
        variableWidth: true,
        adaptiveHeight: true,
        slidesToScroll: 3,
        infinite: false,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToScroll: 1,
                focusOnSelect: true,
                initialSlide: 1,
            }
        }, ]
    });

    $tabs2.on('wheel', (function(e) {
        e.preventDefault();

        if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickPrev');
        } else {
            $(this).slick('slickNext');
        }
    }));

    // SLICK SLIDER INIT

    var time = 2;
    var $slick,
        isPause,
        tick,
        percentTime = 0;

    var time2 = 2;
    var $sub,
        isPause2,
        tick2,
        percentTime2 = 0;

    $slick = $('.main-init');
    $sub = $('.sub-init');

    $slick.slick({
        // strokeDashoffset: rlen * (1 - percentTime / 1000),
        // autoplaySpeed: 50000,
        speed: 700,
        rows: false,
        prevArrow: $('.main-slider--prev'),
        nextArrow: $('.main-slider--next'),
        pauseOnHover: false,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 767,
            settings: {

            }
        }, ]
    });

    $sub.slick({
        rows: false,
        prevArrow: $('.sub-slider--prev'),
        nextArrow: $('.sub-slider--next'),
        pauseOnHover: false,
        adaptiveHeight: true,
        speed: 700,
        responsive: [{
            breakpoint: 767,
            settings: {

            }
        }, ]
    });

    $slick.on({
        mousedown: function() {
            // $rbar.fadeOut('slow');
            percentTime = 0;
        },
        beforeChange: function(event, slick, currentSlide, nextSlide) {
            percentTime = 0;
        },
        afterChange: function(event, slick, currentSlide, nextSlide) {
            $(".main-slider__count span").html(
                "0" + (slick.slickCurrentSlide() + 1)
            );

            $(".slider-counter--main .slider-counter__nums").html(
                '<div class="slider-counter__nums-big">' + "0" + (slick.slickCurrentSlide() + 1) + '</div>' +
                '<div class="slider-counter__nums-small">' + "/ 0" + slick.slideCount + '</div>'
            );
        }
    });

    $sub.on({
        mousedown: function() {
            // $rbar2.fadeOut('slow');
            percentTime2 = 0;
        },
        beforeChange: function(event, slick, currentSlide, nextSlide) {
            percentTime2 = 0;
        },
        afterChange: function(event, slick, currentSlide, nextSlide) {
            $(".sub-slider__count span").html(
                "0" + (slick.slickCurrentSlide() + 1)
            );

            $(".slider-counter--sub .slider-counter__nums").html(
                '<div class="slider-counter__nums-big">' + "0" + (slick.slickCurrentSlide() + 1) + '</div>' +
                '<div class="slider-counter__nums-small">' + "/ 0" + slick.slideCount + '</div>'
            );
        }
    });

    function startProgressbar() {
        clearTimeout(tick);
        isPause = false;
        tick = setInterval(interval, 20);
        $rbar.fadeIn('slow');
    }
    var $rbar = $('.main-slider__count .circle-go');

    var rlen = 2 * Math.PI * $rbar.attr('r');

    function interval() {
        if (isPause === false) {
            percentTime += 1 / (time + 0.1);
            $rbar.css({
                strokeDasharray: rlen,
                strokeDashoffset: rlen * (1 - percentTime / 50)
            });
            if (percentTime >= 50) {
                $slick.slick('slickNext');
                percentTime = 0;
                startProgressbar();
            }
        }
    }
    startProgressbar();


    function startProgressbar2() {
        clearTimeout(tick2);
        isPause2 = false;
        tick2 = setInterval(interval2, 20);
        $rbar2.fadeIn('slow');
    }
    var $rbar2 = $('.sub-slider__count .circle-go');

    var rlen2 = 2 * Math.PI * $rbar2.attr('r');

    function interval2() {
        if (isPause2 === false) {
            percentTime2 += 1 / (time2 + 0.1);
            $rbar2.css({
                strokeDasharray: rlen2,
                strokeDashoffset: rlen2 * (1 - percentTime2 / 50)
            });
            if (percentTime2 >= 50) {
                $sub.slick('slickNext');
                percentTime2 = 0;
                startProgressbar2();
            }
        }
    }
    startProgressbar2();

    // SERVICES SLIDER


    $(".step-row").not(".slick-initialized").slick({
        slidesToShow: 1,
        rows: false,
        draggable: false,
        focusOnSelect: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        arrows: false,
        speed: 500,
        variableWidth: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        mobileFirst: true,
        responsive: [{
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
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    variableWidth: true,
                }
            },
        ]
    });

    $(window).on('resize', function() {
        $(".step-row").slick('resize');
    });

    // SERVICES SLIDER

    $(".services-top .row").on("init reInit afterChange", function(event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1,
            paginCurrent = i < 10 ? "0" + i : i,
            slickLength = slick.slideCount < 10 ? "0" + slick.slideCount : slick.slideCount;
        $(".services .slider-counter__nums").html(
            '<div class="slider-counter__nums-big">' + paginCurrent + '</div>' +
            '<div class="slider-counter__nums-small">' + "/ " + slickLength + '</div>'
        );
    });

    $(".services-top .row").not(".slick-initialized").slick({
        slidesToShow: 1,
        rows: false,
        draggable: false,
        focusOnSelect: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        nextArrow: '.services-slider--next',
        prevArrow: '.services-slider--prev',
        speed: 500,
        // autoplay: true,
        // autoplaySpeed: 3000,
        mobileFirst: true,
        responsive: [{
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
                breakpoint: 1023,
                settings: 'unslick'
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });

    $(window).on('resize', function() {
        $(".services-top .row").slick('resize');
    });

    // TECH SLIDER

    $(".tech .row").on("init reInit afterChange", function(event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1,
            paginCurrent = i < 10 ? "0" + i : i,
            slickLength = slick.slideCount < 10 ? "0" + slick.slideCount : slick.slideCount;
        $(".tech .slider-counter__nums").html(
            '<div class="slider-counter__nums-big">' + paginCurrent + '</div>' +
            '<div class="slider-counter__nums-small">' + "/ " + slickLength + '</div>'
        );
    });

    var prevS = $('.tech .row').next().find('.slider-arrows__item--prev');
    var nextS = $('.tech .row').next().find('.slider-arrows__item--next');

    $(".tech .row").not(".slick-initialized").slick({
        slidesToShow: 1,
        rows: false,
        focusOnSelect: false,
        nextArrow: nextS,
        prevArrow: prevS,
        speed: 500,
        // variableWidth: true,
        mobileFirst: true,
        responsive: [{
                breakpoint: 2000,
                settings: 'unslick'
            },
            {
                breakpoint: 1600,
                settings: 'unslick'
            },
            {
                breakpoint: 1401,
                settings: 'unslick'
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });

    $(window).on('resize', function() {
        $(".tech .row").slick('resize');
    });


    // BLOG SLIDER

    $(".blog-content .row").on("init reInit afterChange", function(event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1,
            paginCurrent = i < 10 ? "0" + i : i,
            slickLength = slick.slideCount < 10 ? "0" + slick.slideCount : slick.slideCount;
        $(".blog-content .slider-counter__nums").html(
            '<div class="slider-counter__nums-big">' + paginCurrent + '</div>' +
            '<div class="slider-counter__nums-small">' + "/ " + slickLength + '</div>'
        );
    });

    $(".blog-content .row").not(".slick-initialized").slick({
        slidesToShow: 1,
        rows: false,
        focusOnSelect: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        nextArrow: '.services-slider--next',
        prevArrow: '.services-slider--prev',
        speed: 500,
        // autoplay: true,
        // autoplaySpeed: 3000,
        mobileFirst: true,
        responsive: [{
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
                breakpoint: 1023,
                settings: 'unslick'
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });

    $(".blog-sidebar__similar").not(".slick-initialized").slick({
        slidesToShow: 1,
        rows: false,
        focusOnSelect: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        arrows: false,
        speed: 500,
        // autoplay: true,
        // autoplaySpeed: 3000,
        mobileFirst: true,
        responsive: [{
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
                breakpoint: 1023,
                settings: 'unslick'
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });

    $(window).on('resize', function() {
        $(".blog-content .row").slick('resize');
        $(".blog-sidebar__similar").slick('resize');
    });

    // SIMILAR SLIDER 

    $(".similar-slider").slick({
        slidesToShow: 4,
        rows: false,
        focusOnSelect: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        nextArrow: '.similar-nav__arrow--next',
        prevArrow: '.similar-nav__arrow--prev',
        speed: 500,
        // autoplay: true,
        // autoplaySpeed: 3000,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });


    // AUTOCOMPLETE

    function autocomplete(inp, arr) {
        /*the autocomplete function takes two arguments,
        the text field element and an array of possible autocompleted values:*/
        var currentFocus;
        /*execute a function when someone writes in the text field:*/
        inp.addEventListener("input", function(e) {
            var a, b, i, val = this.value;
            /*close any already open lists of autocompleted values*/
            closeAllLists();
            if (!val) { return false; }
            currentFocus = -1;
            /*create a DIV element that will contain the items (values):*/
            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "search-menu");
            a.setAttribute("class", "search-menu");
            /*append the DIV element as a child of the autocomplete container:*/
            this.parentNode.appendChild(a);
            /*for each item in the array...*/
            for (i = 0; i < arr.length; i++) {
                /*check if the item starts with the same letters as the text field value:*/
                if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                    /*create a DIV element for each matching element:*/
                    b = document.createElement("a");
                    b.setAttribute("class", "search-menu__item");
                    /*make the matching letters bold:*/
                    b.innerHTML = "<b>" + arr[i].substr(0, val.length) + "</b>";
                    b.innerHTML += arr[i].substr(val.length);
                    /*insert a input field that will hold the current array item's value:*/
                    b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                    /*execute a function when someone clicks on the item value (DIV element):*/
                    b.addEventListener("click", function(e) {
                        /*insert the value for the autocomplete text field:*/
                        inp.value = this.getElementsByTagName("input")[0].value;
                        /*close the list of autocompleted values,
                        (or any other open lists of autocompleted values:*/
                        closeAllLists();
                    });
                    a.appendChild(b);
                }
            }
        });
        inp.addEventListener("focus", function(e) {
            var a, b, i, val = this.value;
            /*close any already open lists of autocompleted values*/
            closeAllLists();
            if (!val) { return false; }
            currentFocus = -1;
            /*create a DIV element that will contain the items (values):*/
            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "search-menu");
            a.setAttribute("class", "search-menu");
            /*append the DIV element as a child of the autocomplete container:*/
            this.parentNode.appendChild(a);
            /*for each item in the array...*/
            for (i = 0; i < arr.length; i++) {
                /*check if the item starts with the same letters as the text field value:*/
                if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                    /*create a DIV element for each matching element:*/
                    b = document.createElement("DIV");
                    b.setAttribute("class", "search-menu__item");
                    /*make the matching letters bold:*/
                    b.innerHTML = "<b>" + arr[i].substr(0, val.length) + "</b>";
                    b.innerHTML += arr[i].substr(val.length);
                    /*insert a input field that will hold the current array item's value:*/
                    b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                    /*execute a function when someone clicks on the item value (DIV element):*/
                    b.addEventListener("click", function(e) {
                        /*insert the value for the autocomplete text field:*/
                        inp.value = this.getElementsByTagName("input")[0].value;
                        /*close the list of autocompleted values,
                        (or any other open lists of autocompleted values:*/
                        closeAllLists();
                    });
                    a.appendChild(b);
                }
            }
        });
        /*execute a function presses a key on the keyboard:*/
        inp.addEventListener("keydown", function(e) {
            var x = document.getElementById(this.id + "search-menu");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) {
                /*If the arrow DOWN key is pressed,
                increase the currentFocus variable:*/
                currentFocus++;
                /*and and make the current item more visible:*/
                addActive(x);
            } else if (e.keyCode == 38) { //up
                /*If the arrow UP key is pressed,
                decrease the currentFocus variable:*/
                currentFocus--;
                /*and and make the current item more visible:*/
                addActive(x);
            } else if (e.keyCode == 13) {
                /*If the ENTER key is pressed, prevent the form from being submitted,*/
                e.preventDefault();
                if (currentFocus > -1) {
                    /*and simulate a click on the "active" item:*/
                    if (x) x[currentFocus].click();
                }
            }
        });

        function addActive(x) {
            /*a function to classify an item as "active":*/
            if (!x) return false;
            /*start by removing the "active" class on all items:*/
            removeActive(x);
            if (currentFocus >= x.length) currentFocus = 0;
            if (currentFocus < 0) currentFocus = (x.length - 1);
            /*add class "autocomplete-active":*/
            x[currentFocus].classList.add("active");
        }

        function removeActive(x) {
            /*a function to remove the "active" class from all autocomplete items:*/
            for (var i = 0; i < x.length; i++) {
                x[i].classList.remove("active");
            }
        }

        function closeAllLists(elmnt) {
            /*close all autocomplete lists in the document,
            except the one passed as an argument:*/
            var x = document.getElementsByClassName("search-menu");
            for (var i = 0; i < x.length; i++) {
                if (elmnt != x[i] && elmnt != inp) {
                    x[i].parentNode.removeChild(x[i]);
                }
            }
        }
        /*execute a function when someone clicks in the document:*/
        document.addEventListener("click", function(e) {
            closeAllLists(e.target);
        });
    }

    /*An array containing all the country names in the world:*/
    var countries = ["Разработка Landing page", "Разработка интернет-магазин", "Разработка презентация", "Разработка брендбук"];

    $(".search input").focus(function() { // задаем функцию при получении фокуса элементом <input>
        $(this).parent().addClass('active')
        $(this).val('Разработка')
    });

    $(".search input").blur(function() { // задаем функцию при получении фокуса элементом <input>
        $(this).parent().removeClass('active')
    });

    /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
    autocomplete(document.getElementById("js-search"), countries);

    $('.search-icon__close').click(function() {
        $(this).closest('.search').find('#js-search').val('')
    })



});

/**
 * PRELOADER FUNCTION
 *
 * @returns {boolean}
 */


function preloading() {
    var percentage = 0;
    var i = 0;

    // $('.body-inner .navbar').addClass('navbar-show')

    function timer() {
        var str = ++i + "%";
        $('.mainpage #status').text(str);
        if (i === 100) clearInterval(timerId);
    }
    var timerId = setInterval(timer, 25);
    var loadLine = $('.mainpage #load-line');
    loadLine.animate({ width: "+=" + 100 + "%" }, 3400, function() {
        var preloader = $('.mainpage #preloader');
        preloader.animate({ opacity: 0 }, 700, function() {
            preloader.remove();
            // $('body').removeClass('body-inner')
            // $('.body-inner .navbar').removeClass('navbar-show')
        });
    });
    return true;
}

function preloading2() {
    var percentage = 0;
    var i = 0;

    // $('.body-inner .navbar').addClass('navbar-show')

    function timer() {
        var str = ++i + "%";
        $('.innerpage #status').text(str);
        if (i === 100) clearInterval(timerId);
    }
    var timerId = setInterval(timer, 25);
    var loadLine = $('.innerpage #load-line');
    loadLine.animate({ width: "+=" + 100 + "%" }, 1500, function() {
        var preloader = $('.innerpage #preloader');
        preloader.animate({ opacity: 0 }, 700, function() {
            preloader.remove();
            // $('body').removeClass('body-inner')
            // $('.body-inner .navbar').removeClass('navbar-show')
        });
    });
    return true;
}

$(function() {
    preloading();
    preloading2();
});


$(window).on("load", function() {

    $("a[rel='m_PageScroll2id']").mPageScroll2id({
        highlightSelector: "#fp-nav a",
        highlightClass: "current",
        offset: 110,
        forceSingleHighlight: true,

    });

    $(window).scroll(function() {
        if ($('.section-wrap:last-child').hasClass('mPS2id-target')) {
            $(".fp-nav-wrap .next").addClass('up')
            $(".fp-nav-wrap .next a span").text('Вверх')
            $(".fp-nav-wrap .next").click(function(e) {
                e.preventDefault();

                $.mPageScroll2id("scrollTo", 'body');

            });

        } else {
            $(".fp-nav-wrap .next").removeClass('up')
            $(".fp-nav-wrap .next a span").text('Далее')
            $(".fp-nav-wrap .next").click(function(e) {
                e.preventDefault();

                var to2 = $('.mPS2id-target').next().attr("id");
                $.mPageScroll2id("scrollTo", to2);

            });
        }


    });

    $(".section-wrap .scroll-down").click(function(e) {
        e.preventDefault();

        var to = $('.mPS2id-target').next().attr("id");
        $.mPageScroll2id("scrollTo", to);

    });

});


new WOW().init({
    mobile: false,
});