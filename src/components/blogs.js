import Image from "next/image"
import Link from "next/link"
import {fechas} from "../../helpers/helper"
import style from "../styles/blog.module.css"
export default function Blogs({blogs}) {
	const {imagen, titulo, contenido, publishedAt, url} = blogs
	return (
		<article className={style.contenido_caja_blog}>
			<Image
				src={imagen.data.attributes.formats.medium.url}
				width={400}
				height={400}
				alt={"dsds"}
			/>
			<div>
				<p>{titulo}</p>
				<p>{contenido}</p>
				<p>{fechas(publishedAt)}</p>
				<Link href={`/blogs/${url}`}>ver mas</Link>
			</div>
		</article>
	)
}
