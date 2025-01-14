const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://adibwafi:Aksesbebas123@sewamotor.38vyhzk.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("SewaMotor");
    const collection = database.collection("Motorcycles");

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: "Back to the Future" };
    const data = await collection.find().toArray();
    console.log(data);
  } catch (err) {
    console.log(err);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run();
