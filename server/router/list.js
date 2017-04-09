var express = require('express');
var router = express.Router();

router.get('/:type', function (req, res) {
  var type = req.params.type;
  var user = req.db.getCollection('users').findOne();
  res.status(200).send(user.list[type] || [])
});

module.exports = router;
