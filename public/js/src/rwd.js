(function($) {
  //브라우저의 가로값
  var winWidth = $(window).width();
  var wrap = $('#wrap');
  var h1 = wrap.children('h1');

  //영역별 작성
  if(winWidth <= 640){
    /* mob */
    h1.text('모바일 화면으로 변경되었습니다.');
  }else if(winWidth > 640 && winWidth <= 1024){
    /* tab */
    h1.text('타블렛 화면으로 변경되었습니다.');
  }else if(winWidth > 1024 && winWidth <= 1366){
    /* pc */
    h1.text('컴퓨터 화면으로 변경되었습니다.');
  }else{
    /* pcfull */
  }
  

  // 브라우저 사이즈 (가로) 변경시 새로고침 ======
  $(window).on('resize',function(){
    var nowW = $(window).width();
    if( nowW !== winWidth ){
      location.reload();
    }
  });
})(this.jQuery);