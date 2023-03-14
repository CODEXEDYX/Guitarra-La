import {useEffect, useState} from "react"
import Image from "next/image"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faXmark} from "@fortawesome/free-solid-svg-icons"
import Layout from "@/components/layout"
import style from "../styles/carrito.module.css"
export default function Carrito({
	carrito,
	actualizarCantidad,
	eliminarProducto,
	id,
}) {
	const [total, setTotal] = useState(0)
	useEffect(() => {
		const calculoTotal = carrito.reduce(
			(total, producto) => total + producto.cantidad * producto.precio,
			0,
		)
		setTotal(calculoTotal)
	}, [carrito])

	return (
		<Layout title={"-carrito de compras"} meta_robots={"noindex , nofollow"}>
			<main className="main" role="main">
				<div className={style.contenedor_carrito}>
					<div className={style.caja_padre_carrito}>
						<div>
							<h3>articulos</h3>
							{carrito.length === 0
								? "Carrito Vacio"
								: carrito.map(producto => (
										<div key={producto.id} className={style.producto}>
											<Image src={producto.imagen} alt={producto.nombre} width={150} height={150} />

											<div>
												<p>{producto.nombre}</p>
												<form>
													<select
														onChange={e =>
															actualizarCantidad({
																id: producto.id,
																cantidad: e.target.value,
															})
														}
														value={producto.cantidad}
													>
														<option value="0">0</option>
														<option value="1">1</option>
														<option value="2">2</option>
														<option value="3">3</option>
														<option value="4">4</option>
														<option value="5">5</option>
													</select>
												</form>
												<p>{producto.precio}€</p>
												<p>
													<span>Subtotal: {producto.precio * producto.cantidad}€</span>
												</p>
											</div>
											<div className={style.caja_icono_carrito}>
												<FontAwesomeIcon
													icon={faXmark}
													onClick={() => eliminarProducto(producto.id)}
													className={style.icono_carrito}
												/>
											</div>
										</div>
								  ))}
						</div>
						<aside>
							<h3 className={style.titulo_carito}>resumen del pedido</h3>
							<p>Total a pagar:{total}€</p>
						</aside>
					</div>
				</div>
			</main>
		</Layout>
	)
}
