$('#btn').on('click', function(){
  var array = [1, 2, 3, 4];
  var result = [];
  var getArray = [];
  for (var i = 0; i< 4; i++) {
    var random = Math.floor( Math.random() * array.length );
    getArray = array.splice(random, random+1);
    // console.log(getArray);
    // console.log(array);
    Array.prototype.push.apply(result, getArray);
    // console.log(result);
  }

  $('#area').text(result);
});
