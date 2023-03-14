import style from "../styles/tienda.module.css"
import Image from "next/image"
import Link from "next/link"
export default function Guitarra({apiGuitarra}) {
	const {imagen, nombre, descripcion, precio, url} = apiGuitarra
	return (
		<div className={style.caja_guitarras}>
			<Image
				src={imagen.data.attributes.formats.medium.url}
				alt={`guitarra ${nombre}`}
				width={150}
				height={150}
			/>
			<div className={style.caja_guitarras_hijo}>
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
					<div className={style.caja_guitarras_link}>
						<span>
							<Link href={`/guitarras/${url}`}>ver producto</Link>
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
