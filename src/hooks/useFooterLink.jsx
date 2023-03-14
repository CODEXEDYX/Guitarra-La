import Link from "next/link"
import {useRouter} from "next/router"
const useFooterLink = (textoLinkUrl, textoStyleUrl, textoLink) => {
	const router = useRouter()
	const FooterLink = _ => (
		<Link
			href={textoLinkUrl}
			className={router.pathname === textoStyleUrl ? "activo" : ""}
		>
			{textoLink}
		</Link>
	)
	return [FooterLink]
}
export default useFooterLink
