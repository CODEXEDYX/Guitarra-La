import Layout from "@/components/layout"
import style from "../styles/error.module.css"
export default function Pagina404() {
	return (
		<Layout meta_robots={"noindex, nofollow"}>
			<main className="main" role="main">
				<div className={style.contenedor_error_404}>
					<h2 className="titulo">No se encontraron resultados 😔</h2>
					<p>
						La página solicitada no pudo encontrarse. Trate de perfeccionar su búsqueda.
					</p>
				</div>
			</main>
		</Layout>
	)
}
