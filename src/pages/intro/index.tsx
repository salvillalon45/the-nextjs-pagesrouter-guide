import { Users } from '@/types/types';
import Head from 'next/head';
import Image from 'next/image';

function ServerSideRenderingExample() {
	return (
		<>
			<Head>
				<title>The Next.js Guide: Pages Router | Intro</title>
				<meta name='keywords' content='intro to nextjs' />
			</Head>

			<h1>Intro to Next.js</h1>

			<div className='grid gap-8'>
				<div className='grid gap-4'>
					<div>
						<h2>Explanation</h2>
						<hr />
					</div>
					<p>
						A Single Page React based framework that runs on the
						server. It creates pre-rendered React Websites. It
						creates this pre-rendered React websites using:{' '}
						<b>Server Side Rendering and Static Site Generation</b>
					</p>
					<div>
						<h2>What is Pages Router?</h2>
						<hr />
					</div>
					<p>
						It manages routes based on the file structure within the
						pages directory.
					</p>
					<figure className='text-center flex flex-col items-center'>
						<Image
							src='/pages_dir.png'
							alt=''
							width={400}
							height={400}
						/>
						<figcaption>
							A file or directory you put in the pages directory
							will become a new route for it!
						</figcaption>
					</figure>
					<p>
						The index.tsx that you see nested under each directory
						is the component that will be rendered! When the user
						lands on the page
					</p>
					<p>Examples Routes</p>
					<ul>
						<li>http://localhost:3000/client-side-fetching</li>
						<li>http://localhost:3000/sample-app/trainers</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default ServerSideRenderingExample;
