import { Users } from '@/types/types';
import Head from 'next/head';

function ServerSideRenderingExample() {
	return (
		<>
			<Head>
				<title>The Next.js Guide | Intro</title>
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
				</div>
			</div>
		</>
	);
}

export default ServerSideRenderingExample;
