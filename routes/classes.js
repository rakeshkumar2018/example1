var express = require('express');
var router = express.Router();
var db=require('../database/db');

router.get('/getClasses',function(req,res,next){
    var con=db.getConnection();
    con.connect(function(e){
        if(e){
            res.send('db connection error');
        }
    });
    var q="select *from classes";
    con.query(q,function(e,r){
        if(e){
            res.send(e);
        }else{
            res.send(r);
        }
    });
});


router.post('/addClass',function(req,res,next){
    var con=db.getConnection();
    con.connect(function(e){
        if(e){
            res.send('db connection error');
        }
    });
    var clsName=req.body.className;

    var q="insert into classes(className)values('"+clsName+"')";
    con.query(q,function(e,r){
        if(e){
            res.send(e);
        }else{
            res.send(r);
        }
    });
});


router.post('/updateClass',function(req,res,next){
    var con=db.getConnection();
    con.connect(function(e){
        if(e){
            res.send('db connection error');
        }
    });
    var clsName=req.body.className;
    var id=req.body.id;
    var q="update classes set className='"+clsName+"' where id="+id;
    con.query(q,function(e,r){
        if(e){
            res.send(e);
        }else{
            res.send(r);
        }
    });
});

router.get('/deleteClass',function(req,res,next){
    var con=db.getConnection();
    con.connect(function(e){
        if(e){
            res.send('db connection error');
        }
    });
    var id=req.query.id;
    var q="delete from classes where id="+id;
    con.query(q,function(e,r){
        if(e){
            res.send(e);
        }else{
            res.send(r);
        }
    });
});



module.exports = router;
