$(function () {
  // class属性がbtnの要素がクリックされたら
  $('.btn').on('click', function () {
    // テキストを「クリックしました！」に変更する
    $('.text-box').val('クリックしました!');
    

  });
});