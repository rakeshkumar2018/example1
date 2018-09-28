
var express = require('express');
var router = express.Router();
var db=require('../database/db');

router.get('/getResults',function(req,res,next){
    var con=db.getConnection();
    con.connect(function(e){
        if(e){
            res.send('db connection error');
        }
    });
    var q="select *from results";
    con.query(q,function(e,r){
        if(e){
            res.send(e);
        }else{
            res.send(r);
        }
    });
});


router.post('/saveResult',function(req,res,next){
    var con=db.getConnection();
    con.connect(function(e){
        if(e){
            res.send('db connection error');
        }
    });
    var clsName=req.body.className;
    var subName=req.body.subjectName;
    var testName=req.body.testName;
    var testDate=req.body.testDate;
    var marks=req.body.marks;
    var userName=req.body.userName;


    var q="insert into results(className,subjectName,testName,date,marks,uid)values('"+clsName+"','"+subName+"','"+testName+"','"+testDate+"','"+marks+"','"+userName+"')";
    con.query(q,function(e,r){
        if(e){
            res.send(e);
        }else{
            res.send(r);
        }
    });
});

router.post('/getResults',function(req,res,next){
    var con=db.getConnection();
    con.connect(function(e){
        if(e){
            res.send('db connection error');
        }
    });
    
    var userName=req.body.userName;
    var q="SELECT * from results where uid='"+userName+"' ORDER BY date LIMIT 3";
    con.query(q,function(e,r){
        if(e){
            res.send(e);
        }else{
            res.send(r);
        }
    });
});

module.exports = router;
