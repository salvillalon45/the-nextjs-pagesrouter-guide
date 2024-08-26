import { Posts } from '@/types/types';
import Head from 'next/head';
import { useState, useEffect } from 'react';

export async function getServerSideProps() {
	console.log('---------------------------');
	console.log('Runs on every request to the page');
	console.log('---------------------------');

	const res = await fetch(
		// `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/posts`
		`'https://jsonplaceholder.typicode.com/posts`
	);
	const data = (await res.json()) as Posts;

	return {
		props: {
			initialPosts: data
		}
	};
}

interface ServerSideRenderingExampleProps {
	initialPosts: Posts;
}

function ServerSideRenderingExample({
	initialPosts
}: ServerSideRenderingExampleProps) {
	const [posts, setPosts] = useState(initialPosts);
	const [newPostTitle, setNewPostTitle] = useState('');
	const [newPostBody, setNewPostBody] = useState('');
	const [newPostCreated, setNewPostCreated] = useState(false);

	async function handleNewPost(event: { preventDefault: () => void }) {
		event.preventDefault();

		await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/posts`, {
			method: 'POST',
			body: JSON.stringify({
				title: newPostTitle,
				body: newPostBody,
				userId: 1
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8'
			}
		});

		setNewPostCreated(true);
	}

	useEffect(() => {
		async function handleGetPosts() {
			// const res = await fetch(
			// 	`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/posts`
			// );
			const res = await fetch(
				`'https://jsonplaceholder.typicode.com/posts`
			);
			const data = (await res.json()) as Posts;

			setPosts(data);
			setNewPostCreated(false);
		}

		handleGetPosts();
	}, [newPostCreated]);

	return (
		<>
			<Head>
				<title>
					The Next.js Guide: Pages Router | Server Side Rendering
				</title>
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

						<div className='grid gap-2'>
							<p>
								This functions runs on every request to the
								page.
							</p>
							<p>
								Server side rendering is particularly useful
								when you need to fetch data that changes
								frequently or is personalized for each request.
								For example:
							</p>
							<ul>
								<li>
									<b>Constantly Changing Data</b>: Your page
									needs to display data that is constantly
									changing, such as stock prices, weather
									data, or the latest news articles.
								</li>
								<li>
									<b>Live Sports Page</b> A live sports score
									page where the latest scores are fetched
									each time the page is loaded.
								</li>
							</ul>
						</div>

						<div>
							<h3>Main Purpose</h3>
						</div>
						<p>
							getServerSideProps is for initial data fetching
							during page load or navigation.{' '}
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
						Here is an example using getServerSideProps with
						useEffect() to make a form submission{' '}
					</p>
					<p>
						Since data is already loaded, there is no flickering.
						Compare this to the client-side-fetching route
					</p>

					<h3>Create a new post test</h3>
					<form
						className='grid gap-4'
						action='POST'
						onSubmit={handleNewPost}
					>
						<div className='flex gap-4'>
							<label htmlFor='postTitle'>Title</label>
							<input
								className='border-'
								name='postTitle'
								type='text'
								value={newPostTitle}
								onChange={(e) => {
									setNewPostTitle(e.target.value);
								}}
							/>
						</div>

						<div className='flex gap-4'>
							<label htmlFor='postBody'>Body</label>
							<textarea
								name='postBody'
								value={newPostBody}
								rows={5}
								cols={33}
								onChange={(e) => {
									setNewPostBody(e.target.value);
								}}
							></textarea>
						</div>

						<div>
							<input type='submit' className='button' />
						</div>
					</form>

					<div className=''>
						<p>
							<b>List of Posts</b>
						</p>
						<ul>
							{posts.map((post, index) => {
								return (
									<>
										<li key={post.id}>
											<p>Post {index}</p>
											<p>
												<b>Title:</b>
											</p>
											<p>{post.title}</p>

											<p>
												<b>Body:</b>
											</p>
											<p>{post.body}</p>
										</li>
										<hr />
									</>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default ServerSideRenderingExample;
