const http = require('http');

const server = http.createServer((req, res) => {
		if(req.url === '/123'){
				res.write('<h1>Hello Node.js!123<h1>')
		}
    if (req.url === '/456') {
        res.write('<h1>Hello, Node.js!456</h1>');
    }
    res.end();
});

server.listen(8080);
console.log(`The HTTP Server is running on port 8080`);
