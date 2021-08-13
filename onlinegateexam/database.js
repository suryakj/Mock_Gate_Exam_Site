var mysql = require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"project"
})
con.connect(function(err){
    if(err) throw err;
    con.query('select feedback from feedback WHERE id=(select MAX(id) from feedback)',function(err,result,fields){
        if(err) throw err;
        console.log(result);
    })  
})