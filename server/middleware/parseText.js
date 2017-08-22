module.exports = function(text) {
  //store results in an array
  var results = [];
  //regex to remove punctuation and split input to an array
  text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()"]/g,"").split(' ');
  for (var index = 0; index < text.length; index++) {
    //iterate through input text
    var addChar = true;
    //ignores cases
    var target = text[index].toLowerCase();
    //iterate through results
    for (var i = 0; i < results.length; i++) {
      if (results[i]['word'] === target) {
        results[i]['count']++;
        //if result already exist, change addChar to false
        addChar = false;
      }
    }
    //check to see if we have to add a char to the results array
    if (addChar) {
      results.push({word: target, count: 1});
    }
  }
  //sort by count then alphabetically
  return results.sort(function(a, b) {
    return a.word > b.word
  }).sort(function(a, b) {
    return b.count - a.count;
  })
}