const fs = require("fs");
const path = require("path");
const dirpath = path.join(__dirname,'FILES');
const filepath = `${dirpath}/neeraj.txt`;

//Create file 
fs.writeFileSync(filepath,'this is my first node js file');


// reade file
fs.readFile(filepath,"utf8",(err,item) =>{
    console.log(item);
})

//update file

fs.appendFile(filepath,'Append the text in the created file(neeraj.txt) ',(err)=>{
    if(!err)
    {
        console.log("file is updated....!")
    }
})

// Rename file name my first file name is neeraj.txt and now my file name is ranjeet.txt

fs.rename(filepath,`${dirpath}/ranjeet.txt`,(err) =>{
    if(!err)
    {
        console.log("file name is updated...!")
    }
})



//created file is deleted

fs.unlinkSync(`${dirpath}/ranjeet.txt`);
