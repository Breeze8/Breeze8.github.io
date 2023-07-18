// import {delay} from "../helpers";
// import {errorHandlerWithoutForm, formatDateToReadable} from "./helpers";

// const moduleName = 'search';

let $modalSearch, $filter, $fields, $datePicker, datePicker, dates;

// export function search() {
//     boot();
//     modalSearch();
//     filter();
// }

function boot() {
    $datePicker = $('#datepicker-bottom, #datepicker-fixed');

    $.get('/json/event_dates', (response) => {
        dates = response.dates;
        bootAirPicker();
    });
}

function bootAirPicker() {
    datePicker = $datePicker.datepicker({
        range: true,
        autoClose: false,
        navTitles: {
            days: 'MM',
            months: 'yyyy',
            years: 'yyyy1 - yyyy2'
        },
        onRenderCell: (date, cellType) => {
            if(cellType == 'day' && dates.indexOf(formatDateToReadable(date)) !== -1) {
                return {
                    classes: 'selected-day',
                }
            }
        },
        onSelect: (formattedDate, date) => {
            let $btn = $('.datepicker').find('.btn');

            date.length > 0 ? $btn.removeClass('disabled') : $btn.addClass('disabled');
            $('#datepicker-bottom').parent().find('[name="date"]').val(formattedDate);
        }
    });

    let currentValue = $datePicker.parent().find('[name="date"]').val();

    if(typeof currentValue === 'string' && currentValue.length) {
        currentValue = currentValue.split(',');

        currentValue.forEach(i => {
            let values = i.split('.'),
                date = new Date(parseInt(values[2]), parseInt(values[1]) - 1, parseInt(values[0]));

            datePicker.data('datepicker').selectDate(date);
        });
    }

    let $datePickerFooter = $('<div />', {
            class: 'datepicker-footer'
        }),
        $datePickerLinks = $('<div />', {
            class: 'datepicker-links'
        });

    $.each($datePicker.parent().find('[name="date"]').data('links'), (k, i) => {
        $('<a />', {
            class: 'datepicker-links__item',
            href: i.link
        }).text(i.date).appendTo($datePickerLinks);
    });

    $datePickerLinks.appendTo($datePickerFooter);
    $('<button />', {
        class: 'disabled btn btn--red w100'
    }).text('Применить').appendTo($datePickerFooter);

    $('.datepicker').append($datePickerFooter);
}

function modalSearch() {
    $modalSearch = $('[data-modal-search]');

    $modalSearch
        .on('keyup', 'input[name=query]', delay(onModalSearchKeyupEvent, 350))
        .on('submit', '.search__form', onModalSearchSubmitEvent);
}

function filter() {
    $filter = $('[data-filter]');

    if(!$filter.length) {
        return false;
    }

    $fields = $('[data-fields]');

    $filter
        .on('click', '.btn.btn--red:not(.disabled)', onApplyFilterEvent);

    if($fields.length) {
        $fields
            .on('click', '> div > svg', onDeleteFilterFieldEvent)
    }
}

function onModalSearchKeyupEvent() {
    $modalSearch.find('.search__form [type=submit]').trigger('click');
}

function onModalSearchSubmitEvent(e) {
    e.preventDefault();

    let $this = $(e.currentTarget),
        $button = $this.find('[type=submit]'),
        $dropdown = $modalSearch.find('.search-dropdown'),
        value = $this.find('input').val();

    $dropdown.removeClass('open');

    if(value.length < 3 || value.length > 64) {
        return false;
    }

    $button.prop('disabled', true);

    $.ajax({
        type: 'post',
        url: $this.attr('action'),
        data: $this.serialize(),
        dataType: 'json',
        success: (response) => {
            $button.prop('disabled', false);
            $dropdown.find('.search-dropdown__content')
                .mCustomScrollbar('destroy')
                .html(response.view)
                .mCustomScrollbar({
                    axis: "y",
                    live: "on",
                    mouseWheelPixels: 120,
                    mouseWheel: { preventDefault: true },
                });
            $dropdown.addClass('open');

            let $footer = $('.search-dropdown__footer'),
                $detail = $footer.find('a');

            if(response.total) {
                $detail.find('span').text(response.total);
                $detail.attr('href', response.detail);
                $footer.removeClass('d-none');
            }
            else {
                $footer.addClass('d-none');
            }
        },
        error: errorHandlerWithoutForm
    });
}

function onApplyFilterEvent(e) {
    e.preventDefault();

    let $container = $(e.currentTarget).parents('[data-filter]'),
        data = $container.find('input').serialize(),
        route = $container.data('route') + '?' + data;

    if(!route.length) {
        return false;
    }

    location.href = route;
}

function onDeleteFilterFieldEvent(e) {
    e.preventDefault();

    let $this = $(e.currentTarget).parent(),
        data = {},
        link;

    $fields.find('> div:not([data-index="' + $this.data('index') + '"])').each((k, i) => {
        let input = i.dataset.input;

        if(input.endsWith('[]')) {
            input = input.substring(0, input.length - 2);

            if(typeof data[input] !== 'object') {
                data[input] = [];
            }

            data[input].push(i.dataset.value);
        }
        else {
            data[input] = i.dataset.value;
        }
    });

    link = Object.keys(data).length ? location.pathname + '?' + $.param(data) : '/';
    location.href = link;
}