var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});


function map(arr, callback) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    res.push(callback(words[i]));
  }
  console.log("res:",res)
}


