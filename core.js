const http = require('http');
const hostname = '172.50.5.91';
const port = 000;
const requestListener = function (req, res) {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello World\n Welcome to Node Js');
}
const server = http.createServer(requestListener);
server.listen(port, hostname);