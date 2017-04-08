var express = require('express');
var router = express.Router();

var data = require('../data.json');

router.get('/:type', function (req, res) {
  var type = req.params.type;
  res.status(200).send(data.users[0].list[type] || [])
});

module.exports = router;
