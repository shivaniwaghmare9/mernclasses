
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
// //====================================================CHECK FORK CLUSTER=========================================================================
// const http = require("http");
// const cluster = require("cluster");
// const os= require("os");
// console.log(os.cpus().length);


//====================================================CHECK FORK CLUSTER=========================================================================
// const http = require("http");
// const cluster = require("cluster");
// const os= require("os");


// if (cluster.isMaster) {
//   console.log("Master is Processing!");
//   console.log(os.cpus().length);
//   cluster.fork();
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
//   }).listen(3000);

//   console.log("Server run on 3000 Port!");
// }


//====================================================PID CLUSTER=========================================================================


const cluster = require('cluster');
const http = require('http');
const os = require('os');

if (cluster.isMaster) {
  // Get the number of CPU cores available
  const numCPUs = os.cpus().length;
  console.log(`Master process PID: ${process.pid}`);
  console.log(`Forking ${numCPUs} workers...`);
  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Listen for worker exit events
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Forking a new worker...`);
    cluster.fork();
  });
} else {
  // Worker processes handle incoming HTTP requests
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Handled by worker process PID: ${process.pid}\n`);
  }).listen(3000);
  console.log(`Worker process PID: ${process.pid} is running`);
}