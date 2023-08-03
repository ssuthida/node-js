const { response } = require("express");
var http = require("http");
const port = 3000;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World\n");
  })
  .listen(3000);

console.log(`Server running at http://127.0.0.1:${port}`);
