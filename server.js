var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
    user: 'amulyareddy99',
    database: 'amulyareddy99',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one':{
        title: 'articleOne | Amulya Reddy',
        heading: 'article one',
        date: 'feb 5,2017',
        content: `
            <p>
                this is in article-one. this is in article-one. this is in article-one. this is in article-one. this is in article-one. this is in article-one. this is in article-one.
            </p>
            
            <p>
                this is in article-one. this is in article-one. this is in article-one. this is in article-one. this is in article-one. this is in article-one. this is in article-one.
            </p>

            <p>
                this is in article-one. this is in article-one. this is in article-one. this is in article-one. this is in article-one. this is in article-one. this is in article-one.
            </p>`

    },
    'article-two':{
        
    title: 'articleTwo',
    heading: 'article two',
    date: 'feb 5,2017',
    content: `  <p>
                     this is the content for second article. 
                </p>`
    },
    'article-three':{
                
    title: 'articleThree',
    heading: 'article three',
    date: 'feb 21,2017',
    content: `  <p>
                     this is the content for third article. 
                </p>`
    },
};

function createTemplate (data) {
   var title = data.title;
   var date = data.date;
   var heading = data.heading;
   var content = data.content;
    
    var htmlTemplate = `
<html>
    <head>
        <title>
            article-one
        </title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet"/>
    </head>
    <body>
        <div>
        <div> 
            <a href="/">Home</a>
        <div class="container">
        <hr>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date.toDateString()}
        </div>
         <div>
            ${content}
        </div>
        </div>
    </body>
    
</html>`;
return htmlTemplate;
}

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new Pool(config);
app.get('/test-db', function (req, res) {
    //make select req n respond to results 
    pool.query('SELECT * FROM test',function(err,result){
        if(err){
            res.status(500).send(err.toString());
        }   else {
            res.send(JSON.stringify(result));
        }
    });
});

var counter=0;
app.get('/counter',function(req,res){
    counter = counter + 1;
    res.send(counter.toString());
});

var names = [];
//app.get('/submit-name/:name', function (req, res) {
app.get('/submit-name/:name', function (req, res) { 
    var name = req.query.name;
   // var name = req.params.name;
    names.push(name);
    
    res.send(JSON.stringify(names));
}); 


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article/:articleName',function(req,res){
//   var articleName = req.params.articleName;
//   res.send(createTemplaate(articles[articleName]));
// });
  pool.query("SELECT * FROM article WHERE title = '" + req.params.articleName + "'", function(err,result){
      if(err){
          res.status(500).send(err.toString());
      }    else{
          if(result.rows.length === 0){
              res.status(404).send('Article not found');
          }  else{
                var articleData = result.rows[0];
                res.send(createTemplate(articlesData));
          }
      }
  });
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

// app.get('/article-one',function(req,res){
// res.send(createTemplate(article-one));
// });

// app.get('/article-two',function(req,res){
// res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
// });

// app.get('/article-two',function(req,res){
//     res.send('article-two is requested and will be served here');
// });
// app.get('/article-three',function(req,res){
// res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
// });


