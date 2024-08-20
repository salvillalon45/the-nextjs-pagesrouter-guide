import { Users } from '@/types/types';
import Head from 'next/head';

// This function runs at build time
export async function getStaticProps() {
	console.log('---------------------------');
	console.log('This runs only on build!');
	console.log('---------------------------');
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = (await res.json()) as Users;

	return {
		props: {
			data
		}
	};
}

interface StaticSiteGenerationExampleProps {
	data: Users;
}

function StaticSiteGenerationExample({
	data
}: StaticSiteGenerationExampleProps) {
	return (
		<>
			<Head>
				<title>The Next.js Guide | Static Site Generation</title>
				<meta name='keywords' content='static site generation' />
			</Head>

			<h1>Static Site Generation</h1>

			<div className='grid gap-8'>
				<div>
					<div>
						<h2>Explanation</h2>
						<hr />
					</div>

					<div className='grid gap-4'>
						<p>
							Static Site Generation at build time will build each
							of the individual pages for your websites.
						</p>

						<div className='grid gap-2'>
							<h3>getStaticProps() Explanation</h3>

							<p>This functions runs at build time!</p>
							<p>
								getStaticProps() is primarily used in Next.js to
								fetch data at build time, making it ideal for
								static content that does not change often. For
								example:
							</p>
							<ul>
								<li>
									<b>Documentation Sites:</b> Technical
									documentation where the content updates
									infrequently.
								</li>
								<li>
									<b>Marketing Pages:</b> Landing pages or
									informational pages where the content is
									mostly static.
								</li>
								<li>
									<b>Blog Posts:</b> Blog posts whose content
									does not change often
								</li>
							</ul>
						</div>

						<div>
							<h3>Main Purpose</h3>
						</div>
						<p>
							getStaticProps fetch data at build time that does
							not change often (not dynamic)
						</p>
						<p></p>
					</div>
				</div>

				<div className='grid gap-4'>
					<div>
						<h2>Console.logs and Debugging</h2>
						<hr />
					</div>
					<p>
						You wont see any console.logs from the getStaticProps
						props function in the browser. You will see them only at
						build time.
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

export default StaticSiteGenerationExample;
