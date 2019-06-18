$(function() {

    $('.modal-btn-registr').click(function(){
        $('.modal-tab-item:first-child').hide();
        $('.modal-tab-item:last-child').show();
        $('.modal-tab:first-child').removeClass('active');
        $('.modal-tab:last-child').addClass('active');
    })

    $('.modal-btn-login').click(function(){
        $('.modal-tab-item:first-child').show();
        $('.modal-tab-item:last-child').hide();
        $('.modal-tab:first-child').addClass('active');
        $('.modal-tab:last-child').removeClass('active');
    })

    $(".form-password__toggle").click(function() {

      var input = $('#password');
          if (input.attr("type") == "password") {
            input.attr("type", "text");
          } else {
            input.attr("type", "password");
          }
    });

    $('.form__input-wrap input').on('focus', function(){
        $(this).parent().find('label').hide();
    })

   $('.form__input-wrap input').on('blur', function(){
        var inputValue = $(this).val();
        if ( inputValue.length < 0 || inputValue.length == 0 ) {
            $(this).parent().find('label').show();
        }
    })

    // CUSTOM SELECT

    $(".js-select").select2();

    $('.scroll[href*="#"]').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

    $('.hamburger').on('click', function() {
        $('.hamburger').toggleClass('active');
        $('.header__mobile').toggleClass('open');
        $('body').toggleClass('hidden')
    })

    $(".tab_item").not(":first").hide();
    $(".calculate .tab").click(function() {
        $(".calculate .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).show()
    }).eq(0).addClass("active");

     $(".modal-tab-item").not(":first").hide();
    $(".modal-tab").click(function() {
        $(".modal-tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".modal-tab-item").hide().eq($(this).index()).show()
    }).eq(0).addClass("active");

    $('.modal-btn').magnificPopup({
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

    var $status = $('.counter');
    var $slickElement = $('.stat-slider');

    $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + ' / ' + slick.slideCount);
    });

    $('.stat-slider').slick({
        rows: false,
        slidesToScroll: 1,
        arrows: false,
    })

    $('.slider-nav__left').click(function() {
        $('.stat-slider').slick('slickPrev');
    })
    $('.slider-nav__right').click(function() {
        $('.stat-slider').slick('slickNext');
    })


    var $slider = $('.main-slider');

    if ($slider.length) {
      var currentSlide;
      var slidesCount;
      var sliderCounter = $('.counter-main')
      // sliderCounter.classList.add('counter-main');
      
      var updateSliderCounter = function(slick, currentIndex) {
        currentSlide = slick.slickCurrentSlide() + 1;
        slidesCount = slick.slideCount;
        $(sliderCounter).text(currentSlide + '/' +slidesCount)
      };

      $slider.on('init', function(event, slick) {
        // $slider.append(sliderCounter);
        updateSliderCounter(slick);
      });

      $slider.on('afterChange', function(event, slick, currentSlide) {
        updateSliderCounter(slick, currentSlide);
      });

      $slider.slick({
        rows: false,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
      });
    }

     $('.slider-nav__left.slider-nav__main').click(function() {
        $('.main-slider').slick('slickPrev');
    })
    $('.slider-nav__right.slider-nav__main').click(function() {
        $('.main-slider').slick('slickNext');
    })

    $('.goal-slider').slick({
        rows: false,
        slidesToScroll: 1,
        arrows: false,
        draggable: false, 
        infinite: false,
        adaptiveHeight: true,
        swipe: false,
    })

    $('.js-goal-prev').click(function() {
        $('.goal-slider').slick('slickPrev');
    })
    $('.js-goal-next').click(function() {
        $('.goal-slider').slick('slickNext');
    })


    $('.goal-wrap__input').change(function(){
        $(this).parent().parent().next().find('.btn').prop('disabled', false);
       
    })


});