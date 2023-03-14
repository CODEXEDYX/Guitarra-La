import Image from "next/image"
import useFooterLink from "@/hooks/useFooterLink"
import imagenFacebook from "../../public/img/facebook.png"
import imagenInstagram from "../../public/img/instagram.png"
import imagenwhatsapp from "../../public/img/whatsapp.png"
import imagenGmail from "../../public/img/gmail.png"
import imagenGitHub from "../../public/img/github.png"
import style from "../styles/footer.module.css"

export default function Footer() {
	const [LinkInicio] = useFooterLink("/", "/", "inicio")
	const [LinkNosotros] = useFooterLink("/nosotros", "/nosotros", "nosotros")
	const [LinkTieda] = useFooterLink("/tienda", "/tienda", "tienda")
	const [LinkBlog] = useFooterLink("/blog", "/blog", "blog")

	return (
		<footer className={style.footer} role="contentinfo">
			<div className={style.contenedor_footer}>
				<div className="caja_padre">
					<div>
						<nav>
							<LinkInicio />
							<LinkNosotros />
							<LinkTieda />
							<LinkBlog />
						</nav>
					</div>

					<div>
						<Image src={imagenFacebook} alt="imagen facebook" />
						<Image src={imagenInstagram} alt="imagen instagram" />
						<Image src={imagenwhatsapp} alt="imagen whatsapp" />
						<Image src={imagenGmail} alt="imagen gmail" />
						<Image src={imagenGitHub} alt="imagen GitHub " />
					</div>
				</div>
				<p>
					<span>@guitarraLa</span> todos los derechos reservados{" "}
					{new Date().getFullYear()}
				</p>
			</div>
		</footer>
	)
}
