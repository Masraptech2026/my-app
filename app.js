const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello World! My first Node.js app");
  res.end();
});

server.listen(5000, () => {
  console.log("Server running at http://localhost:3000/");
});
