import { Blog, Blogs } from '@/types/types';
import Head from 'next/head';

export async function getStaticPaths() {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/blogs`
	);
	const data = (await res.json()) as Blogs;
	// const blogsDBData = {
	// 	data: [
	// 		{
	// 			userId: 1,
	// 			id: 1,
	// 			title: 'Blog about Pencils 1',
	// 			body: "Most pencil cores are made of graphite powder mixed with a clay binder. Graphite pencils (traditionally known as 'lead pencils') produce grey or black marks that are easily erased, but otherwise resistant to moisture, most solvents, ultraviolet radiation and natural aging. Other types of pencil cores, such as those of charcoal, are mainly used for drawing and sketching. Coloured pencils are sometimes used by teachers or editors to correct submitted texts, but are typically regarded as art supplies, especially those with cores made from wax-based binders that tend to smear when erasers are applied to them. Grease pencils have a softer, oily core that can leave marks on smooth surfaces such as glass or porcelain. The most common pencil casing is thin wood, usually hexagonal in section, but sometimes cylindrical or triangular, permanently bonded to the core. Casings may be of other materials, such as plastic or paper. To use the pencil, the casing must be carved or peeled off to expose the working end of the core as a sharp point. Mechanical pencils have more elaborate casings which are not bonded to the core; instead, they support separate, mobile pigment cores that can be extended or retracted (usually through the casing's tip) as needed. These casings can be reloaded with new cores (usually graphite) as the previous ones are exhausted."
	// 		},
	// 		{
	// 			userId: 1,
	// 			id: 2,
	// 			title: 'Blog about Pencils 2',
	// 			body: 'As a technique for drawing, the closest predecessor to the pencil was silverpoint or leadpoint until in 1565 (some sources say as early as 1500), a large deposit of graphite was discovered on the approach to Grey Knotts from the hamlet of Seathwaite in Borrowdale parish, Cumbria, England.[4][5][6][7] This particular deposit of graphite was extremely pure and solid, and it could easily be sawn into sticks. It remains the only large-scale deposit of graphite ever found in this solid form.[8] Chemistry was in its infancy and the substance was thought to be a form of lead.[citation needed] Consequently, it was called plumbago (Latin for "lead ore").[9][10] Because the pencil core is still referred to as "lead", or "a lead", many people have the misconception that the graphite in the pencil is lead,[11] and the black core of pencils is still referred to as lead, even though it never contained the element lead.[12][13][14][15][16] The words for pencil in German (Bleistift), Irish (peann luaidhe), Arabic (قلم رصاص qalam raṣāṣ), and some other languages literally mean lead pen. The value of graphite would soon be realised to be enormous, mainly because it could be used to line the moulds for cannonballs; the mines were taken over by the Crown and were guarded. When sufficient stores of graphite had been accumulated, the mines were flooded to prevent theft until more was required.'
	// 		},
	// 		{
	// 			userId: 1,
	// 			id: 3,
	// 			title: 'Blog about Pencils 3',
	// 			body: "The first attempt to manufacture graphite sticks from powdered graphite was in Nuremberg, Germany, in 1662. It used a mixture of graphite, sulphur, and antimony. English and German pencils were not available to the French during the Napoleonic Wars; France, under naval blockade imposed by Great Britain, was unable to import the pure graphite sticks from the British Grey Knotts mines – the only known source in the world. France was also unable to import the inferior German graphite pencil substitute. It took the efforts of an officer in Napoleon's army to change this. In 1795, Nicolas-Jacques Conté discovered a method of mixing powdered graphite with clay and forming the mixture into rods that were then fired in a kiln. By varying the ratio of graphite to clay, the hardness of the graphite rod could also be varied. This method of manufacture, which had been earlier discovered by the Austrian Joseph Hardtmuth, the founder of the Koh-I-Noor in 1790, remains in use. In 1802, the production of graphite leads from graphite and clay was patented by the Koh-I-Noor company in Vienna. In England, pencils continued to be made from whole sawn graphite. Henry Bessemer's first successful invention (1838) was a method of compressing graphite powder into solid graphite thus allowing the waste from sawing to be reused."
	// 		}
	// 	]
	// };

	// paths represents the dynamic routes
	// const paths = blogsDBData.data.map((blog) => {
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

	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/blogs/${id}`
	);
	const data = (await res.json()) as Blog;
	// let data = {
	// 	userId: 1,
	// 	id: 1,
	// 	title: 'Blog about Pencils 1',
	// 	body: "Most pencil cores are made of graphite powder mixed with a clay binder. Graphite pencils (traditionally known as 'lead pencils') produce grey or black marks that are easily erased, but otherwise resistant to moisture, most solvents, ultraviolet radiation and natural aging. Other types of pencil cores, such as those of charcoal, are mainly used for drawing and sketching. Coloured pencils are sometimes used by teachers or editors to correct submitted texts, but are typically regarded as art supplies, especially those with cores made from wax-based binders that tend to smear when erasers are applied to them. Grease pencils have a softer, oily core that can leave marks on smooth surfaces such as glass or porcelain. The most common pencil casing is thin wood, usually hexagonal in section, but sometimes cylindrical or triangular, permanently bonded to the core. Casings may be of other materials, such as plastic or paper. To use the pencil, the casing must be carved or peeled off to expose the working end of the core as a sharp point. Mechanical pencils have more elaborate casings which are not bonded to the core; instead, they support separate, mobile pigment cores that can be extended or retracted (usually through the casing's tip) as needed. These casings can be reloaded with new cores (usually graphite) as the previous ones are exhausted."
	// };

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
