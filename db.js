const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();
const port = 5000; // your backend port

// Allow CORS for your frontend
app.use(cors({
    origin: "http://127.0.0.1:5500" // frontend URL
}));

// MongoDB setup
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "ranked-real-estate";

// API endpoint
app.get("/api/admin-ranked", async (req, res) => {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection("admin-ranked");

        const properties = await collection.find({}).toArray();
        res.json(properties);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching data");
    }
});

app.listen(port, () => {
    console.log(`Backend running at http://localhost:${port}`);
});
