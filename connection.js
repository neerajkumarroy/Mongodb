const {mongoClient} = require('mongodb');
const url = "mongodb+srv://DEMO1:<DEMO1>@cluster0.1ufxrfa.mongodb.net/";
const database = "college";
const client = new mongodbClient(url);


async function getData()
{
    let result = await client.connect();
    let db = result.client(database);
    let collection = db.collection('student');
    let response = await collection.find({}).toArray();
    console.log(response);

}

getData();