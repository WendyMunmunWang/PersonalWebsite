/**
 * Created by wendywang on 2016-12-21.
 */
var express = require("express");
var app     = express();
var path    = require("path");

app.get('/',function(req,res){
    //res.sendFile(path.join(__dirname+'/index.html'));
    res.render('index');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = app;

//app.listen(3000);

//console.log("Running at Port 3000");