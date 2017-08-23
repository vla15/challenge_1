const parseText = require('./middleware/parseText.js');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = '3000';
app.listen(port, () => {
  console.log(`Listening in on port: ${port}`);
})

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.post('/readfile', (req, res) => {
  var result = parseText(req.body.data);
  console.log(result);
  res.send(result);
})