import Head from "next/head"
import Footer from "./footer"
import Header from "./header"

export default function Layout({
	children,
	title = "",
	meta_title = "",
	itemprop_name = "",
	itemprop_description = "",
	meta_description = "",
	meta_robots = "",
	og_description = "",
	og_title = "",
	twitter_description = "",
	twitter_title = "",
}) {
	return (
		<>
			<Head>
				<title>GuitarraLa{title}</title>
				<meta name="title" content={meta_title} />
				<meta itemprop="name" content={itemprop_name} />
				<meta itemprop="description" content={itemprop_description} />
				<meta name="description" content={meta_description} />
				<meta name="robots" content={meta_robots} />
				<meta propery="og:description" content={og_description} />
				<meta propery="og:title" content={og_title} />
				<meta name="twitter:description" content={twitter_description} />
				<meta name="twitter:title" content={twitter_title} />
			</Head>
			<Header />
			{children}
			<Footer />
		</>
	)
}
