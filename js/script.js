 //스크립트 위로 튕기는것 (a태그 눌렀을때 위로 튕기는거 막아줌)
$(document).on('click', 'a[href="#"]', function(e){ //e - 이벤트
  e.preventDefault(); //이벤트현상을 제거한다.
});

// fix
$(window).on('scroll resize', function(){
  var scrollPos = 0;
  scrollPos = $(document).scrollTop();
  console.log(scrollPos); //scroll 값 찾기위함

  fixHeader();
  fix();
  fixList();

  function fixHeader(){
    if(scrollPos > 80){
      $('header').addClass('on');
    }else{
      $('header').removeClass('on');
    }
  };

  function fix(){
    if(scrollPos > 1250){
      $('.fix .text').addClass('on');
    }else{
      $('.fix .text').removeClass('on');
    }
    if(scrollPos > 2700){
      $('.fix .text').removeClass('on');
    }
  };

  function fixList(){
    $('section.approach .inner .list li a').removeClass('on');
    if(scrollPos > 1250){
      $('section.approach .inner .list li a').removeClass('on');
      $('section.approach .inner .list li:eq(0) a').addClass('on');
    }
    if(scrollPos > 1650){
      $('section.approach .inner .list li a').removeClass('on');
      $('section.approach .inner .list li:eq(1) a').addClass('on');
    }
    if(scrollPos > 2050){
      $('section.approach .inner .list li a').removeClass('on');
      $('section.approach .inner .list li:eq(2) a').addClass('on');
    }
    if(scrollPos > 2550){
      $('section.approach .inner .list li a').removeClass('on');
      $('section.approach .inner .list li:eq(3) a').addClass('on');
    }
    if(scrollPos > 2900){
      $('section.approach .inner .list li a').removeClass('on');
    }
  };
});

// gnb메뉴
$(function(){
  $('header .inner .gnbBtn').on('click', function(){
    $('header nav.gnb').toggleClass('on');
  });
  $('.contents').on('click', function(){
    $('header nav.gnb').removeClass('on');
  });
});

// scrolla
$(function(){
  $('.animate').scrolla({
    mobile: true,
    once: true
  });
});

// splitting
$(function(){
  Splitting();
});

