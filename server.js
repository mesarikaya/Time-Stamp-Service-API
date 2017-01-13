var express = require('express')
var app = express()
var moment = require('moment')

//app.use(express.static(__dirname + "/../time_stamp_service"));

app.get('/:timestamps', function (req, res) {
    var tijd = moment(req.param.timestamps).format("LL")
    var msg = "Unix: " + moment(req.param.timestamps) + ", Natural: " + tijd;
    res.send(msg)
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})