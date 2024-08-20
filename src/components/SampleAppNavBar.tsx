import Link from 'next/link';
import Image from 'next/image';

function SampleAppNavBar() {
	return (
		<nav>
			<div className='logo'>
				<Image src='/logo.svg' alt='' width={200} height={77} />
			</div>
			<Link href='/'>Home</Link>
			<Link href='/sample-app/about'>About</Link>
			<Link href='/sample-app/trainers'>PK Trainers Listing</Link>
		</nav>
	);
}

export default SampleAppNavBar;
