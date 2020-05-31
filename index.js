var express  = require('express');  
var app =express();
var bodyParser = require('body-parser');
var jsondata = require('./movies.json');
var _und = require('underscore');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/',function(req,res){
    res.json(jsondata);
})  

app.use('/api',router);
app.listen(port);