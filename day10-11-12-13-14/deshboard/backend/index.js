var http =require('http')
http.createServer((req,res)=>{
    res.write("<h1>NodeJs server is running now</h1>");
    res.write("<h1> Sliver oak university </h1> ")
    res.end();
}).listen(8081);          