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
	// const res = await fetch(
	// 	`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/blogs`
	// );
	// const data = (await res.json()) as Blogs;
	const data = [
		{
			userId: 1,
			id: 1,
			title: 'Blog about Pencils 1',
			body: "Most pencil cores are made of graphite powder mixed with a clay binder. Graphite pencils (traditionally known as 'lead pencils') produce grey or black marks that are easily erased, but otherwise resistant to moisture, most solvents, ultraviolet radiation and natural aging. Other types of pencil cores, such as those of charcoal, are mainly used for drawing and sketching. Coloured pencils are sometimes used by teachers or editors to correct submitted texts, but are typically regarded as art supplies, especially those with cores made from wax-based binders that tend to smear when erasers are applied to them. Grease pencils have a softer, oily core that can leave marks on smooth surfaces such as glass or porcelain. The most common pencil casing is thin wood, usually hexagonal in section, but sometimes cylindrical or triangular, permanently bonded to the core. Casings may be of other materials, such as plastic or paper. To use the pencil, the casing must be carved or peeled off to expose the working end of the core as a sharp point. Mechanical pencils have more elaborate casings which are not bonded to the core; instead, they support separate, mobile pigment cores that can be extended or retracted (usually through the casing's tip) as needed. These casings can be reloaded with new cores (usually graphite) as the previous ones are exhausted."
		},
		{
			userId: 1,
			id: 2,
			title: 'Blog about Pencils 2',
			body: 'As a technique for drawing, the closest predecessor to the pencil was silverpoint or leadpoint until in 1565 (some sources say as early as 1500), a large deposit of graphite was discovered on the approach to Grey Knotts from the hamlet of Seathwaite in Borrowdale parish, Cumbria, England.[4][5][6][7] This particular deposit of graphite was extremely pure and solid, and it could easily be sawn into sticks. It remains the only large-scale deposit of graphite ever found in this solid form.[8] Chemistry was in its infancy and the substance was thought to be a form of lead.[citation needed] Consequently, it was called plumbago (Latin for "lead ore").[9][10] Because the pencil core is still referred to as "lead", or "a lead", many people have the misconception that the graphite in the pencil is lead,[11] and the black core of pencils is still referred to as lead, even though it never contained the element lead.[12][13][14][15][16] The words for pencil in German (Bleistift), Irish (peann luaidhe), Arabic (قلم رصاص qalam raṣāṣ), and some other languages literally mean lead pen. The value of graphite would soon be realised to be enormous, mainly because it could be used to line the moulds for cannonballs; the mines were taken over by the Crown and were guarded. When sufficient stores of graphite had been accumulated, the mines were flooded to prevent theft until more was required.'
		},
		{
			userId: 1,
			id: 3,
			title: 'Blog about Pencils 3',
			body: "The first attempt to manufacture graphite sticks from powdered graphite was in Nuremberg, Germany, in 1662. It used a mixture of graphite, sulphur, and antimony. English and German pencils were not available to the French during the Napoleonic Wars; France, under naval blockade imposed by Great Britain, was unable to import the pure graphite sticks from the British Grey Knotts mines – the only known source in the world. France was also unable to import the inferior German graphite pencil substitute. It took the efforts of an officer in Napoleon's army to change this. In 1795, Nicolas-Jacques Conté discovered a method of mixing powdered graphite with clay and forming the mixture into rods that were then fired in a kiln. By varying the ratio of graphite to clay, the hardness of the graphite rod could also be varied. This method of manufacture, which had been earlier discovered by the Austrian Joseph Hardtmuth, the founder of the Koh-I-Noor in 1790, remains in use. In 1802, the production of graphite leads from graphite and clay was patented by the Koh-I-Noor company in Vienna. In England, pencils continued to be made from whole sawn graphite. Henry Bessemer's first successful invention (1838) was a method of compressing graphite powder into solid graphite thus allowing the waste from sawing to be reused."
		}
	];

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
