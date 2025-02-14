const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000


// srishtichanda14
// C5hfKr1hq8N3y0gM


// mongodb connection
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@yoga-master.ebbnn.mongodb.net/?retryWrites=true&w=majority&appName=yoga-master`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // create database and collections
    const database = client.db("yoga-master"); 
    const userCollection = database.collection("users")
    const classesCollection = database.collection("classes")
    const cartCollection = database.collection("cart")
    const paymentCollection = database.collection("payments")
    const ordersCollection = database.collection("orders")
    const enrolledCollection = database.collection("enrolled")
    const appliedCollection = database.collection("applied")


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req,res) => {
     res.send('Hello Developers 2025 helooooo!')
})

app.listen(port, () => {
    console.log(`Examples app listening to port ${port}`)
})
