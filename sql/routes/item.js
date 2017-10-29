var express=require('express');
var router=express.Router();
var mysql= require('mysql');
var connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'123456'
});


router.post('/list',function(req,res,next){
	res.header('Access-Control-Allow-Origin','*')    ;
connection.query('SELECT * FROM baobei.list_table', function(err, rows, fields) {
res.send(rows)
});
})



router.post('/detail', function(req, res, next) {
	var count=req.body.arr;
	res.header('Access-Control-Allow-Origin','*');
	connection.query("SELECT * FROM baobei.list_table WHERE id='"+count+"';", function(err, rows, fields) {
  	res.send(rows);
});
	});


module.exports=router;