var gzippo = require('gzippo');
var express = require('express');
var app = express();
 
app.use(express.logger('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT ||  3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});