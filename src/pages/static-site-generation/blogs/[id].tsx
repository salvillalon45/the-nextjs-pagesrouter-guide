import { Blog, Blogs } from '@/types/types';
import { BASE_API_URL } from '@/utils/constants';
import Head from 'next/head';

export async function getStaticPaths() {
	const res = await fetch(`${BASE_API_URL}/api/blogs`);
	const data = (await res.json()) as Blogs;

	// paths represents the dynamic routes
	const paths = data.map((blog) => {
		const { id } = blog;

		return {
			params: {
				id: id.toString()
			}
		};
	});

	return {
		paths,
		fallback: false // if it does not exist, then fallback to 404
	};
}

// This function will run n times depending on the number of paths. So in our case it
// Will run 3 times
// it will be 3 different fetch requests for each different item
export async function getStaticProps(context: { params: { id: any } }) {
	const { id } = context.params;

	const res = await fetch(`${BASE_API_URL}/api/blogs/${id}`);
	const data = (await res.json()) as Blog;

	return {
		props: {
			blog: data
		}
	};
}

interface BlogDetailPageProps {
	blog: Blog;
}

const BlogDetailPage = ({ blog }: BlogDetailPageProps) => {
	const { body, title, id } = blog;

	return (
		<>
			<Head>
				<title>
					The Next.js Guide: Pages Router| Blog Detail Page {id}
				</title>
				<meta
					name='keywords'
					content='static site generation dynamic detail page'
				/>
			</Head>

			<div className='grid gap-4'>
				<div className='grid gap-4'>
					<div>
						<h1>Explanation</h1>
						<hr />
					</div>
					<p>
						Then in the blog detail page we use{' '}
						<b>getStaticPaths</b> to create the routes based on the
						total blogs we have.
					</p>
					<p>
						Then use <b>getStaticProps</b> to retrieve data for each
						individual blog
					</p>
				</div>

				<hr />

				<div>
					<h2>{title}</h2>
					<p>
						<b>id:</b> {id}
					</p>
					<p>
						<b>Body:</b> {body}
					</p>
				</div>
			</div>
		</>
	);
};

export default BlogDetailPage;
