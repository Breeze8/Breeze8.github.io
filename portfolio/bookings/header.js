// LANGUAGE
$(function () {

    // DELAY HEADER DROPDOWNS FOR EDGE

    setTimeout(function () {

        $('.search-dropdown, .language-dropdown, .dropdown-city, .dropdown-date').addClass('loaded')

    }, 900);


    $('.language-toggler').click(function (e) {

        $('.language-dropdown').toggleClass('open');
        $(this).toggleClass('open');
        e.stopPropagation();
    })

    $('.language-dropdown li').click(function () {
        $('.language-dropdown li.active').removeClass('active')
        $(this).addClass('active')
        var languageText = $(this).text();
        $('.language-toggler').text(languageText);

        $('.language-dropdown').removeClass('open');
        $('.language-toggler').removeClass('open');

    })

    $(document).on('click', function (e) {
        var container = $(".language-dropdown");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.removeClass('open');
            $('.language-toggler').removeClass('open');
        }
    });


    // CUSTOM SELECT

    (function ($) {

        var Defaults = $.fn.select2.amd.require('select2/defaults');

        $.extend(Defaults.defaults, {
            searchInputPlaceholder: ''
        });

        var SearchDropdown = $.fn.select2.amd.require('select2/dropdown/search');

        var _renderSearchDropdown = SearchDropdown.prototype.render;

        SearchDropdown.prototype.render = function (decorated) {

            // invoke parent method
            var $rendered = _renderSearchDropdown.apply(this, Array.prototype.slice.apply(arguments));

            this.$search.attr('placeholder', this.options.get('searchInputPlaceholder'));

            return $rendered;
        };

    })(window.jQuery);

    $(".js-select").select2({
        searchInputPlaceholder: 'Поиск'
    });

    $('.js-select').on('select2:open', function (e) {
        $('.select2-dropdown').hide();
        setTimeout(function () {
            $('.select2-dropdown').fadeIn(300);
        }, 200);
        $('.select2-results__options').mCustomScrollbar('destroy');
        setTimeout(function () {
            $('.select2-results__options').mCustomScrollbar({
                axis: "y",
                live: "on",
                mouseWheel: {preventDefault: true},
                mouseWheelPixels: 120,
                advanced: {updateOnContentResize: true}
            });
        }, 0);
    });

    $('.js-select').on('select2:close', function (e) {
        // $('.select2-dropdown').hide();
        setTimeout(function () {
            $('.select2-dropdown').fadeOut(300);
        }, 200);
    });

    $.magnificPopup.instance._onFocusIn = function (e) {
        // Do nothing if target element is select2 input
        if ($(e.target).hasClass('select2-search__field')) {
            return true;
        }
        // Else call parent method
        $.magnificPopup.proto._onFocusIn.call(this, e);
    }

    // SEARCH CITY

    $(".search-city__search input").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".search-city__content .form__checkbox").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)

            if ($(".search-city__content .mCSB_container").children(':visible').length == 0) {
                $(".search-city__content .mCSB_container").prepend('<div class="search-city__empty">Ничего не найдено</div>')
            } else {
                $('.search-city__empty').remove()
            }

        });
    });

    // SEARCH DROPDOWN

    /*$(".search__form input").focusin(function () {
        $(".search-dropdown").addClass('open');
    }).focusout(function () {
        $(".search-dropdown").removeClass('open');
    });*/

});
