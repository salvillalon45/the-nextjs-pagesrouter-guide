import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
	const { title, text, btn } = styles;

	return (
		<>
			<Head>
				<title>PK Trainers | Home</title>
				<meta name='keywords' content='PK Trainers, pokemon trainers' />
			</Head>

			<h1 className={title}>Home</h1>

			<div className='flex flex-col gap-5'>
				<p className={text}>
					This is the portal for all things about Pokemon! Register to
					get started and become a Pokemon Trainer.
				</p>
				<p className={text}>
					Etiam tempus odio ex, vitae sollicitudin dui suscipit non.
					Aenean eleifend tortor vitae justo dictum, et faucibus dolor
					mattis. Nunc quis nisl elementum, dignissim tellus non,
					venenatis ex. Donec tincidunt arcu non purus tempor, eget
					pellentesque metus blandit. Vestibulum ante ipsum primis in
					faucibus orci luctus et ultrices posuere cubilia curae; Sed
					eget erat dui. Nam dapibus convallis dapibus. Proin
					efficitur eros id sagittis mollis. Mauris sit amet mattis
					ipsum. Vestibulum sed tincidunt erat. Morbi ut dapibus
					libero. Interdum et malesuada fames ac ante ipsum primis in
					faucibus. Phasellus nisl metus, viverra posuere vulputate
					vel, pretium nec urna. Pellentesque id turpis ut neque
					commodo lacinia.
				</p>

				<Link href='/sample-app/trainers' className={btn}>
					PK Trainers Listing
				</Link>
			</div>
		</>
	);
}
