$(function() {

    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('.drop');

        $(this).closest('.accordion').find('.drop').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });

    $('.reviews-slider').slick({
        rows: false,
        arrows: false,
        dots: true,
    })

    $('.btn-modal').magnificPopup({
      type:'inline',
      removalDelay: 500, //delay removal by X to allow out-animation
      fixedContentPos: true,
      callbacks: {
        beforeOpen: function() {
           this.st.mainClass = this.st.el.attr('data-effect');
        },
        open: function() {
            $('body').addClass('fixed')
        },
        close: function() {
            $('body').removeClass('fixed')
        },
      },
      midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });

    $('.modal__close').click(function() {
        $.magnificPopup.close();
    });

    $('.hamburger').click(function() {
          $(this).toggleClass('is-active');
          $('.main-nav').slideToggle(function() {
              if ($(this).css('display') === 'none') {
                  $(this).removeAttr('style');
              }
          });
      });

});
