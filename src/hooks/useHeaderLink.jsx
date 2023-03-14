import Link from "next/link"
import {useRouter} from "next/router"
const useHeaderLink = (textoLinkUrl, textoStyleUrl, textoLink) => {
	const router = useRouter()
	const HeaderLink = _ => (
		<li>
			<Link
				href={textoLinkUrl}
				className={router.pathname === textoStyleUrl ? "activo" : ""}
			>
				{textoLink}
			</Link>
		</li>
	)
	return [HeaderLink]
}
export default useHeaderLink
