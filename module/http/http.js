const http = require('http');
// console.log(http);
// create a sever
const server=http.createServer((req,res)=>{
 if (req.url==="/") {
    res.write("Hello Nodejs Server");
    res.end();
 }
 
});
server.listen(3000);
console.log("listening on port 3000");