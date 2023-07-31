import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { dbConnectionString } from "../config";

const DUMMY_MEETUPS = [
	{
		id: "m1",
		title: "First meetup",
		image: "https://www.immerse.education/wp-content/uploads/2022/10/what-are-the-7-different-types-of-architecture.jpg",
		address: "Some address",
		descriptino: "First meetup desc",
	},
	{
		id: "m2",
		title: "Second meetup",
		image: "https://www.immerse.education/wp-content/uploads/2022/10/what-are-the-7-different-types-of-architecture.jpg",
		address: "Some address2",
		descriptino: "Second meetup desc",
	},
];

function HomePage(props) {
	return (
		<>
			<Head>
				<title>React Meetups</title>
				<meta
					name="description"
					content="Browse a huge list of highly active React meetups"
				/>
			</Head>
			<MeetupList meetups={props.meetups} />
		</>
	);
}

export async function getStaticProps() {
	const client = await MongoClient.connect(dbConnectionString);
	const db = client.db();
	const meetupsCollection = db.collection("meetups");
	const meetups = await meetupsCollection.find().toArray();
	return {
		props: {
			meetups: meetups.map((meetup) => ({
				title: meetup.title,
				address: meetup.address,
				image: meetup.image,
				id: meetup._id.toString(),
			})),
		},
		revalidate: 1,
	};
}

export default HomePage;
