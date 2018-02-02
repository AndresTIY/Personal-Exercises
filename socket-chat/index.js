var app = require('express')();
var http = require('http').Server(app);
// Express initializes `app` to be a fn handler
// that you can supply to an HTTP server

/* app.get('/', function(req, res){
  res.send('<h1>Hello World</h1>');
}); */

// We define a route handler `/` that gets
// called when we hit our website home

http.listen(3000, function(){
  console.log('listening on *:3000');
});
// We make the http server listen on port 3000

/*------------------------------------*/

// So far we're calling `res.send` and pass it a
// HTML string. Our code would look confusing if we
// placed our entire HTML there, so
// we need to create index.html and serve it

// Refactor route handler to use `sendFile` instead

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
