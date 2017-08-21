// In this question, you are free to use your favorite programming language among Python, Scala, Java, and JavaScript.
// Design and implement a computer program that receives a text file as input, and outputs each unique word in the file followed by its number of
// occurrences in the file.
// Ignore capitalization and punctuation. For example, "this" and "This", "it's" and "its", and "cats'" and "cats" should count as the same word. State
// any other assumptions you make about the input.
// The output should be sorted in descending order by the number of occurrences, and in ascending order by words.
// Example:
// Contents of input.txt:
// "This is a test example. A short example of a valid input."
// Output:
// a 3
// example 2
// input 1
// is 1
// of 1
// short 1
// test 1
// this 1
// valid 1


//selecting dom elements
const container = document.querySelector('.container');
const readFileBtn = document.querySelector('.read');

const sendFile = function(file) {
  fetch('/readfile', {
    method: 'POST',
    body: file
  })
    .then((response) => {
      console.log('it responded')
    })
}
//listens for click on readfile then fires off readFile function
readFileBtn.addEventListener('click', sendFile)
//   () => {
//   var inputFile = document.querySelector('.input-file');
//   readFile(inputFile.files[0]);
// })


//reads the txt file uploaded on the DOM
const readFile = function (file) {
  var reader = new FileReader();
  reader.onload = function(text) {
    var result = parseText(text.target.result);
    //append results to dom
    result.forEach(el => {
      var occurence = document.createElement('div')
      var word = document.createElement('span').textContent = `${el.word}: ${el.count}`;
      occurence.append(word);
      container.append(occurence);
    })
    console.log(result);
  }
  reader.readAsText(file);
}

const parseText = function(text) {
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

console.log(parseText("This is a test example. A short example of a valid input."));

// api call to web server


//Question 3
//If it was a web service, I would have customers upload the text file to be parsed.
//This will then send the text file over to the web server that which will read the file and execute
//the parsetext function on the web server side.  The results of that call will then we sent back to the client.

//Question 4
//Assuming they will send the information over one at time.
//everytime someone uploads a file
//we will run the parseText defined above to determine the occurences.
//we will then store the results of calling parseText in a cache
//take all result data in the cache and merge them together
//return the result of the merge to the client.

//If we're talking about all the connected nodes need to have the same exact file.
//We will need to determine when all connected clients have sent over their data
//Then we will parse the Text of all the files uploaded to the webserver.  Then send the requests back to each client.
//This can all be achieved with Socket.IO

//Question 5
//initially I would test the parse function with random strings to ensure its able to parse those correctly
//Next I would create a bunch of text files and upload them through the interface to see if it works.

//Question 6
//If working with a framework like React, I would promisify all of the rest api calls on a componentWillMount method
//of an empty component and then call a .then on those results to update a flag variable.
//This flag variable will control when to render the specific table with the data to the page

//If we're talking about pure javascript, I'd have section of the DOM have a function call to the web server's rest api for the data.
//I would also promisify all 5 of those rest api calls and then the result of the .then call would be to render the information to the page.











