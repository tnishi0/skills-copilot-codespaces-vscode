// Create web server
// Usage: node comments.js
// Note: This is a very simple web server that only handles a single client request.
//       It is intended to demonstrate the use of Node.js and the Express package.

// Load Express module
var express = require('express');

// Create Express server
var app = express();

// Add static files location
app.use(express.static(__dirname + '/public'));

// Add route for GET request to retrieve a list of comments
app.get('/comments.json', function(req, res) {
  var comments = [
    { comment: "This is a comment" },
    { comment: "This is another comment" }
  ];

  res.json(comments);
});

// Start the web server on port 3000
app.listen(3000);

// Output message to console
console.log('Express server listening on port 3000');