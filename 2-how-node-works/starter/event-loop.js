const fs = require("fs");

setTimeout(()=>{
    console.log("Timeout 1");
},0);

setTimeout(()=>{
    console.log("Timeout 2")
},1000)

setImmediate(()=>{
    setImmediate(()=>{
        console.log("Immediate 1")
    })
    console.log("Immediate 2")
})


setImmediate(()=>{console.log("Immediate 3")})


console.log("/////////////////////////")

fs.readFile("test-file.txt",()=> {
    setTimeout(()=>{
        console.log("Timeout 1 from inside");
    },0);
    
    setTimeout(()=>{
        console.log("Timeout 2 from inside")
    },1000)
    
    setImmediate(()=>{
        setImmediate(()=>{
            console.log("Immediate 1 from inside")
        })
        console.log("Immediate 2 from inside")
    })
    
    
    setImmediate(()=>{console.log("Immediate 3 from inside")})
});