import Image from "next/image"
import logo from "../../public/img/logo.png"
import useHeaderLink from "@/hooks/useHeaderLink.jsx"
import style from "../styles/header.module.css"
import useHeaderCarito from "@/hooks/useHeaderCarito"
import Link from "next/link"
export default function Header() {
	const [LinkInicio] = useHeaderLink("/", "/", "inicio")
	const [LinkNosotros] = useHeaderLink("/nosotros", "/nosotros", "nosotros")
	const [LinkTieda] = useHeaderLink("/tienda", "/tienda", "tienda")
	const [LinkBlog] = useHeaderLink("/blog", "/blog", "blog")
	const [LinkCarito] = useHeaderCarito("/carrito", "/carrito")

	return (
		<header className={style.header} role="banner">
			<div className="contenedor">
				<div className="caja_padre">
					<Link href="/">
						<Image
							src={logo}
							loading="eager"
							alt="imagen GuitarraLa"
							width={150}
							height={111}
						/>
					</Link>
					<nav className={style.nav}>
						<ul>
							<LinkInicio />
							<LinkNosotros />
							<LinkTieda />
							<LinkBlog />
							<LinkCarito />
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}
