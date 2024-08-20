import NavBar from './NavBar';
import Footer from './Footer';
import { Inter, Nunito } from 'next/font/google';

const inter = Nunito({ subsets: ['latin'] });

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<main
			className={`
        content
        ${inter.className}`}
		>
			<NavBar />
			{children}
			<Footer />
		</main>
	);
};

export default Layout;
