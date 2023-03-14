import Blogs from "@/components/blogs"
import Layout from "@/components/layout"
import style from "../styles/blog.module.css"
export default function Blog({posts}) {
	return (
		<Layout
			title="-Blog"
			meta_title={"GuitarraLa Nuestro Blog"}
			itemprop_name={"GuitarraLa Nuestro Blog"}
			itemprop_description={
				"cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."
			}
			meta_description={
				"cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."
			}
			meta_robots={
				"index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
			}
			og_description={
				"cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."
			}
			og_title={"GuitarraLa Nuestro Blog"}
			twitter_description={
				"cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."
			}
			twitter_title={"GuitarraLa Nuestro Blog"}
		>
			<main className="main" role="main">
				<div className={style.contenedor_blog}>
					<div className="caja_padre">
						{posts?.map(blogs => (
							<Blogs blogs={blogs.attributes} key={blogs.id} />
						))}
					</div>
				</div>
			</main>
		</Layout>
	)
}

export async function getStaticProps() {
	const url = await fetch(`${process.env.ENV_URL}/posts?populate=imagen`)
	const {data: posts} = await url.json()

	return {
		props: {
			posts,
		},
	}
}
