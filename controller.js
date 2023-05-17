const http = require('http');  
const {
      parentPort
    } = require('node:worker_threads')

parentPort.once('message', options => {
    const port = options.hereIsYourPort
    console.log(options);  
    const server = http.createServer((req, res) => {  
      res.writeHead(200, { 'Content-Type': 'text/plain' });  
      console.log(options);  
      port.postMessage({line: req.headers.line, col: req.headers.col})
      res.end('successful.\n');  
    });  
      
    server.listen(3000, () => {  
      console.log('Server listening on port 3000');  
    });
})
