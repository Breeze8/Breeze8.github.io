(function ($) {
    'use strict';

    var $window = $(window);
    var $document = $(document);
    // /* ---------------------------------------------- /*
    //  * Animated header on scroll
    //  /* ---------------------------------------------- */
    //  function animatedHeader() {
    //     var docElem = document.documentElement;
    //     var header = document.querySelector( '.navigation' );
    //     var didScroll = false;
    //     var changeHeaderOn = 100;
    //     function init() {
    //         $window.on( 'scroll', function( event ) {
    //             if( !didScroll ) {
    //                 didScroll = true;
    //                 setTimeout( scrollPage, 80  );
    //             }
    //         });
    //     }
    //     function scrollPage() {
    //         var sy = scrollY();
    //         if ( sy >= changeHeaderOn ) {
    //             classie.add( header, 'nav-sticky' );
    //         }
    //         else {
    //             classie.remove( header, 'nav-sticky' );
    //         }
    //         didScroll = false;
    //     }
    //     function scrollY() {
    //         return window.pageYOffset || docElem.scrollTop;
    //     }
    //     init();
    // }

    $(window).scroll(function() {

        var sticky1 = $('.navigation'),
            scroll1 = $(window).scrollTop();

        if (scroll1 >= 50) {
            sticky1.addClass('nav-sticky');
        } else {
            sticky1.removeClass('nav-sticky');
        }

    });

$(document).ready(function() {

    /* ---------------------------------------------- /*
     * Show/Hide menu
     /* ---------------------------------------------- */

    $('.show-menu-btn').on('click', function() {
        $(this).toggleClass('open');
        $('.navigation').toggleClass('active');
        $('.overlay-menu').toggleClass('active');
        $('body').toggleClass('menu-opened');
        return false;
    });
    $('.overlay-nav li a').on('click', function () {
        $('.navigation').removeClass('active');
        $('.show-menu-btn').removeClass('open');
        $('.overlay-menu').removeClass('active');
        $('body').removeClass('menu-opened');
        return false;
    });
    $(window).keydown(function(e) {
        if ($('.overlay-menu').hasClass('active')) {
            if (e.which === 27) {
                $('.navigation').removeClass('active');
                $('.show-menu-btn').removeClass('open');
                $('.overlay-menu').removeClass('active');
                $('body').removeClass('menu-opened');
            }
        }
    });

    $('.reviews-slider').slick({
        rows: false,
        slidesToShow: 1,
        // adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    dots: true,
                }
            }
        ]
    })

    // var stHeight = $('.reviews-slider .slick-track').height();
    // $('.reviews-slider .slick-slide').css('height', stHeight + 'px');

});

    /**
 * PRELOADER FUNCTION
 *
 * @returns {boolean}
 */
 function preloading(){
    var percentage = 0;
    var i = 0;
    function timer(){
        var str = ++i+"%";
        $('#status').text(str);
        if (i === 100) clearInterval(timerId);
    }
    var timerId = setInterval(timer,30);
    var $loadLine = $('#load-line');
    $loadLine.animate({width: "+="+100+"%"}, 1000, function(){
        var $preloader = $('#preloader');
        $preloader.animate({opacity:0}, 700, function(){
            $preloader.remove();
            $('.telegrams').addClass('shakes')
            $('.fixed-btn').addClass('active')
        });
    });
    return true;
}
$document.on('ready', function(e){
    preloading();
    // animatedHeader();

});
 $(window).on('load', function (e) {
/* ---------------------------------------------- /*
         * click navs
         /* ---------------------------------------------- */

         var $clickfunc = $(".home-navigation li a");
         $clickfunc.on('click', function() {
            $clickfunc.removeClass("current_page_item").not($clickfunc).add(this).toggleClass("current_page_item");
        });
     });

/* ---------------------------------------------- /*
     * Scroll Animation
     /* ---------------------------------------------- */
     $("a.scrollto").on('click', function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 700);
        return false;
    });


     /* Imagefill init */
     if($('div').is('.cover-box')){
        $('.cover-box').imagefill({
            throttle: 100 / 60
        });
    }

})(jQuery);
/**
 * Created by Anna on 24.05.2017.
 */
/* ---------------------------------------------- /*
 * Ripple effect
 /* ---------------------------------------------- */

