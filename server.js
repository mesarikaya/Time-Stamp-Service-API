var express = require('express')
var app = express()
var moment = require('moment')

app.use(express.static(__dirname + "/../Public"));

app.get('/:tijd', function (req, res,next) {
    //console.log(req.param.timestamps);
  
    var msg = req.params.tijd;
    var result;

  
   if (!isNaN(parseFloat(req.params.tijd)) && isFinite(req.params.tijd) && moment(Number(req.params.tijd)).format("LL")!=="Invalid date"){
      result = {"Unix": req.params.tijd, "Natural":moment(Number(req.params.tijd)).format("LL")};
      call("success",result);
  }
  else if (moment(req.params.tijd).unix().toString().length>0){
      if(typeof(moment(req.params.tijd).unix())===undefined || isNaN(moment(req.params.tijd).unix()) ){
        result = {"Unix": null ,"Natural": null};
        call("wrong entry",result);
      }
      else{
        result = {"Unix": Number(moment(req.params.tijd).unix()) ,"Natural": req.params.tijd};
        call("success",result);
      }
  }
  else{
      result = {"Unix": null ,"Natural": null};
      call("wrong entry",result);
  }
    
    
    function call(type,val){
              res.send(val);
     }
     
})

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/Public/index.html');
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})