var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;

var config={
    user:'	shobananarendren13',
    database:'shobananarendren13',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool=new Pool(config);
app.get('/test-db',function(req,res)
{
    pool.query('select * from test',function(err,result)
    {
        if(err){
            res.status(500).send(err.toString());
        }
        else
        {
            res.send(JSON.stringify(result));
        }
    });
});




app.get('/page-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'page-one.html'));
  //res.send("Page one executed");
  
});


app.get('/page-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'page-two.html'));
  //res.send("Page two executed");
  
});
app.get('/page-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'page-three.html'));
  //res.send("Page three executed");
  
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var comment = [];
app.get('/submit-name', function (req,res){
   var comments=req.query.comments;
   comment.push(comments);
   res.send(JSON.stringify(comment));
});




// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
