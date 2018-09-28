var express = require('express');
var router = express.Router();
var db=require('../database/db');

/* GET users l
isting. */
router.post('/getUsers', function(req, res, next) {
  var con=db.getConnection();
  con.connect(function(e){
      if(e){
        res.send('DB connection error');
      }
  });

  var role=req.body.role; 
  var q="select *from users where role='"+role +"'";
  con.query(q,function(e,r){
      if(e){
        res.send(e);
      }else{
        res.send(r);
      }
  })
});

router.post('/login',function(req,res,next){
    var con=db.getConnection();
    con.connect(function(e){
        if(e){
          res.send('DB connection error');
        }
    });
  
    var uName=req.body.userName;
    var pwd=req.body.password;
    console.log('get Data'+ uName + ','+pwd);
    var q="select *from users where userName='"+uName+"' and password='"+pwd+"'";
    console.log(q);
    con.query(q,function(e,r){
        if(e){
          res.send(e);
        }else{
          res.send(r);
        }
    });

});


router.post('/register',function(req,res,next){
  var con=db.getConnection();
  con.connect(function(e){
      if(e){
        res.send('DB connection error');
      }
  });

  var uName=req.body.userName;
  var pwd=req.body.password;
  var role=req.body.role;
  var email=req.body.email;
  var mobile=req.body.mobile;
  var className=req.body.className || ''

  var q="INSERT INTO `users`( `className`,`userName`, `password`, `role`, `mobile`, `email`) VALUES ('"+className+"','"+uName+"','"+pwd+"','"+role+"','"+mobile+"','"+email+"')";
  con.query(q,function(e,r){
      if(e){
        res.send(e);
      }else{
        res.send(r);
      }
  });

});

router.post('/update',function(req,res,next){
  var con=db.getConnection();
  con.connect(function(e){
      if(e){
        res.send('DB connection error');
      }
  });

  var id=req.body.id;
  var pwd=req.body.password;
  var role=req.body.role;
  var email=req.body.email;
  var mobile=req.body.mobile;
  var className=req.body.className || ''

  var q="UPDATE `users` SET `className`='"+className + "',`password`='"+pwd + "',`role`='"+role+"',`mobile`='"+mobile +"',`email`='"+email +"' WHERE id="+id;
  con.query(q,function(e,r){
      if(e){
        res.send(e);
      }else{
        res.send(r);
      }
  });

});


router.post('/delete',function(req,res,next){
    var con=db.getConnection();
    con.connect(function(e,r){
      if(e){
        res.send("DB connect error");
      }
    });
    var id=req.body.id;
    var q="delete from users where id=" + id;

    con.query(q,function(e,r){
        if(e){
          res.send(e);
        }else{
          res.send(r);
        }
    })

});


router.post('/updatePwd',function(re,rs,n){
  var con=db.getConnection();
  con.connect(function(e,r){
    if(e){
      rs.send('db connection error');
    }
  })
  var nPwd=re.body.nPwd;
  var uid=re.body.uid;
  var q="update users set password='"+nPwd + "' where userName='"+uid+"'";
  con.query(q,function(e,r){
    if(e){
      rs.send(e);
    }else{
      rs.send(r);
    }

  });
})

module.exports = router;
