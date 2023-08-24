const fs = require("fs");

// const readData = fs.readFileSync("./txt/read-this.txt",'utf-8');

// console.log(readData);

// fs.writeFileSync("./txt/input.txt",`${readData}`);

//Server

const http = require("http");

const server = http.createServer((req,res) => {
    console.log(req);
    res.end("Hey from the server");
})

server.listen(8000,'127.0.0.1', () => {
    console.log("Started listening on port 8000");
})
