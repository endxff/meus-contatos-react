import { useSelector } from "react-redux"
import { ListaContainer, ListaItens } from "./styles"
import { RootReducer } from "../../store"
import Contatos from "../../components/Contatos"

const Lista = () => {
	const { itens } = useSelector((state: RootReducer) => state.contatos)
	const { termo } = useSelector((state: RootReducer) => state.busca)

	const renderizaBusca = () => {
		if (termo !== undefined) {
			let encontraContato = itens
			encontraContato = encontraContato.filter(
				(contato) => contato.nome.toLowerCase().search(termo.toLowerCase()) >= 0
			)
			return encontraContato
		} else {
			return itens
		}
	}

	const contatos = renderizaBusca()

	return (
		<ListaContainer>
			{contatos.map((c) => (
				<ListaItens key={c.nome}>
					<Contatos
						id={c.id}
						nome={c.nome}
						email={c.email}
						telefone={c.telefone}
					/>
				</ListaItens>
			))}
		</ListaContainer>
	)
}

export default Lista
