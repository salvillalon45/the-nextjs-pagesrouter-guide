import Link from 'next/link';
import Image from 'next/image';

function NavBar() {
	return (
		<nav>
			<div className='logo'>
				<Link href='/'>
					<Image src='/next.svg' alt='' width={200} height={77} />
				</Link>
			</div>
			<Link href='/'>Home</Link>
			<Link href='/intro'>Intro</Link>
			<Link href='/static-site-generation'>Static Site Generation</Link>
			<Link href='/server-side-rendering'>Server Side Rendering</Link>
			<Link href='/client-side-fetching'>Client-Side Fetch</Link>
			<Link href='/hydration-errors'>Hydration Errors</Link>
		</nav>
	);
}

export default NavBar;
