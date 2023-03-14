import Layout from "@/components/layout"
import Image from "next/image"
import {fechas} from "../../../helpers/helper"
import style from "../../styles/url-contenido.module.css"
import Link from "next/link"
export default function Blogsurl({posts}) {
	const {imagen, titulo, contenido, publishedAt} = posts[0].attributes
	return (
		<Layout title={`-${titulo}`} meta_robots={"noindex, nofollow"}>
			<main className="main" role="main">
				<div className={`contenedor ${style.contenedor_blog_url}`}>
					<div className={style.caja_contenido}>
						<Image
							src={imagen.data.attributes.formats.medium.url}
							width={500}
							height={500}
							alt={`imagen blog ${titulo}`}
						/>
						<div>
							<p>{titulo}</p>
							<p>{contenido}</p>
							<p>{fechas(publishedAt)}</p>
							<Link href="/blog" title="Ir al blog">
								atras
							</Link>
						</div>
					</div>
				</div>
			</main>
		</Layout>
	)
}

export async function getStaticPaths() {
	const urlGuitarras = await fetch(`${process.env.ENV_URL}/posts`)
	const {data} = await urlGuitarras.json()

	const paths = data.map(post => ({
		params: {
			url: post.attributes.url,
		},
	}))

	return {
		paths,
		fallback: false,
	}
}
export async function getStaticProps({params: {url}}) {
	const urlGuitarras = await fetch(
		`${process.env.ENV_URL}/posts?filters[url]=${url}&populate=imagen`,
	)
	const {data: posts} = await urlGuitarras.json()

	return {
		props: {
			posts,
		},
	}
}
