/**
 * Created by achhabra on 11/27/17.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sseSetup();
    var stream = process.stdin;
    stream.on('data', function (data) {
        var multiLines = data.toString();
        var array = multiLines.split(/\r?\n/);
        array.forEach(function (line) {
            res.sseSend(line);
        });
    });
});

module.exports = router;