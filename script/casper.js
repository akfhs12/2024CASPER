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

}) /* 제이쿼리 닫는 태그 */