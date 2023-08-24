const fs = require("fs");

// const readData = fs.readFileSync("./txt/read-this.txt",'utf-8');

// console.log(readData);

// fs.writeFileSync("./txt/input.txt",`${readData}`);

//Server

const http = require("http");
const path = require("path");
const url  = require("url")

const server = http.createServer((req,res) => {
    // console.log(req);

    const pathName = req.url;
    if(pathName === '/' || pathName === '/overview'){
        res.end("This is overview");
    }else if(pathName === '/product'){
        res.end("This is product route")
    }else{
        res.writeHead(404,{
            'Content-type' : 'text/html',
            'my-header' : "This route doesn't exists"
        })
        res.end("Page not found")
    }

    // res.end("Hey from the server");
})

server.listen(8000,'127.0.0.1', () => {
    console.log("Started listening on port 8000");
})
