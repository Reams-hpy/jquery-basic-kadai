
$(window).on(
  'load', () => {
  // ロードされたとき「ロードが発生しました」をコンソールへ出力
  console.log('loadイベントが発生しました');
  }

);

$(function() {
  $(window).on(
  'scroll', () => {
    console.log('scrollイベントが発生しました');
  });
});


