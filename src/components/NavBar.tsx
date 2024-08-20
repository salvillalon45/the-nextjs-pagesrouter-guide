import Link from 'next/link';
import Image from 'next/image';

function NavBar() {
	return (
		<nav>
			<div className='logo'>
				{/* <Image src='/logo.svg' alt='' width={200} height={77} /> */}
				<Image src='/next.svg' alt='' width={200} height={77} />
			</div>
			<Link href='/'>Home</Link>
			{/* <Link href='/sample-app'>Sample App Demo</Link> */}
			<Link href='/intro'>Intro</Link>
			<Link href='/client-side-fetching'>Client-Side Fetch</Link>
			<Link href='/server-side-rendering'>Server Side Rendering</Link>
			<Link href='/static-site-generation'>Static Site Generation</Link>
		</nav>
	);
}

export default NavBar;
