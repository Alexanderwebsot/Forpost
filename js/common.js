$(document).ready(function () {
  $('#selectsize-diary').selectize();
  $('.interest-block__line').on('click', function() {
  	$('.interest-block__line').removeClass('interest-block__line_active');
  	$(this).addClass('interest-block__line_active');
  })
  $('.interest-block__item').on('click', function() {
  	$('.interest-block__item').removeClass('interest-block__item__active');
  	$(this).addClass('interest-block__item__active');
  	let arr_section = $('.interest-left-section');
  	let arr = $('.interest-block__item')
  	let num = $(arr).index(this);
  	$('.interest-left-section').removeClass('interest-left-section_active');
  	let elm = $('.interest-left-section')[num]
  	$(elm).addClass('interest-left-section_active');
  })
  $('.diary-slide-slick').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    arrows: false,
  });
  $(".nav-list__item").on("click", 'a', function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 700);
  });
  $('.menu__item').on("click", 'a', function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 700);
    $('.menu').removeClass('menu-active');
    return false;
  });
  $('.video-play').on('click', function() {
    $('.dark-window').addClass('dark-window-active');
    $('.video-modal').addClass('video-modal-active');
  })
  $('.video-modal-button').on('click', function() {
    $('.dark-window').removeClass('dark-window-active');
    $('.video-modal').removeClass('video-modal-active');
    $('.modal-booking').removeClass('modal-booking-active');
  })
  $('.dark-window').on('click', function() {
    $('.dark-window').removeClass('dark-window-active');
    $('.video-modal').removeClass('video-modal-active');
    $('.modal-menu').removeClass('modal-menu-active');
    $('.modal-booking').removeClass('modal-booking-active');
  })
  $('.menu__btn').on('click', function() {
    $('.dark-window').addClass('dark-window-active');
    $('.modal-menu').addClass('modal-menu-active');
    return false;
  })
  $('.price-btn').on('click', function() {
    return false;
  })
  $('.price-btn__active').on('click', function() {
    $('.dark-window').addClass('dark-window-active');
    $('.modal-booking').addClass('modal-booking-active');
    return false;
  })
  if ($(window).width() < 1200) {
     $('.price-line').on('click', function() {
       let parent = $(this);
       if ($(parent).hasClass('price-line__active')) {
         $(parent).removeClass('price-line__active')
       }
       else{
         $(parent).addClass('price-line__active')
       }
     })
     $('.interest-block__left__wrapper').slick({
       infinite: false,
       slidesToShow: 1,
       slidesToScroll: 1,
       variableWidth: true,
       focusOnSelect: true
     });

     $('.header-content-burger').on('click', function() {
       $('.menu').addClass('menu-active');
       return false;
     })
     $('.menu-close').on('click', function() {
       $('.menu').removeClass('menu-active');
       return false;
     })
     $('.documentation-row').slick({
       infinite: true,
       slidesToShow: 1,
       slidesToScroll: 1,
       prevArrow: $('.documentation-arrow__l'),
       nextArrow:$('.documentation-arrow__r'),
     });
     $('.price-bottom-row').slick({
       infinite: true,
       slidesToShow: 1,
       slidesToScroll: 1,
     });
     $('.price-line').addClass('price-line__green');
     $('.diary-bg-img').attr("src","img/hihnik.png");
  }
  $('.diary-imgs').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: $('.diary-imgs-arrow__left'),
    nextArrow:$('.diary-imgs-arrow__right'),
  });
  $('.diary-slide-option').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: false,
  });
  $('.diary-imgs-arrow__right').on('click', function() {
    let parent = $(this).parent('.diary-imgs-arrows');
    parent = $(parent).parent('.diary-imgs-slider');
    let child = $(parent).children('.diary-imgs');
    $(child).slick('slickNext');
  })
  $('.diary-imgs-arrow__left').on('click', function() {
    let parent = $(this).parent('.diary-imgs-arrows');
    parent = $(parent).parent('.diary-imgs-slider');
    let child = $(parent).children('.diary-imgs');
    $(child).slick('slickPrev');
  })

  $('.diary-slider_arrow_left').on('click', function() {
    let parent = $(this).parents('.diary-slide-slick');
    console.log(parent)
    let child = $(parent).children('.diary-imgs');
    $(parent).slick('slickPrev');
  })
  $('.diary-slider_arrow_right').on('click', function() {
    let parent = $(this).parents('.diary-slide-slick');
    console.log(parent)
    let child = $(parent).children('.diary-imgs');
    $(parent).slick('slickNext');
  })
  $('#selectsize-diary').on('change', function() {
    let count = $('.selected').data('value');
    count = count - 1;
    $('.diary-slide-option').slick('slickGoTo', count,  true);
  })
  let $element = $('.interest');
  $(window).scroll(function() {
    let scroll = $(window).scrollTop() + $(window).height();
    let offset = $element.offset().top
    if (scroll > offset) {
      $('.nav').addClass('nav-active');
    }
    else{
      $('.nav').removeClass('nav-active');
    }
  });
});
