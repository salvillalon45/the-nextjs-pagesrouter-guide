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
				<p>
					Next.js is a powerful React framework that enables
					developers to create server-rendered and statically
					generated websites. I created this guide to learn the
					concepts I was struggling with and make it easier for others
					to understand. I hope it helps!
				</p>

				<p>In this repo you can find the code snippets for:</p>
				<ul>
					<li>
						A page implementing getStaticProps and getStaticPaths
					</li>
					<li>A page implementing getStaticProps</li>
					<li>
						A page implementing getServerSideProps with Client Side
						fetching
					</li>
					<li>A page to demonstrate Hydration Errors</li>
					<li>
						Using the api directory to implement our own api routes
					</li>
				</ul>

				<div className='grid gap-4'>
					<h2>Resources</h2>

					<div>
						<b>
							<p>Learning about Hydration</p>
						</b>
						<ul>
							<li>
								<a href='https://youtu.be/R-BKadZWYnQ?si=imNFJL36knSPdF7S'>
									What is Hydration
								</a>{' '}
								by Builder (Watch this one first it explains the
								difference between SPA and the Pre-rendering
								process)
							</li>
							<li>
								<a href='https://youtu.be/87i0pejrULw?si=e179x9x2KkaR8AxL'>
									What Exactly is REACT HYDRATION? And why
									does it matter?
								</a>{' '}
								by Deeecode The Web
							</li>
							<li>
								<a href='https://youtu.be/7UOyuEHYmSE?si=Ql8z5D_pAryvTyFf'>
									Why Do HYDRATION ERRORS Exist? And how to
									solve them
								</a>{' '}
								by Deeecode The Web
							</li>
							<li>
								<a href='https://www.joshwcomeau.com/react/the-perils-of-rehydration/'>
									The Perils of Hydration
								</a>{' '}
								by Josh W Comeau
							</li>
							<li>
								<a href='https://react.dev/reference/react-dom/hydrate#hydrating-server-rendered-html'>
									Hydrate
								</a>{' '}
								by React Docs
							</li>
						</ul>
					</div>

					<div>
						<b>
							<p>Learning about Next.js</p>
						</b>
						<ul>
							<li>
								<a href='https://youtu.be/BILxV_vrZO0?si=AgzODMDFOjSx5a3w'>
									The Story of Next.js
								</a>{' '}
								by Uidotdev (Watch to understand why Next.js was
								created)
							</li>
							<li>
								<a href='https://youtu.be/d2yNsZd5PMs?si=UZYKHUrajdXQd1y4&t=1'>
									How NextJS REALLY Works
								</a>{' '}
								by Theo
							</li>
						</ul>
					</div>

					<div>
						<b>
							<p>
								Learning about getServerSideProps and
								getStaticProps
							</p>
						</b>
						<ul>
							<li>
								<a href='https://youtu.be/xfX8nVpaycU?si=ZV-r2piDoWhLAKMi'>
									Next.js - GetServerSideProps vs
									GetStaticProps
								</a>{' '}
								by Morado Web Development
								<ul>
									<li>
										This video gave a clear demonstration of
										how the functions work! It inspired how
										to create this tutorial.
									</li>
								</ul>
							</li>
						</ul>
					</div>

					<div>
						<b>
							<p>Learning about Reconciliation</p>
						</b>
						<ul>
							<li>
								<a href='https://www.educative.io/answers/what-is-the-concept-of-reconciliation-in-react'>
									What is the concept of reconciliation in
									React?
								</a>{' '}
								by educative.io
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
