import { Posts } from '@/types/types';
import Head from 'next/head';
import { useState, useEffect } from 'react';

export async function getServerSideProps() {
	console.log('---------------------------');
	console.log('Runs on every request to the page');
	console.log('---------------------------');

	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/posts`
	);
	const data = (await res.json()) as Posts;

	return {
		props: {
			initialPosts: data
		}
	};
}

function HydrationErrors() {
	const [date, setDate] = useState<number>();

	useEffect(() => {
		setDate(new Date().getTime());
	}, []);

	return (
		<>
			<Head>
				<title>
					The Next.js Guide: Pages Router | Hydration Errors
				</title>
				<meta name='keywords' content='Hydration Errors' />
			</Head>

			<h1>Hydration Errors</h1>

			<div className='grid gap-8'>
				<div className='grid gap-4'>
					<div>
						<h2>Explanation</h2>
						<hr />
					</div>
					<p>
						Hydration errors occur when there is a mismatch of the
						HTML. There is a mismatch between the pre-render html
						render by the server and the html generated by the
						client.
					</p>
				</div>

				<div className='grid gap-4'>
					<div>
						<h2>To Fix the Errors</h2>
						<hr />
					</div>

					<div>
						<p></p>
					</div>
				</div>

				<div className='grid gap-4'>
					<div>
						<h2>Testing with Dynamic Data</h2>
						<hr />
					</div>

					<div>
						<p>Check the comments in the code!</p>
					</div>

					<div>
						{typeof window !== 'undefined' && (
							<p>This p tag will appear</p>
						)}
					</div>

					<div>
						{/* You can fix the error by adding a suppressHydrationWarning={true} to the p tag like so <p suppressHydrationWarning={true}> */}
						{/* <p suppressHydrationWarning={true}> */}
						<p>
							{/* If you were to uncomment the code below and try to run the page, you will get the Hydration Error */}
							Today date in milliseconds is {new Date().getTime()}
							{/* Today date in milliseconds is {date} */}
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default HydrationErrors;