var express = require('express');
var router = express.Router();

var data = require('../data.json');

router.get('/:mobile', function (req, res) {
  var mobile = req.params.mobile;
  var user = data.users.filter((user) => {
    if (user.mobile === mobile) return user
  })[0];
  if (user) res.status(200).send(user)
  else res.status(404).send('404 Not Found User Mobile: ' + mobile)
});

module.exports = router;
