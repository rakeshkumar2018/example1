var express = require('express');
var router = express.Router();
var db=require('../database/db');

router.get('/getSubjects',function(req,res,next){
    var con=db.getConnection();
    con.connect(function(e){
        if(e){
            res.send('db connection error');
        }
    });
    var q="select *from subjects";
    con.query(q,function(e,r){
        if(e){
            res.send(e);
        }else{
            res.send(r);
        }
    });
});


router.post('/addSubject',function(req,res,next){
    var con=db.getConnection();
    con.connect(function(e){
        if(e){
            res.send('db connection error');
        }
    });
    var clsName=req.body.className;
    var subName=req.body.subjectName;

    var q="insert into subjects(className,subjectName)values('"+clsName+"','"+subName+"')";
    con.query(q,function(e,r){
        if(e){
            res.send(e);
        }else{
            res.send(r);
        }
    });
});


router.post('/updateSubject',function(req,res,next){
    var con=db.getConnection();
    con.connect(function(e){
        if(e){
            res.send('db connection error');
        }
    });
    var clsName=req.body.className;
    var subName=req.body.subjectName;
    var id=req.body.id;
    var q="update subjects set className='"+clsName+"',subjectName='"+subName+"' where id="+id;
    con.query(q,function(e,r){
        if(e){
            res.send(e);
        }else{
            res.send(r);
        }
    });
});

router.get('/deleteSubject',function(req,res,next){
    var con=db.getConnection();
    con.connect(function(e){
        if(e){
            res.send('db connection error');
        }
    });
    var id=req.query.id;
    var q="delete from subjects where id="+id;
    con.query(q,function(e,r){
        if(e){
            res.send(e);
        }else{
            res.send(r);
        }
    });
});



module.exports = router;
