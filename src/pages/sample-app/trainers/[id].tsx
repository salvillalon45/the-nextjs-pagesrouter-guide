import { User, Users } from '@/types/types';

export async function getStaticPaths() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = (await res.json()) as Users;

	// paths represents the dynamic routes
	const paths = data.map((user) => {
		const { id } = user;

		return {
			params: {
				id: id.toString()
			}
		};
	});

	return {
		paths,
		fallback: false // if it does not, then fallback to 404
	};
}

// This function will run n times depending on the number of paths. So in our case it
// Will run 10 times
// it will be 10 different fetch requests for each different item
export async function getStaticProps(context: { params: { id: any } }) {
	const { id } = context.params;

	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
	const data = (await res.json()) as User;
	console.log('helo');
	return {
		props: {
			trainer: data
		}
	};
}

interface TrainerDetailPageProps {
	trainer: User;
}

const TrainerDetailPage = ({ trainer }: TrainerDetailPageProps) => {
	const { name, email, username } = trainer;

	return (
		<div>
			<h1>{name}</h1>
			<p>
				<b>Email:</b> {email}
			</p>
			<p>
				<b>Username:</b> {username}
			</p>
		</div>
	);
};

export default TrainerDetailPage;
