var express = require ('express');
var app = express();

app.use(express.static(__dirname + '/'));

app.get ('/', function(req, res){
  console.log("inside");
  res.send('GET request to the homepage')
});

app.listen(3000);
console.log("listening on port 3000")
