import { Users } from '@/types/types';
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function ClientSideFetching() {
	const [data, setData] = useState<Users>([]);

	useEffect(() => {
		console.log('inside useEffect');
		async function handleRequest() {
			const res = await fetch(
				'https://jsonplaceholder.typicode.com/users'
			);
			const data = (await res.json()) as Users;
			console.log({ data });
			setData(data);
		}

		handleRequest();
	}, []);

	return (
		<>
			<Head>
				<title>The Next.js Guide | Client Side Fetching</title>
				<meta name='keywords' content='Client Side Fetching' />
			</Head>

			<h1>Client Side Fetching</h1>

			<div className='grid gap-8'>
				<div className='grid gap-4'>
					<div>
						<h2>Explanation</h2>
						<hr />
					</div>
					<p>
						Client Side Fetching is done using a combination of the
						useEffect and useState hooks
					</p>
					<p>
						The browser is in charge of handling the request. This
						can take longer for data to load
					</p>
				</div>

				<div className='grid gap-4'>
					<div>
						<h2>Console.logs and Debugging</h2>
						<hr />
					</div>
					<p>
						Here you will console.logs since the browser is doing
						the request
					</p>
				</div>

				<div className='grid gap-4'>
					<div>
						<h2>Testing with API data</h2>
						<hr />
					</div>
					<p>
						Data is not yet loaded. There will be a flickering. This
						is when you will need to use spinners and loading state
						variables to determine what content to show
					</p>
					<div>
						<p>
							<b>List of Users</b>
						</p>
						<ul>
							{data.map((user) => {
								return <li key={user.id}>{user.name}</li>;
							})}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
