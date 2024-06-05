import { useNavigate } from "react-router-dom"
import { BarraBotao, BarraContainer } from "./styles"
import { useDispatch, useSelector } from "react-redux"
import { buscar } from "../../store/reducers/buscar"
import { RootReducer } from "../../store"

const Barra = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { termo } = useSelector((state: RootReducer) => state.busca)

	return (
		<BarraContainer>
			<input
				type='text'
				placeholder='Buscar: nome, e-mail ou telefone'
				value={termo}
				onChange={(e) => dispatch(buscar(e.target.value))}
			/>
			<BarraBotao onClick={() => navigate("/novo")}>+</BarraBotao>
		</BarraContainer>
	)
}

export default Barra
