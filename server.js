var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one':{
    title: 'aritcleOne',
    heading: 'article one',
    date: 'feb 5,2017',
    content: `           <p>
                this isthe content for my article.this isthe content for my article.this isthe content for my article.this isthe content for my article.this isthe content for my article.this isthe content for my article.this isthe content for my article.this isthe content for my article.this isthe content for my article.this isthe content for my article.this isthe content for my article.
            </p>
             <p>
                this isthe content for my article.this isthe content for my article.this isthe content for my article.this isthe content for my article.this isthe content for my article.this isthe content for my article.this isthe content for my article.this isthe content for my article.this isthe content for my article.this isthe content for my article.this isthe content for my article.
            </p>  
            <p>
                this isthe content for my article.this isthe content for my article.this isthe content for my article.this isthe content for my article.this isthe content for my article.this isthe content for my article.this isthe content for my article.this isthe content for my article.this isthe content for my article.this isthe content for my article.this isthe content for my article.
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
            ${date}
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

app.get('/:articleName',function(req,res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
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

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
