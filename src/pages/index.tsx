import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
	const { title, text } = styles;

	return (
		<>
			<Head>
				<title>The Next.js Guide: Pages Router | Home </title>
				<meta name='keywords' content='the nextjs guide' />
			</Head>

			<h1 className={title}>The Next.js Guide: Pages Router</h1>

			<div className='flex flex-col gap-5'>
				<p className={text}>
					Created this app to explain the concepts behind Next.js
					using Pages Router such as server-side-rendering, static
					site generation, and how it compares to client side fetching
				</p>

				<div>
					<h2>Resources</h2>
					<ul>
						<li>
							<a href='https://youtu.be/xfX8nVpaycU?si=ZV-r2piDoWhLAKMi'>
								Next.js - GetServerSideProps vs GetStaticProps
							</a>
						</li>
						<li>
							<a href='https://youtu.be/d2yNsZd5PMs?si=D9HZ0AcCPD7qUHgo'>
								How NextJS REALLY Works
							</a>
						</li>
						<li>
							<a href='https://youtu.be/BILxV_vrZO0?si=AgzODMDFOjSx5a3w'>
								The Story of Next.js
							</a>
						</li>
					</ul>
					<p className={text}></p>
				</div>
			</div>
		</>
	);
}
