const { createServer } = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1'; 
const port = 3000; 

const server = createServer(function (req, res) {
   
    const filePath = path.join(__dirname, 'index.html')
    fs.readFile(filePath, 'utf-8', function (error, data) {
        if (error) {
            console.log('couldnt find the file');
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('File not found.');
            return;
        }
        res.statusCode = 200;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}).listen(port, hostname, function () {
    console.log('Server is running on port:', port)
});