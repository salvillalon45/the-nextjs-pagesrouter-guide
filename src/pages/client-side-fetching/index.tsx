import { Users } from '@/types/types';
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function ClientSideFetching() {
	const [data, setData] = useState<Users>([]);

	useEffect(() => {
		async function handleRequest() {
			const res = await fetch(
				'https://jsonplaceholder.typicode.com/users'
			);

			const data = (await res.json()) as Users;
			setData(data);
		}

		handleRequest();
	}, []);

	return (
		<>
			<Head>
				<title>
					The Next.js Guide: Pages Router | Client Side Fetching
				</title>
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
						can take longer for data to load. Client-side fetching
						happens after the page is loaded in the browser, often
						used for data that does not need to be available at the
						initial render.
					</p>

					<div>
						<h3>Main Purpose</h3>
					</div>
					<p>
						{' '}
						Use for subsequent client-side data fetching or polling
						after the page loads.
					</p>
				</div>

				<div className='grid gap-4'>
					<div>
						<h2>Console.log and Debugging</h2>
						<hr />
					</div>
					<p>
						Here you will console.log statements since the browser
						is doing the request
					</p>
				</div>

				<div className='grid gap-4'>
					<div>
						<h2>Testing with API data</h2>
						<hr />
					</div>
					<p>
						When using client-side fetching, it is common to
						encounter a brief delay before the data is available.
						During this time, displaying a loading indicator can
						improve user experience by providing feedback that data
						is being fetched.
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
