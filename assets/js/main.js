$(document).ready(function () {
  $(window).on('resize', function () {
    var winHei = $(this).height();

    //top_visual 높이 지정
    $('#content .main_topvisual').css('height', winHei); 
  });
  $(window).trigger('resize');

  $(window).on('scroll', function () {
    var scrollT = $(this).scrollTop();

    if (scrollT > $('.main_banner').offset().top - 500) $('.main_banner').addClass('on');
  });

  //터치 슬라이더
  var mySwiper1 = new Swiper ('.consulting .swiper-container', {
    // 필요한 옵션을 추가함
    //direction: 'vertical',    //horizontal(기본), vertical
    //loop: true,               //가장 처음과 마지막에서 무한 롤링 true, false(기본)
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',   //bullets(동그라미아이콘), fraction (현재/전체)
      clickable: true,    //클릭하여 슬라이더 이동
    },
  });

  var mySwiper2 = new Swiper('.casestudy .swiper-container', {
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    spaceBetween: 10, //slider 사이의 공간
    centeredSlides: true,
    a11y: {
      prevSlideMessage: '이전 슬라이드',
      nextSlideMessage: '다음 슬라이드',
      firstSlideMessage: '첫번째 슬라이드',
      lastSlideMessage: '마지막 슬라이드'
    },
    slidesPerView: 'auto' //한화면에서 보여질 슬리이드 개수, 기본1
  });
});