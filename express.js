const express = require('express')
const app = express()
app.use(function(req,res ,next){
  console.log("ku6 to ho rha hai");
  next();
})
app.get('/', function (req, res) {
  res.send("Hello World to ho rha hai")
})
app.use(function(req,res ,next){
  console.log("ku6 to ho rha hai profile load hone se pahle");
  // return next(new Error("something went wrong at line no. 12"))
   next();
})

app.get('/profile', function(req,res,next){
  res.send("this is profile")
})
app.get('/profile/home', function(req,res,next){
  //res.send("this is home someting changed profile ")
  return next(new Error("something went wrong at line number 18"))

})

app.use(function(err,req,res,next){
  console.error(err.stack);
  res.status(500).send('something broked')
})

app.listen(3000)