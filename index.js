const http = require('http');
const fs = require('fs');
const express = require("express");
const app = express();


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Create a writable stream to a file named 'output.txt'
    const writeStream = fs.createWriteStream('output.txt');
    
    // Write data to the stream
    app.get("/",(req,resp) => {
        console.log(writeStream)
    
    })
  writeStream.write('Hello, My name is Neeraj Kumar');
  writeStream.write('And Now I am working in MNC companny as a Nodejs Developer');
  writeStream.end(); // Close the stream
  

  // Event listener for the 'finish' event, triggered when the write stream is finished
  writeStream.on('finish', () => {
    console.log('Data has been written to output.txt');
  });

  // Event listener for the 'error' event, triggered if an error occurs during writing
  writeStream.on('error', (err) => {
    console.error('Error writing to file:', err);
  });

  res.end('Data written to file. Check the console for details.\n');
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
