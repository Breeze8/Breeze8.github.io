$(function() {

    // var PriorityNav = {

    //     // used multiple times, so saving.
    //     menu: $(".main-nav"),
    //     allNavElements: $(".main-nav .main-nav__item:not(.more)"),

    //     init: function() {
    //         this.bindUIActions();
    //         this.setupMenu();
    //     },

    //     setupMenu: function() {

    //         // Checking top position of first item (sometimes changes)
    //         var firstPos = $(".main-nav > div:first").position();

    //         // Empty collection in which to put menu items to move
    //         var wrappedElements = $();

    //         // Used to snag the previous menu item in addition to ones that have wrapped
    //         var first = true;

    //         // Loop through all the nav items...
    //         PriorityNav.allNavElements.each(function(i) {

    //             var el = $(this);

    //             // ...in which to find wrapped elements
    //             var pos = el.position();

    //             if (pos.top !== firstPos.top) {

    //                 // If element is wrapped, add it to set
    //                 wrappedElements = wrappedElements.add(el);
              
    //                 // Add the previous one too, if first
    //                 if (first) {
    //                     wrappedElements = wrappedElements.add(PriorityNav.allNavElements.eq(i - 1));
    //                     first = false;
    //                 }
    //             }
    //         });

    //         if (wrappedElements.length) {

    //             // Clone set before altering
    //             var newSet = wrappedElements.clone();

    //             // Hide ones that we're moving
    //             wrappedElements.addClass("hide");

    //             // Add wrapped elements to dropdown
    //             $(".main-nav__dropdown").append(newSet);

    //             // Show new menu
    //             $(".more").addClass("show-inline-block");

    //             // Make overflow visible again so dropdown can be seen.
    //             $(".main-nav").css("overflow", "visible");

    //         }
    //     },

    //     tearDown: function() {
    //         $(".main-nav__dropdown").empty();
    //         $(".main-nav").removeClass("show-inline-block");
    //         PriorityNav.allNavElements.removeClass("hide");
    //     },

    //     bindUIActions: function() {
    //         // $(".overflow-nav-title").on("click", function() {
    //         //     $(".overflow-nav-list").toggleClass("show");
    //         // });

    //         $(window)
    //             .resize(function() {
    //                 PriorityNav.menu.addClass("resizing");
    //             })
    //             .resize(_.debounce(function() {
    //                 PriorityNav.tearDown();
    //                 PriorityNav.setupMenu();
    //                 PriorityNav.menu.removeClass("resizing");
    //             }, 500));
    //     }

    // }

    // PriorityNav.init();

    // YOUTUBE PREVIEW

    var $ = jQuery,
        players = [],
        queue = [];

    var timerId;

    function onPlayerStateChange(event) {

        if (event.data == 1) {
            clearTimeout(timerId);
            $('.c-how__video-wrap').addClass('show');
            $('.event-main__for-slide').addClass('show');
            if($('#modalEvent').length > 0) {
                $('.modal__event-for-slide').addClass('show');
            }
            playVideo(event.target);
        }

        if (event.data == 2) {

            timerId = setTimeout(function() {
                $('.c-how__video-wrap').removeClass('show');
                $('.event-main__for-slide').removeClass('show');
                if($('#modalEvent').length > 0) {
                    $('.modal__event-for-slide').removeClass('show');
                }
                pauseVideo();
            }, 100);

        }

        if (event.data == 3) {
            clearTimeout(timerId);
            $('.c-how__video-wrap').addClass('show');
            $('.event-main__for-slide').addClass('show');
            if($('#modalEvent').length > 0) {
                $('.modal__event-for-slide').addClass('show');
            }
            playVideo(event.target);

        }
    }

    function pauseVideo() {
        players.forEach(function(player) {
            player.pauseVideo();
        })
    }

    function playVideo(player) {
        player.playVideo();
    }


    function initVideo() {

        var Videos = function() {

            function Videos() {};

            Videos.prototype.add = function($video) {
                queue.push($video);
            };


            Videos.prototype.loadApi = function() {

                $.getScript("//www.youtube.com/iframe_api", function() {

                    window.onYouTubeIframeAPIReady = function() {
                        queue.forEach(function($video) {

                            var player = new YT.Player($video.get(0), {
                                'width': "100%",
                                'height': "100%",
                                'videoId': $video.data("id"),
                                'events': {
                                    'onStateChange': onPlayerStateChange
                                }
                            });
                            players.push(player);
                        });
                    };
                });
            };
            return Videos;
        }();

        var videos = new Videos();
        $('.video__player').each(function() {
            videos.add($(this));
        });
        videos.loadApi();
    };

    initVideo();

    $('.js-video-button').on('click', function(event) {
        event.preventDefault();
        $(this).next('iframe')[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    });

})