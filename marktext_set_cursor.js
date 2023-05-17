const http = require('http');  

const args = process.argv.slice(2)
line = args[0]
col = args[1]
console.log(args)

const headers = {
  line: line,
  col: col 
}
  
const options = {  
  hostname: '127.0.0.1',  
  port: 3000,  
  path: '/',
  headers: headers
};  

const req = http.get(options, (res) => {});  
