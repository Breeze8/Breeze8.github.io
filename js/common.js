$(function() {

    // ACCORDION

    $('.accordion a').click(function(j) {
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