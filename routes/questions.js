
var express = require('express');
var router = express.Router();
var db=require('../database/db');

router.post('/getQuestions',function(req,res,next){
    var con=db.getConnection();
    con.connect(function(e){
        if(e){
            res.send('db connection error');
        }
    });
    var clsName=req.body.className;
    var subName=req.body.subjectName;
    var testName=req.body.testName;
    var q="select *from questions where className='"+clsName+"' and subjectName='"+subName+"' and testName='"+testName+"'";
    con.query(q,function(e,r){
        if(e){
            res.send(e);
        }else{
            res.send(r);
        }
    });
});

router.post('/writTest',function(req,res,next){
    var con=db.getConnection();
    con.connect(function(e){
        if(e){
            res.send('db connection error');
        }
    });
    var clsName=req.body.className;
    var subName=req.body.subjectName;
    var testName=req.body.testName;
    var noOfQue=req.body.noOfQue;
    var q="select *from questions where className='"+clsName+"' and subjectName='"+subName+"' and testName='"+testName+"' ORDER BY RAND() LIMIT 0," + noOfQue;
    con.query(q,function(e,r){
        if(e){
            res.send(e);
        }else{
            res.send(r);
        }
    });
});

router.post('/addQuestion',function(req,res,next){
    var con=db.getConnection();
    con.connect(function(e){
        if(e){
            res.send('db connection error');
        }
    });
    var clsName=req.body.className;
    var subName=req.body.subjectName;
    var testName=req.body.testName;
    var question=req.body.questionName;
    var opt1=req.body.opt1;
    var opt2=req.body.opt2;
    var opt3=req.body.opt3;
    var opt4=req.body.opt4;
    var ans=req.body.ans;
    var type=req.body.queType;

    var q="insert into questions(className,subjectName,testName,questionName,opt1,opt2,opt3,opt4,ans,queType)values('"+clsName+"','"+subName+"','"+testName+"','"+question+"','"+opt1+"','"+opt2+"','"+opt3+"','"+opt4+"','"+ans+"','"+type+"')";
    con.query(q,function(e,r){
        if(e){
            res.send(e);
        }else{
            res.send(r);
        }
    });
});


router.post('/updateQuestion',function(req,res,next){
    var con=db.getConnection();
    con.connect(function(e){
        if(e){
            res.send('db connection error');
        }
    });
    var id=req.body.id;
    var question=req.body.questionName;
    var type=req.body.queType;
    var opt1=req.body.opt1;
    var opt2=req.body.opt2;
    var opt3=req.body.opt3;
    var opt4=req.body.opt4;
    var ans=req.body.ans;
    var q="update questions set queType='"+type+"',ans='"+ans+"', opt4='"+opt4+"' , opt3='"+opt3+"' , opt2='"+opt2+"' , opt1='"+opt1+"', questionName='"+question+"' where id="+id;
    con.query(q,function(e,r){
        if(e){
            res.send(e);
        }else{
            res.send(r);
        }
    });
});

router.get('/deleteQuestion',function(req,res,next){
    var con=db.getConnection();
    con.connect(function(e){
        if(e){
            res.send('db connection error');
        }
    });
    var id=req.query.id;
    var testName=req.query.testName;
    var q="delete from questions where id="+id;
    con.query(q,function(e,r){
        if(e){
            res.send(e);
        }else{
            res.send(r);
        }
    });
});




module.exports = router;
