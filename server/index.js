var express = require('express');
var cors = require('cors');
var join = require('path').join;
var app = express();

var router = express.Router(); // cars路由
var userRouter = express.Router();
var data = require('./data');
router.get('/', function (req, res) {
  res.status(200).json(data.cars)
});

userRouter.get('/user/:mobile', function (req, res) {
  var mobile = req.params.mobile;
  res.status(200).send(data.users[0])
});

app.use(cors());
app.use('/cars', router);
app.use('/users', userRouter);

app.get('/img/:imgName', function (req, res) {
  res.sendFile(join(__dirname + '/img/', req.params.imgName))
});

app.listen(3000, function () {
  console.log('start server')
});
