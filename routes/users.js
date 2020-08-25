var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("[ /users ] Hello, DevOpsLab! (serve only '/', '/user')");
});

module.exports = router;
