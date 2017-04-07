var express = require('express');
var cors = require('cors');
var join = require('path').join;
var app = express();

var router = express.Router();
var data = require('./data');
router.get('/', function (req, res) {
  res.status(200).json(data.cars)
});

app.use(cors());
app.use('/cars', router);

app.get('/img/:imgName', function (req, res) {
  res.sendFile(join(__dirname + '/img/', req.params.imgName))
});

app.listen(3000, function () {
  console.log('start server')
});
