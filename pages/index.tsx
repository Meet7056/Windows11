import Head from 'next/head';
import Icons from '../components/modules/Icons/Icons';

export default function Home() {
	return (
		<>
			<Head>
				<title>MEET</title>
				<link rel="canonical" href="https://www.MEET.dev" />

				{/* Description */}
				<meta
					name="description"
					content="MEET's personal website. A place to share my projects and learn about me. I do some coding sometimes."
				/>

				{/* OpenGraph */}
				<meta property="og:title" content="MEET" />
				<meta property="og:url" content="https://www.MEET.dev" />
				<meta
					property="og:description"
					content="MEET's personal website. A place to share my projects and learn about me. I do some coding sometimes."
				/>
			</Head>
			<div style={{ height: '100%' }}>
				<Icons />
			</div>
		</>
	);
}
