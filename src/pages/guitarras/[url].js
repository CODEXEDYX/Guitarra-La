import {useState} from "react"
import Image from "next/image"
import Layout from "@/components/layout"
import useFormularioCarrito from "@/hooks/useFormularioCarrito"
import {carritoSelect} from "../../../data/select"
import ErrorFomrulario from "@/components/error/ErrorFomrulario"
import style from "../../styles/url-contenido.module.css"
export default function GuitarraUrl({guitarras, agregarCarrito}) {
	const [FormularioSelect, cantidad] = useFormularioCarrito(carritoSelect)
	const [error, setError] = useState(false)
	const {imagen, nombre, descripcion, precio} = guitarras[0].attributes

	const handleSubmit = e => {
		e.preventDefault()

		if (cantidad < 1) {
			setError("Cantidad no válida")
			setTimeout(() => {
				setError(false)
			}, 2000)
			return
		}

		const guitarraSelecionada = {
			id: guitarras[0].id,
			imagen: imagen.data.attributes.formats.medium.url,
			nombre,
			precio,
			cantidad,
		}

		agregarCarrito(guitarraSelecionada)
	}
	return (
		<Layout title={`-${nombre}`} meta_robots={"noindex, nofollow"}>
			<main className="main" role="main">
				<div className={style.contenedor_guitarra_url}>
					<div className={style.caja_contenido}>
						<Image
							src={imagen.data.attributes.formats.medium.url}
							alt={`guitarra ${nombre}`}
							width={150}
							height={150}
						/>
						<div>
							<p>
								<span>{nombre}</span>
							</p>
							<p>
								<span>{descripcion}</span>
							</p>
							<p>
								<span>{precio}€</span>
							</p>
							<div>
								<form onSubmit={handleSubmit}>
									<FormularioSelect />
									<input type="submit" value="agregar carrito" />
								</form>
								{error && (
									<ErrorFomrulario to={style.texto_formulario_error}>{error}</ErrorFomrulario>
								)}
							</div>
						</div>
					</div>
				</div>
			</main>
		</Layout>
	)
}

export async function getStaticPaths() {
	const urlGuitarras = await fetch(`${process.env.ENV_URL}/guitarras`)
	const {data} = await urlGuitarras.json()

	const paths = data.map(guitarra => ({
		params: {
			url: guitarra.attributes.url,
		},
	}))

	console.log(paths)

	return {
		paths,
		fallback: false,
	}
}
export async function getStaticProps({params: {url}}) {
	const urlGuitarras = await fetch(
		`${process.env.ENV_URL}/guitarras?filters[url]=${url}&populate=imagen`,
	)
	const {data: guitarras} = await urlGuitarras.json()

	return {
		props: {
			guitarras,
		},
	}
}
