var express = require('express');
var cors = require('cors');
var join = require('path').join;
var mongoose = require('mongoose');
var app = express();

var router = express.Router(); // cars路由
var users = require('./router/users');
var list = require('./router/list');

mongoose.connect('mongodb://192.168.0.5/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

router.get('/', function (req, res) {
  // res.status(200).json(req.db.getCollection('cars').find({}))
  console.log(req)
  // console.log(req.db.getCollection('cars').find({}))
  res.send([])
});

app.use(cors());
app.use(function (req, res, next) {
  req.db = db; // 把数据库连接绑定到req上
  next();
});
app.use('/cars', router);
app.use('/users', users);
app.use('/list', list);

app.get('/img/:imgName', function (req, res) {
  res.sendFile(join(__dirname + '/img/', req.params.imgName))
});

app.listen(3000, function () {
  console.log('start server')
});
