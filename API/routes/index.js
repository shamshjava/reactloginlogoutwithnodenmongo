var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/";
var url = "mongodb+srv://shamsh:1234@cluster0.awhx1.mongodb.net/mydb?retryWrites=true&w=majority";


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function (req, res) {
  
  MongoClient.connect(url,function(err,db){
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
  
  
});

module.exports = router;
