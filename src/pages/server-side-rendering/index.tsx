import { Users } from '@/types/types';
import Head from 'next/head';

export async function getServerSideProps() {
	console.log('---------------------------');
	console.log('Runs on every request to the page');
	console.log('---------------------------');
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = (await res.json()) as Users;

	return {
		props: {
			data
		}
	};
}

interface ServerSideRenderingExampleProps {
	data: Users;
}

function ServerSideRenderingExample({ data }: ServerSideRenderingExampleProps) {
	// console.log({ data });
	return (
		<>
			<Head>
				<title>The Next.js Guide | Server Side Rendering</title>
				<meta name='keywords' content='Server Side Rendering' />
			</Head>

			<h1>Server Side Rendering</h1>

			<div className='grid gap-8'>
				<div className='grid gap-4'>
					<div>
						<h2>Explanation</h2>
						<hr />
					</div>
					<p>
						Server Side Rendering does a translation to be able to
						host the code on the server/hosting platform then at
						request time, it will use <b>getServerSideProps</b> to
						hit a database or data source (API) to generate the
						content at request time
					</p>

					<div className='grid gap-4'>
						<div>
							<h3>getServerSideProps() Explanation</h3>
						</div>
						<p>This functions runs on every request to the page.</p>
						<p>
							Server side rendering is better when you{' '}
							<b>data is dynamic</b>, such as the user updating
							their name and it immediately needs to be reflected.
						</p>
					</div>
				</div>

				<div className='grid gap-4'>
					<div>
						<h2>Console.logs and Debugging</h2>
						<hr />
					</div>
					<p>
						You wont see any console.logs from the getServerSide
						props function in the browser.{' '}
					</p>
					<p>
						If you check your console.log from the developer tools,
						you will not find anything! That is because those
						console.logs will appear in the VS Code terminal.
					</p>
				</div>

				<div className='grid gap-4'>
					<div>
						<h2>Testing with API data</h2>
						<hr />
					</div>
					<p>
						Since data is already loaded, there is no flickering.
						Compare this to the client-side-fetching route
					</p>
					<div className=''>
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

export default ServerSideRenderingExample;
