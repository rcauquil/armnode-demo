const http = require('http');

const server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World from the pi");
});

server.listen(8000);
console.log("Server running on port 8000");
