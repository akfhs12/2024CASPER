$(document).ready(function(){

  let modal = $('.modal_box');
  let m_close = $('.m_close');
  let m_today_close_txt = $('#m_today_close_txt')

  if ($.cookie('popup') == 'none') {
    modal.hide();
  }

  m_close.click(function(){
    modal.hide();
  })

  m_today_close_txt.click(function(){
    $.cookie('popup', 'none', { expires: 7, path: '/' });
    modal.hide();
  })

   // 랜덤 배너
  let random_img = $('.random_img');
  let img_n = $('.random_banner img').length;
  let n = Math.floor(Math.random() * img_n) + 1;
  console.log(n);

  random_img.attr('src', './images/random_bn_' + n + '.jpg');

  // 헤더에 마우스 올리면 헤더 색 변경
  $('header').mouseenter(function(){
    $('header').addClass('h_act');
    $('header h1 a img').attr('src', './images/logo-casper_black.png');
  });

  $('header').mouseleave(function(){
    if($(window).scrollTop() < 70){
      $('header').removeClass('h_act');
      $('header h1 a img').attr('src', './images/logo-casper-white.png');
    }
  })

  // 페이지 스크롤되면 헤더 고정하고 색 변경
  $(window).scroll(function(){
    let sPos = $(this).scrollTop();
    console.log(sPos);

    if(sPos >= 70){
      $('header').addClass('h_act');
      $('header h1 a img').attr('src', './images/logo-casper_black.png');
    } else{
      $('header').removeClass('h_act');
      $('header h1 a img').attr('src', './images/logo-casper-white.png');
    }

    if(sPos >= 1650){
      $('.intro_title_left').addClass('act1');
      $('.intro_title_right').addClass('act2');
    }

  })


  // 섹션 스크롤시 페이지 스무스하게 이동

  $('.gnb li a').click(function () {
    // 선택한 a 요소의 href 속성 값 가져옴
    let id_name = $(this).attr('href');
    let sec_Offset = $(id_name).offset().top;
    $('html, body').animate({ 'scrollTop': sec_Offset-70 }, 700);
    return false;
  })

  $('#m_nav li a').click(function () {
    // 선택한 a 요소의 href 속성 값 가져옴
    let id_name = $(this).attr('href');
    let sec_Offset = $(id_name).offset().top;
    $('html, body').animate({ 'scrollTop': sec_Offset-70 }, 700);
    return false;
  })


}) /* 제이쿼리 닫는 태그 */