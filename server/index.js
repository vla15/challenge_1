const parseText = require('./middleware/parseText.js');
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


app.put('/readfile', (req, res) => {
  console.log(req.params);
  console.log(req.body);
  res.send(req.body)
  //place parse text call in here
  //send file back to client
})