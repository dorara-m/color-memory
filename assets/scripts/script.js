$('#btn').on('click', function(){
  const array = shuffle([1,2,3,4]);
  $('#area').text(array);
});

function shuffle(array) {
  for (var i = array.length - 1; i >= 0; i--){
    // 0~iのランダムな数値を取得
    var rand = Math.floor( Math.random() * ( i + 1 ) );
    // 配列の数値を入れ替える
    [array[i], array[rand]] = [array[rand], array[i]]
  }
  return array;
}