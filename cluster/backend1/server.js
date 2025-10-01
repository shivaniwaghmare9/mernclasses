const http= require("http");
http.createServer((req, res)=>{
  setTimeout(()=>{
    res.write("<h1> Request handle succesfully!!")
    res.end();
  }, 5000);
}).listen(5000);
