var mysql = require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"project"
})
var Sentiment = require('natural').SentimentAnalyzer;
var stemmer = require('natural').PorterStemmer;
var analyzer = new Sentiment("English",stemmer,'afinn');
var natural = require("natural");
con.connect(function(err){
    if(err) throw err;
    con.query('select feedback from feedback WHERE id=(select MAX(id) from feedback)',function(err,result,fields){
        if(err) throw err;
        console.log(result);
        analyzer.getSentiment(console.log(result));  
    })  
})
