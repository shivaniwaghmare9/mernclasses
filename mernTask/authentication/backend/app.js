
const http=require("http")
http.createServer((req,res)=>{
    res.write("<h1>hello</h1>")
    res.end("<h1>end</h1>")
}).listen(4000)