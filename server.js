const http=require("http");
const fs=require("fs");
const { error } = require("console");

const server=http.createServer();
server.on("request", (req, res)=>{
 

    // let data="hi myself dnyaneshwar suryawanshi currently doing full stack development course with acciojob";
    // if(req.url==="/" && req.method==="GET"){
    //     console.log(req.url, req.method);
    //     return res.end("all ok");
    // }

    // // Write File
    // else if(req.url==="/writefile" && req.method==="GET"){
    //     fs.writeFile("demo.txt", data, (err)=>{
    //         if(err) throw err
    //         console.log(data);
    //         return res.end("write sucessful");
    //     })
    // }
    if(req.url==="/" && req.method==="GET"){
        fs.readFile("test.html", (err, data)=>{
            if(err)throw err;
            return res.end(data);
        })
    }else if(req.url==="/login" && req.method==="POST "){
        console.log(req.url);
        return res.end("Login Successfully");
    }
    //Append 
})



server.listen(8000, ()=>{
    console.log("server running on port 8000");
})