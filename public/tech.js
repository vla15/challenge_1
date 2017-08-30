var wordCol = document.querySelector('.word');
var container = document.querySelector('.container');
var countCol = document.querySelector('.count');
var readFileBtn = document.querySelector('.read');
var inputFile = document.querySelector('.input-file');

var sendFile = function(file) {
  fetch('/readfile', {
    method: 'post',
    body: JSON.stringify({data: file}),
    headers: {
      'Content-Type': 'application/json'
    }  
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      renderTable(result);
      renderBarChart(result);
    })

}

var renderTable = function (result) {
  result.forEach(function(el) {
    var row = document.createElement('div');
    var word = document.createElement('div');
    var count = document.createElement('div');
    row.append(word);
    row.append(count);
    container.append(row);
    word.textContent = el.word;
    row.classList.add('row');
    count.textContent = el.count;
  })
}

var renderBarChart = function (result) {
  var canvas = d3.select('.graphs').append('svg')
      .attr('width', 1000)
      .attr('height', 700);
    canvas.selectAll('rect')
      .data(result)
      .enter()
      .append('rect')
      .attr('width', function (d) {
        return d.count * 200;
      })
      .attr('height', 50)
      .attr('y', function (d, i) {
        return i * 80;
      })
      .attr('fill', 'red');
    canvas.selectAll('text')
      .data(result)
      .enter()
      .append('text')
      .attr('fill', '#000000')
      .attr('y', function (d, i) {
        return i * 80 + 30;
      })
      .attr('x', 5)
      .text(function (d) {
        return d.word + 'has a count of: ' + d.count;
      });
}

//listens for click on readfile then fires off readFile function
readFileBtn.addEventListener('click', function () {
  var inputFile = document.querySelector('.input-file');
  readFile(inputFile.files[0]);
})


//reads the txt file uploaded on the DOM
var readFile = function (file) {
  var reader = new FileReader();
  reader.onload = function(text) {
    sendFile(text.target.result);
  }
  reader.readAsText(file);
}




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












