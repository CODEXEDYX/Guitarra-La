import {useState} from "react"
const useFormularioCarrito = carritoSelect => {
	const [cantidad, setCantidad] = useState(0)

	const FormularioCarrito = _ => (
		<>
			<label htmlFor="cantidad">cantidad:</label>
			<select
				value={cantidad}
				onChange={e => setCantidad(+e.target.value)}
				id="cantidad"
			>
				<option value="0">0</option>
				{carritoSelect.map(option => (
					<option value={option.id} key={option.id}>
						{option.numero}
					</option>
				))}
			</select>
		</>
	)
	return [FormularioCarrito, cantidad]
}
export default useFormularioCarrito
