
// const http= require("http");
// http.createServer((req, res)=>{
//   setTimeout(()=>{
//     res.write("<h1> Request handle succesfully!!")
//     res.end();
//   }, 5000);
// }).listen(5000);
// //====================================================CLUSTER=========================================================================
// const http = require("http");
// const cluster = require("cluster");

// if (cluster.isMaster) {
//   console.log("Master is Processing!");
//   cluster.fork();
//   cluster.fork();
//   cluster.fork();
// }
// else {
//   http.createServer((req, res) => {
//     setTimeout(() => {
//       res.write("<h1> Request handle succesfully!!")
//       res.end();
//     }, 2000);
//   }).listen(5000);
//   console.log("Server run on 3000 Port!");
// }
//====================================================CHAEK FORK CLUSTER=========================================================================
const http = require("http");
const cluster = require("cluster");

if (cluster.isMaster) {
  console.log("Master is Processing!");
  cluster.fork();
  cluster.fork();
  cluster.fork();
}
else {
  http.createServer((req, res) => {
    setTimeout(() => {
      res.write("<h1> Request handle succesfully!!")
      res.end();
    }, 2000);
  }).listen(5000);
  console.log("Server run on 3000 Port!");
}
