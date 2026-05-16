var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const data = new Date();
  console.log(data);
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  res.json({
    "Usuário": "rui",
    "Data Atual": data,
  });
});

module.exports = router;
