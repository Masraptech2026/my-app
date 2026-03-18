const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<!DOCTYPE html><html><head><title>My First Node.js App</title></head><body><h1>Hello World! My first Node.js app</h1></body></html>");
  res.end();
});

server.listen(5000, () => {
  console.log("Server running at http://localhost:5000/");
});
