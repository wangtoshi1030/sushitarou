$(function () {


  // topまでスクロールするボタン
  // sass > _main.sass > @mixin scrollbtn()  とリンク
  $(".scroll").on("click", function () {
    $("body, html").animate({ scrollTop: 0 }, 500);
  });
});