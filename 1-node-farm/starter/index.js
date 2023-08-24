const fs = require("fs");

// const readData = fs.readFileSync("./txt/read-this.txt",'utf-8');

// console.log(readData);

// fs.writeFileSync("./txt/input.txt",`${readData}`);

//Server

const http = require("http");

http.createServer((req,res) => {
    res.end("Hey from the server");
})