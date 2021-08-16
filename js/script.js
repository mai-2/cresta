$('.burger-btn').on('click', function(){ //.btn_triggerをクリックすると
    $('.burger-btn').toggleClass('close'); //.btn_triggerにcloseクラスを付与(ボタンのアニメーション)
    $('.nav-wrapper').fadeToggle(500); //.nav-wrapperが0.5秒でフェードイン(メニューのフェードイン)
    $('body').toggleClass('noscroll'); //bodyにnoscrollクラスを付与(スクロールを固定)
});

if( $(window).width() < 768 ) { //デバイスの幅が768以下のとき
    $('.nav-item>a').on('click', function() { //.nav-item>aをクリックすると
        $('.nav-wrapper').fadeOut(500); //.nav-wrapperが0.5秒でフェードアウト(メニューのフェードアウト)
        $('.burger-btn').removeClass('close'); //.btn_triggerのcloseクラスを削除
        $('body').removeClass('noscroll'); //bodyのnoscrollクラスを削除
    });
}

new WOW().init();

jQuery('a[href^="#"]').on('click', function() {

    var header = jQuery('.header').innerHeight();
    var id = jQuery(this).attr('href');
    var position = 0;
    if ( id != '#'){
      var position = jQuery(id).offset().top - header;
    }
    jQuery('html,body').animate({
      scrollTop: position
    },
    300);
  });