
$(function () {
  //カルーセル
  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
  });

  //menuボタン表示
  const pagemenu = $('.pagemenu');
  pagemenu.hide();

  $(window).scroll(function () {

    if ($(window).scrollTop() > 100) {
      pagemenu.fadeIn();
    }
    else {
      pagemenu.fadeOut();

    }
  });

  //TOPへ戻るボタンクリック
  // $('.pagetop').click(function () {
  //   $("body,html").animate({
  //     scrollTop: 0,
  //   }, 800);

  //   //親要素に伝播させない
  //   return false;
  // });
  $('.pagemenu').click(function () {

    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $("#header,#container").toggleClass('mainblur');//ぼかしたいエリアにmainblurクラスを付与
  });

  $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去し
    $("#header,#container").removeClass('mainblur');//ぼかしているエリアのmainblurクラスを除去
  });

  $(".close_btn").click(function () {//ナビゲーションのリンクがクリックされたら
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去し
    $("#header,#container").removeClass('mainblur');//ぼかしているエリアのmainblurクラスを除去
  });

  //モーダル非表示（初期）
  $('.modal').hide();
  //モーダル表示
  $('.works-contents-item img').click(function () {

    //リンク先取得
    const src = $(this).attr("src");
    //src設定
    $('.modal-img').attr("src", src);
    $('.modal').fadeIn();

    //親要素に伝播させない
    return false;
  });

  $('.modal-btn').click(function () {
    $('.modal').fadeOut();

    //親要素に伝播させない
    return false;
  });

  //滑らかに遷移
  $('a[href^="#"]').click(function () {

    //リンク先取得
    const href = $(this).attr("href");
    //空白の場合はリンク先をhtmlに設定
    const target = $(href == "#" || href == "" ? 'html' : href);
    // const target = href;
    const position = target.offset().top;
    $("html,body").animate({ scrollTop: position },
      500, "swing");

  });

  //フェードイン
  $(window).scroll(function () {

    $('section').each(function () {
      //この要素のスクロール位置（上）
      const pos = $(this).offset().top;
      //ウィンドウのスクロール量（上）
      const scroll = $(window).scrollTop();
      //ウィンドウの縦幅
      const windowHeight = $(window).height();
      //この要素のスクロール位置ーウィンドウの縦幅＋100pxより大きい場合、不透明度を1にする
      if (scroll > pos - windowHeight + 100) {
        $(this).addClass('fade-in');
      }

    })

  });
});

$('a').hover(
  function () {
    //マウスカーソルが重なった時の処理
    $(this).fadeTo(500, 0.5);
  },
  function () {
    //マウスカーソルが離れた時の処理
    $(this).fadeTo(500, 1);
  }
);



