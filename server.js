var express = require('express');
var morgan = require('morgan');
var path = require('path');

var content = {
	title: 'title of the every page',
	heading: 'to include heading',
};
var app = express();	
app.use(morgan('combined'));

var pages = {
 'page1': {
	title: "Page 1 | Title ",
	heading: "This is page One",
	date: "20/08/2017",
	content: "This is the content for page one"
},

'page2':  {
	title: "Page 2 | Title ",
	heading: "This is page Two",
	date: "Today ",
	content: "This is the content for page two"
},
'page3':  {
	title: "Page 3 | Title ",
	heading: "This is page threee",
	date: "Today ",
	content: "This is the content for page threee"
},
'page4':  {
	title: "Page 4 | Title ",
	heading: "This is page four",
	date: "Today ",
	content: "This is the content for page four"
}
}



function createTemplate(data) {

var title= data.title;
var heading= data.heading;
var content= data.content;
var date= data.date;

var htmlTemplate = `<!doctype html><html><head><title>${title}</title><link href='/ui/style.css' rel='stylesheet' />
</head><body><h1>${heading}</h1>Posted On: <span>${date}</span><p>${content}</p></body>`;
return htmlTemplate;

}

    app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter = 0;
app.get('/counter', function (req, res) {

	counter = counter+1;
	res.send(counter.toString());
	// body...
});
var names = [];
app.get('/name-save', function (req,res) {
	var name1 = req.query.name;
names.push(name1);
res.send(JSON.stringify(names));
	// body...
});
    app.get('/:pageNo', function (req, res) {

    	var whichpage = req.params.pageNo;
  res.send(createTemplate(pages[whichpage]));
});

/*
app.get('/page1', function (req, res) {
  res.send(createTemplate(page1));
});
app.get('/page2', function (req, res) {
  res.send(createTemplate(page2));
});*/




app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js', function(req, res) {
	res.sendFile(path.join(__dirname, 'ui', 'main.js'));
	// body...
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD imad imad course app listening on port ${port}!`);
});
