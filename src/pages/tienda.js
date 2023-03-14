import Guitarra from "@/components/guitarra"
import Layout from "@/components/layout"
import style from "../styles/tienda.module.css"
export default function Tienda({guitarras}) {
	return (
		<Layout
			title="-Tienda"
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
			<main className="main" role="main">
				<div className={style.contenedor_tienda}>
					<h2 className="titulo">nuestra tienda</h2>
					<div className="caja_padre">
						{guitarras?.map(apiGuitarra => (
							<Guitarra apiGuitarra={apiGuitarra.attributes} key={apiGuitarra.id} />
						))}
					</div>
				</div>
			</main>
		</Layout>
	)
}

export async function getServerSideProps() {
	const url = await fetch(`${process.env.ENV_URL}/guitarras?populate=imagen`)

	const {data: guitarras} = await url.json()

	return {
		props: {
			guitarras,
		},
	}
}
