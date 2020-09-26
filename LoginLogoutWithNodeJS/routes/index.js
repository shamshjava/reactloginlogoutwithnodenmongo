const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/";
//const url = "mongodb+srv://shamsh:1234@cluster0.awhx1.mongodb.net/mydb?retryWrites=true&w=majority";
const url = "mongodb+srv://shamsh:1234@cluster0.awhx1.mongodb.net/mydb?retryWrites=true&w=majority";


/* GET home page. */
//router.get('/', function(req, res, next) {
  exports.verify = async function(req,res){
    res.send('It works!'); 
}

//router.post('/login', function (req, res) {
  exports.login = async function(req,res){
  MongoClient.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }, function(err,db){
    if(err){
      console.log('disconnected',err);
    }else{
      console.log('Connected');
      
      //var dbo = db.db("local");
      var dbo = db.db("mydb");
      dbo.collection("user_info").find({username: req.body.uname,password: req.body.pass}, { projection: { _id: 0, role: 1}})
      .toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
      
        db.close();
        if(result[0]){
          res.send({
            role: result[0].role,
            message : "Success"
          });
        }else{
          res.send({
            message : "Incorrect Username or Password!"
          });
        }
      });
      
    }
    
  })
  
  
}

//module.exports = router;