//  var Waves = Waves || {};
//  var $$ = document.querySelectorAll.bind(document);
//
// // Find exact position of element
// function isWindow(obj) {
//     return obj !== null && obj === obj.window;
// }
//
// function getWindow(elem) {
//     return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
// }
//
// function offset(elem) {
//     var docElem, win,
//     box = {top: 0, left: 0},
//     doc = elem && elem.ownerDocument;
//
//     docElem = doc.documentElement;
//
//     if (typeof elem.getBoundingClientRect !== typeof undefined) {
//         box = elem.getBoundingClientRect();
//     }
//     win = getWindow(doc);
//     return {
//         top: box.top + win.pageYOffset - docElem.clientTop,
//         left: box.left + win.pageXOffset - docElem.clientLeft
//     };
// }
//
// function convertStyle(obj) {
//     var style = '';
//
//     for (var a in obj) {
//         if (obj.hasOwnProperty(a)) {
//             style += (a + ':' + obj[a] + ';');
//         }
//     }
//
//     return style;
// }
//
// var Effect = {
//
//     // Effect delay
//     duration: 750,
//
//     show: function(e, element) {
//
//         // Disable right click
//         if (e.button === 2) {
//             return false;
//         }
//
//         var el = element || this;
//
//         // Create ripple
//         var ripple = document.createElement('div');
//         ripple.className = 'waves-ripple';
//         el.appendChild(ripple);
//
//         // Get click coordinate and element witdh
//         var pos         = offset(el);
//         var relativeY   = (e.pageY - pos.top);
//         var relativeX   = (e.pageX - pos.left);
//         var scale       = 'scale('+((el.clientWidth / 100) * 10)+')';
//
//         // Support for touch devices
//         if ('touches' in e) {
//             relativeY   = (e.touches[0].pageY - pos.top);
//             relativeX   = (e.touches[0].pageX - pos.left);
//         }
//
//         // Attach data to element
//         ripple.setAttribute('data-hold', Date.now());
//         ripple.setAttribute('data-scale', scale);
//         ripple.setAttribute('data-x', relativeX);
//         ripple.setAttribute('data-y', relativeY);
//
//         // Set ripple position
//         var rippleStyle = {
//             'top': relativeY+'px',
//             'left': relativeX+'px'
//         };
//
//         ripple.className = ripple.className + ' waves-notransition';
//         ripple.setAttribute('style', convertStyle(rippleStyle));
//         ripple.className = ripple.className.replace('waves-notransition', '');
//
//         // Scale the ripple
//         rippleStyle['-webkit-transform'] = scale;
//         rippleStyle['-moz-transform'] = scale;
//         rippleStyle['-ms-transform'] = scale;
//         rippleStyle['-o-transform'] = scale;
//         rippleStyle.transform = scale;
//         rippleStyle.opacity   = '1';
//
//         rippleStyle['-webkit-transition-duration'] = Effect.duration + 'ms';
//         rippleStyle['-moz-transition-duration']    = Effect.duration + 'ms';
//         rippleStyle['-o-transition-duration']      = Effect.duration + 'ms';
//         rippleStyle['transition-duration']         = Effect.duration + 'ms';
//
//         rippleStyle['-webkit-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
//         rippleStyle['-moz-transition-timing-function']    = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
//         rippleStyle['-o-transition-timing-function']      = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
//         rippleStyle['transition-timing-function']         = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
//
//         ripple.setAttribute('style', convertStyle(rippleStyle));
//     },
//
//     hide: function(e) {
//         TouchHandler.touchup(e);
//
//         var el = this;
//         var width = el.clientWidth * 1.4;
//
//         // Get first ripple
//         var ripple = null;
//         var ripples = el.getElementsByClassName('waves-ripple');
//         if (ripples.length > 0) {
//             ripple = ripples[ripples.length - 1];
//         } else {
//             return false;
//         }
//
//         var relativeX   = ripple.getAttribute('data-x');
//         var relativeY   = ripple.getAttribute('data-y');
//         var scale       = ripple.getAttribute('data-scale');
//
//         // Get delay beetween mousedown and mouse leave
//         var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
//         var delay = 350 - diff;
//
//         if (delay < 0) {
//             delay = 0;
//         }
//
//         // Fade out ripple after delay
//         setTimeout(function() {
//             var style = {
//                 'top': relativeY+'px',
//                 'left': relativeX+'px',
//                 'opacity': '0',
//
//                 // Duration
//                 '-webkit-transition-duration': Effect.duration + 'ms',
//                 '-moz-transition-duration': Effect.duration + 'ms',
//                 '-o-transition-duration': Effect.duration + 'ms',
//                 'transition-duration': Effect.duration + 'ms',
//                 '-webkit-transform': scale,
//                 '-moz-transform': scale,
//                 '-ms-transform': scale,
//                 '-o-transform': scale,
//                 'transform': scale,
//             };
//
//             ripple.setAttribute('style', convertStyle(style));
//
//             setTimeout(function() {
//                 try {
//                     el.removeChild(ripple);
//                 } catch(e) {
//                     return false;
//                 }
//             }, Effect.duration);
//         }, delay);
//     },
//
//     // Little hack to make <input> can perform waves effect
//     wrapInput: function(elements) {
//         for (var a = 0; a < elements.length; a++) {
//             var el = elements[a];
//
//             if (el.tagName.toLowerCase() === 'input') {
//                 var parent = el.parentNode;
//
//                 // If input already have parent just pass through
//                 if (parent.tagName.toLowerCase() === 'i' && parent.className.indexOf('waves-effect') !== -1) {
//                     continue;
//                 }
//
//                 // Put element class and style to the specified parent
//                 var wrapper = document.createElement('i');
//                 wrapper.className = el.className + ' waves-input-wrapper';
//
//                 var elementStyle = el.getAttribute('style');
//
//                 if (!elementStyle) {
//                     elementStyle = '';
//                 }
//
//                 wrapper.setAttribute('style', elementStyle);
//
//                 el.className = 'waves-button-input';
//                 el.removeAttribute('style');
//
//                 // Put element as child
//                 parent.replaceChild(wrapper, el);
//                 wrapper.appendChild(el);
//             }
//         }
//     }
// };


