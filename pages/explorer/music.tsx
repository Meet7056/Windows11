import Head from 'next/head';
import Icons from '../../components/modules/Icons/Icons';
import FileExplorer from '../../components/windows/FileExplorer/FileExplorer';

function Music() {
	return (
		<>
			<Head>
				<title>MEET - Music</title>
				<link
					rel="canonical"
					href="https://www.MEET.dev/explorer/music"
				/>

				{/* Description */}
				<meta
					name="description"
					content="I think this folder has some meme value?"
				/>

				{/* OpenGraph */}
				<meta property="og:title" content="MEET - Music" />
				<meta
					property="og:url"
					content="https://www.MEET.dev/explorer/music"
				/>
				<meta
					property="og:description"
					content="I think this folder has some meme value?"
				/>
			</Head>
			<div style={{ height: '100%' }}>
				<FileExplorer folder="Music" topNav={true} icon="music" />
				<Icons />
			</div>
		</>
	);
}

export default Music;
