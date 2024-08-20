import { Users } from '@/types/types';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../../styles/Trainers.module.css';

// This function runs at build time
export async function getStaticProps() {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = (await response.json()) as Users;

	return {
		props: {
			trainers: data
		}
	};
}

interface TrainersProps {
	trainers: Users;
}

function Trainers({ trainers }: TrainersProps) {
	const { single } = styles;

	return (
		<>
			<Head>
				<title>PK Trainers | Trainers List</title>
				<meta name='keywords' content='PK Trainers, pokemon trainers' />
			</Head>

			<h1>All Trainers</h1>
			<div className='flex flex-col gap-5'>
				<p>Our Trainers from all over the world</p>
				{trainers.map((trainer) => (
					<div key={trainer.id}>
						<Link
							href={`/sample-app/trainers/${trainer.id}`}
							className={single}
						>
							{trainer.name}
						</Link>
					</div>
				))}
			</div>
		</>
	);
}

export default Trainers;