/**
 * Disable mousedown event for 500ms during and after touch
 */
//  var TouchHandler = {
//     /* uses an integer rather than bool so there's no issues with
//      * needing to clear timeouts if another touch event occurred
//      * within the 500ms. Cannot mouseup between touchstart and
//      * touchend, nor in the 500ms after touchend. */
//      touches: 0,
//      allowEvent: function(e) {
//         var allow = true;
//
//         if (e.type === 'touchstart') {
//             TouchHandler.touches += 1; //push
//         } else if (e.type === 'touchend' || e.type === 'touchcancel') {
//             setTimeout(function() {
//                 if (TouchHandler.touches > 0) {
//                     TouchHandler.touches -= 1; //pop after 500ms
//                 }
//             }, 500);
//         } else if (e.type === 'mousedown' && TouchHandler.touches > 0) {
//             allow = false;
//         }
//
//         return allow;
//     },
//     touchup: function(e) {
//         TouchHandler.allowEvent(e);
//     }
// };


/**
 * Delegated click handler for .waves-effect element.
 * returns null when .waves-effect element not in "click tree"
 */
//  function getWavesEffectElement(e) {
//     if (TouchHandler.allowEvent(e) === false) {
//         return null;
//     }
//
//     var element = null;
//     var target = e.target || e.srcElement;
//
//     while (target.parentElement !== null) {
//         if (!(target instanceof SVGElement) && target.className.indexOf('waves-effect') !== -1) {
//             element = target;
//             break;
//         } else if (target.classList.contains('waves-effect')) {
//             element = target;
//             break;
//         }
//         target = target.parentElement;
//     }
//
//     return element;
// }

/**
 * Bubble the click and show effect if .waves-effect elem was found
 */
//  function showEffect(e) {
//     var element = getWavesEffectElement(e);
//
//     if (element !== null) {
//         Effect.show(e, element);
//
//         if ('ontouchstart' in window) {
//             element.addEventListener('touchend', Effect.hide, false);
//             element.addEventListener('touchcancel', Effect.hide, false);
//         }
//
//         element.addEventListener('mouseup', Effect.hide, false);
//         element.addEventListener('mouseleave', Effect.hide, false);
//     }
// }

// Waves.displayEffect = function(options) {
//     options = options || {};
//
//     if ('duration' in options) {
//         Effect.duration = options.duration;
//     }
//
//     //Wrap input inside <i> tag
//     Effect.wrapInput($$('.waves-effect'));
//
//     if ('ontouchstart' in window) {
//         document.body.addEventListener('touchstart', showEffect, false);
//     }
//
//     document.body.addEventListener('mousedown', showEffect, false);
// };

/**
 * Attach Waves to an input element (or any element which doesn't
 * bubble mouseup/mousedown events).
 *   Intended to be used with dynamically loaded forms/inputs, or
 * where the user doesn't want a delegated click handler.
 */
//  Waves.attach = function(element) {
//     //FUTURE: automatically add waves classes and allow users
//     // to specify them with an options param? Eg. light/classic/button
//     if (element.tagName.toLowerCase() === 'input') {
//         Effect.wrapInput([element]);
//         element = element.parentElement;
//     }
//
//     if ('ontouchstart' in window) {
//         element.addEventListener('touchstart', showEffect, false);
//     }
//
//     element.addEventListener('mousedown', showEffect, false);
// };
//
// window.Waves = Waves;
//
// document.addEventListener('DOMContentLoaded', function() {
//     Waves.displayEffect();
// }, false);



