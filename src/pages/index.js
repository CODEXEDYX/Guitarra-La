import Guitarra from "@/components/guitarra"
import Blogs from "@/components/blogs"
import Layout from "@/components/layout"
import style from "../styles/home.module.css"
export default function Home({guitarras, posts}) {
	return (
		<Layout
			meta_title={"GuitarraLa Ofertas:Hasta 70% menos"}
			itemprop_name={"GuitarraLa"}
			itemprop_description={
				"Encuentra grandes ofertas y disfruta de tus compras online. Aprovecha las ventajas de Comparar y disfruta del ahorro."
			}
			meta_description={
				"Encuentra grandes ofertas y disfruta de tus compras online. Aprovecha las ventajas de Comparar y disfruta del ahorro."
			}
			meta_robots={
				"index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
			}
			og_description={
				"Encuentra grandes ofertas y disfruta de tus compras online. Aprovecha las ventajas de Comparar y disfruta del ahorro."
			}
			og_title={"GuitarraLa"}
			twitter_description={
				"Encuentra grandes ofertas y disfruta de tus compras online. Aprovecha las ventajas de Comparar y disfruta del ahorro."
			}
			twitter_title={"GuitarraLa"}
		>
			<main role="main">
				<section className="main">
					<div className={style.contenedor_guitarra_inicio}>
						<h2 className="titulo">nuestra colecion</h2>
						<div className="caja_padre">
							{guitarras?.map(apiGuitarra => (
								<Guitarra apiGuitarra={apiGuitarra.attributes} key={apiGuitarra.id} />
							))}
						</div>
					</div>
				</section>

				<section className={style.main_inicio_img}>
					<div className={style.contenedor_img_inicio}>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero corporis et
							maxime ad ullam ducimus tempore, sint dolore quia inventore quod quis dolor
							eveniet? Qui nobis accusantium voluptatum velit architecto.
						</p>
					</div>
				</section>
			</main>

			<aside className="main" role="complementary">
				<div className={style.contenedor_posts_inicio}>
					<div className="caja_padre">
						{posts?.map(blogs => (
							<Blogs blogs={blogs.attributes} key={blogs.id} />
						))}
					</div>
				</div>
			</aside>
		</Layout>
	)
}

export async function getStaticProps() {
	const urlGuitarra = `${process.env.ENV_URL}/guitarras?populate=imagen`
	const urlPosts = `${process.env.ENV_URL}/posts?populate=imagen`

	const [respuestaGuitarra, respuestaPosts] = await Promise.all([
		fetch(urlGuitarra),
		fetch(urlPosts),
	])

	const [{data: guitarras}, {data: posts}] = await Promise.all([
		respuestaGuitarra.json(),
		respuestaPosts.json(),
	])

	return {
		props: {
			guitarras,
			posts,
		},
	}
}
