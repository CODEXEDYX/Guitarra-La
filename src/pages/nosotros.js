import Image from "next/image"
import nosotrosImg from "../../public/img/nosotros.jpg"
import style from "../styles/nosotros.module.css"
import Layout from "@/components/layout"

export default function Nosotros() {
	return (
		<Layout
			title={"-Nosotros"}
			meta_title={"GuitarraLa Sobre Nosotros"}
			itemprop_name={"GuitarraLa Sobre Nosotros"}
			itemprop_description={
				"Somos una empresa de guitarras con más de 5 años nos dedicamos a vender guitarras de todo tipo"
			}
			meta_description={
				"Somos una empresa de guitarras con más de 5 años nos dedicamos a vender guitarras de todo tipo"
			}
			meta_robots={
				"index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
			}
			og_description={
				"Somos una empresa de guitarras con más de 5 años nos dedicamos a vender guitarras de todo tipo"
			}
			og_title={"GuitarraLa Sobre Nosotros"}
			twitter_description={
				"Somos una empresa de guitarras con más de 5 años nos dedicamos a vender guitarras de todo tipo"
			}
			twitter_title={"GuitarraLa Sobre Nosotros"}
		>
			<main className="main" role="main">
				<div className={style.contenedor_nosotros}>
					<h2 className="titulo">nosotros</h2>
					<div className="caja_padre">
						<Image src={nosotrosImg} alt={"imagen Guitarra"} width={500} height={500} />

						<div>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quia quam
								quas qui debitis tempora dolorem? Distinctio dicta tempora accusantium
								doloremque velit magni. Magni iure eaque, exercitationem fugit numquam
								reiciendis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At iusto
								praesentium veritatis sit qui necessitatibus quaerat, dolor dolore minima a
								culpa enim numquam officiis aliquam sint eius, libero ducimus ab!
							</p>

							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias ullam magni
								eaque nisi sint maxime esse repellendus, magnam eos incidunt optio saepe quaerat
								aperiam quisquam facilis neque. Beatae, sequi nemo. Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Officiis at, quis eligendi in reprehenderit beatae
								culpa quod amet mollitia veritatis nemo nobis labore voluptate, veniam delectus,
								incidunt sequi fuga laudantium?
							</p>
						</div>
					</div>
				</div>
			</main>
		</Layout>
	)
}
