// RESPONSIVE MENU

if ($('.header-bottom').length > 0) {;
    (function() {
        var $el = {
            headerChoose: $('.header-choose'),
            warp: $('.main-nav'),
            get items() { return $('.main-nav > .main-nav__item:not(.more)') },
            showMoreItems: $('.main-nav > .main-nav__item.more'),
            showMoreItemsContent: $('.main-nav__dropdown'),
            btn: $('.main-nav__item-submit'),
            tmpContainer: _makeTmpContainerAndGetElement()
        };
        var mainNav = {
            items: _getNavItems($el.items)
        };
        var timeoutID = null;

        $(document).on('change', '.main-nav input[type="checkbox"]', function() {
            if ($('.main-nav input[type="checkbox"]:checked').length) {
                $el.btn.addClass('open');
            } else {
                $el.btn.removeClass('open');
            }
        });

        _removeNavItems($el.items);
        _resolve();
        $(window).on('resize', _resolve);

        function _resolve() {
            clearTimeout(timeoutID);

            timeoutID = setTimeout(function() {
                _removeNavItems($el.items);
                $el.showMoreItemsContent.html('');

                setTimeout(function() {
                    var bufferWidth = 0;
                    var itemMarginLeft = _getMarginLeftBetweenItems(mainNav.items);
                    var warpWidth = $el.warp.parent().outerWidth() - _getHeaderChooseWidth() - itemMarginLeft;
                    var needShowMoreItems = false;

                    mainNav.items.forEach(function(item) {
                        bufferWidth += _getWidthItem(item) + itemMarginLeft;

                        item = $(item).css('opacity', 1);

                        if (bufferWidth < warpWidth) {
                            $el.showMoreItems.before(item);
                        } else {
                            $el.showMoreItemsContent.append(item);
                            needShowMoreItems = true;
                        }
                    });

                    if (needShowMoreItems) {
                        $el.showMoreItems.show();
                    } else {
                        $el.showMoreItems.hide();
                    }
                }, 100);
            }, 100);
        }

        function _getHeaderChooseWidth() {
            $el.tmpContainer.html($el.headerChoose.get(0).outerHTML);

            return $el.tmpContainer.outerWidth();
        }

        function _getWidthItem($item) {
            $el.tmpContainer.html('');
            $el.tmpContainer.append($item);

            return $el.tmpContainer.children('*').outerWidth();
        }

        function _getMarginLeftBetweenItems(items) {
            $el.tmpContainer.html('');

            $el.tmpContainer.append(items[0]);
            $el.tmpContainer.append(items[1]);

            return parseFloat($el.tmpContainer.children('*').eq(1).css('margin-left')) || 0;
        }

        function _getNavItems($el) {
            var arr = [];

            $el.each(function() {
                arr.push(this.outerHTML);
            });

            return arr;
        }

        function _removeNavItems($el) {
            $el.remove();
        }

        function _makeTmpContainerAndGetElement() {
            var $el = $('<div/>', {
                id: 'tmp-container-0000',
                css: {
                    'position': 'fixed',
                    'top': '-9999px',
                    'left': '-9999px'
                }
            });

            $('body').append($el);

            return $('#tmp-container-0000');
        }
    })();
}