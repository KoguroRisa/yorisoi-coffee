
$(function () {
  //カルーセル
  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
  });

  //TOPへ戻るボタン表示
  //TODO: 複数使用するものは変数使用した方が良いのか？
  const pagetop = $('.pagetop');
  pagetop.hide();

  $(window).scroll(function () {

    if ($(window).scrollTop() > 100) {
      pagetop.fadeIn();
    }
    else {
      pagetop.fadeOut();

    }
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

//TOPへ戻るボタンクリック
$('.pagetop').click(function () {
  $("body,html").animate({
    scrollTop: 0,
  }, 800);

  //親要素に伝播させない
  return false;
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



