var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("[ / ] Hello, DevOpsLab! (serve only '/', '/user')", {
    title: "Simple Express App",
  });
});

module.exports = router;
