import Head from 'next/head';

function About() {
	return (
		<>
			<Head>
				<title>PK Trainers | About</title>
				<meta name='keywords' content='PK Trainers, pokemon trainers' />
			</Head>

			<h1>About Page</h1>
			<div className='flex flex-col gap-5'>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Cras lacinia nisl ac dui tempor varius. In dapibus efficitur
					libero, ut gravida turpis efficitur at. Nulla eget lectus
					sed ex pharetra blandit a vitae massa. In eu sem vel orci
					hendrerit iaculis. Pellentesque habitant morbi tristique
					senectus et netus et malesuada fames ac turpis egestas.
					Mauris mollis cursus ligula fermentum pulvinar. Sed in eros
					porttitor, luctus lacus vel, ultricies erat. Donec eu
					pulvinar enim.
				</p>
				<p>
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
			</div>
		</>
	);
}

export default About;
