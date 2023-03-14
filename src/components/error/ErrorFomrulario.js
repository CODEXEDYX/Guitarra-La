import style from "../../styles/url-contenido.module.css"
export default function ErrorFomrulario({children, to}) {
	return <div className={`${style.caja_error_formulario} ${to}`}>{children}</div>
}
