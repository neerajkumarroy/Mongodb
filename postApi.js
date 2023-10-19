
const express = require("express");   // Import required modules and packages
const dbConnect = require("./config");


const app = express();   // Create an Express application


app.use(express.json());   // Enable parsing of JSON data in requests


app.post("/", async (req, res) => {  // Define a POST route for handling incoming requests

    let result = await dbConnect(); // Connect to the database (assuming this is a function that connects to the database)


    data = await data.insert(req.body);   // Insert the data from the request body into the database (assuming 'data' is a database object)


    console.warn(result);   // Log the result of the database connection to the console
})


app.listen(5000);  // Start the Express application and listen on port 5000
