const fs = require("fs");
const path = require("path");

const dirpath = path.join(__dirname,'FILES');

//Create multiple file with the help of command line.

for(let i=1;i<6;i++)
{

    fs.writeFileSync(dirpath+"/hello"+i+".txt", "This is my first file");

}

//Read all created file
fs.readdir(dirpath,(err,files)=>{
    files.forEach((item)=>{
        console.log("My file name is:"+item);
    })
})

