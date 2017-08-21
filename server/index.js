const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = '3000';
app.listen(port, () => {
  console.log(`Listening in on port: ${port}`);
})

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.post('/readfile', (req, res) => {
  console.log('hello world');
  res.send('success');
  //place parse text call in here
  //send file back to client
})