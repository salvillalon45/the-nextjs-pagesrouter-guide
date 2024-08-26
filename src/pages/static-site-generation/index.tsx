import { Blogs } from '@/types/types';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Blogs.module.css';

// This function runs at build time
export async function getStaticProps() {
	console.log('---------------------------');
	console.log('This runs only on build!');
	console.log('---------------------------');
	console.log(process.env.NEXT_PUBLIC_BASE_API_URL);
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/blogs`
	);
	const data = (await res.json()) as Blogs;

	return {
		props: {
			data
		}
	};
}

interface StaticSiteGenerationExampleProps {
	data: Blogs;
}

function StaticSiteGenerationExample({
	data
}: StaticSiteGenerationExampleProps) {
	const blogs = data;

	// console.log('what is window.document.URL');
	// console.log(window.document.URL);

	return (
		<>
			<Head>
				<title>
					The Next.js Guide: Pages Router| Static Site Generation
				</title>
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

						<div className='grid gap-2'>
							<h3>getStaticPaths() Explanation</h3>

							<p>This functions runs at build time as well</p>
							<p>
								<b>getStaticPaths</b> is used in conjunction
								with <b>getStaticProps</b> to generate static
								pages for dynamic routes at build time. use
								getStaticPaths when you have a dynamic route,
								like [id].ts in the pages directory, and you
								want to pre-render these routes based on some
								data. For example:
							</p>
							<ul>
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
							getStaticPaths is used to prerender dynamic websites
							at build time
						</p>
					</div>
				</div>

				<div className='grid gap-4'>
					<div>
						<h2>Testing with API data</h2>
						<hr />
					</div>
					<p>
						Here we generated a list of blogs posts at build time!
						First we get the list of all blogs by using{' '}
						<b>getStaticProps</b>
					</p>
					<p>
						<b>NOTE:</b> Since data is already loaded, there is no
						flickering. Compare this to the client-side-fetching
						route.{' '}
					</p>

					<div>
						<p>
							<b>List of Blogs</b>
						</p>
						{blogs.map((blog) => (
							<div key={blog.id}>
								<Link
									href={`static-site-generation/blogs/${blog.id}`}
									className={styles.single}
								>
									{blog.title}
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default StaticSiteGenerationExample;
