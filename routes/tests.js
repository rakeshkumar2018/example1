var express = require('express');
var router = express.Router();
var db=require('../database/db');

router.get('/getTests',function(req,res,next){
    var con=db.getConnection();
    con.connect(function(e){
        if(e){
            res.send('db connection error');
        }
    });
    var q="select *from test";
    con.query(q,function(e,r){
        if(e){
            res.send(e);
        }else{
            res.send(r);
        }
    });
});


router.post('/addTest',function(req,res,next){
    var con=db.getConnection();
    con.connect(function(e){
        if(e){
            res.send('db connection error');
        }
    });
    var clsName=req.body.className;
    var subName=req.body.subjectName;
    var testName=req.body.testName;

    var q="insert into test(className,subjectName,testName)values('"+clsName+"','"+subName+"','"+testName+"')";
    con.query(q,function(e,r){
        if(e){
            res.send(e);
        }else{
            res.send(r);
        }
    });
});


router.post('/updateTest',function(req,res,next){
    var con=db.getConnection();
    con.connect(function(e){
        if(e){
            res.send('db connection error');
        }
    });
    var testName=req.body.testName;
    var id=req.body.id;
    var q="update test set testName='"+testName+"' where id="+id;
    console.log(q);
    con.query(q,function(e,r){
        if(e){
            res.send(e);
        }else{
            res.send(r);
        }
    });
});

router.get('/deleteTest',function(req,res,next){
    var con=db.getConnection();
    con.connect(function(e){
        if(e){
            res.send('db connection error');
        }
    });
    var id=req.query.id;
    var testName=req.query.testName;
    var q="delete from test where id="+id;
    con.query(q,function(e,r){
        if(e){
            res.send(e);
        }else{
            var q1="delete from questions where testName='"+testName +"'";
            con.query(q1,function(e1,r1){
                if(e){
                    res.send(e1);
                }else{
                    res.send(r1);
                }
            });
        }
    });
});



module.exports = router;
