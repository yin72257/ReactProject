import { MongoClient } from "mongodb";
import { dbConnectionString } from "../../config";
async function handler(req, res) {
	if (req.method === "POST") {
		const data = req.body;
		console.log("HI");
		const client = await MongoClient.connect(dbConnectionString);
		const db = client.db();
		const meetupsCollection = db.collection("meetups");
		const result = await meetupsCollection.insertOne(data);
		console.log(result);
		client.close();
		res.status(201).json({ message: "meetup inserted" });
	}
}

export default handler;
