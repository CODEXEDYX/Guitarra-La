import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import {useRouter} from "next/router"
const useHeaderCarito = textoLinkUrl => {
	const router = useRouter()
	const useHeaderCarito = _ => (
		<li>
			<Link
				className={router.pathname === textoLinkUrl ? "activo" : ""}
				href={textoLinkUrl}
			>
				<FontAwesomeIcon icon={faCartShopping} />
			</Link>
		</li>
	)

	return [useHeaderCarito]
}
export default useHeaderCarito
