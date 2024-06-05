import { useState } from "react"
import { useDispatch } from "react-redux"
import ContatoClass from "../../models/Contato"
import { Item } from "./styles"
import { editar, remover } from "../../store/reducers/contatos"

type Props = ContatoClass

const Contatos = ({
	nome: nomeOriginal,
	email: emailOriginal,
	telefone: telefoneOriginal,
	id,
}: Props) => {
	const dispatch = useDispatch()
	const [editando, setEditando] = useState(false)
	const [nome, setNome] = useState(nomeOriginal)
	const [email, setEmail] = useState(emailOriginal)
	const [telefone, setTelefone] = useState(telefoneOriginal)

	const editarECancelar = () => {
		if (!editando)
			return (
				<>
					<input
						type='button'
						value='Remover'
						onClick={() => dispatch(remover(nome))}
					/>
					<input
						type='button'
						value='Editar'
						onClick={() => setEditando(true)}
					/>
				</>
			)
		else
			return (
				<>
					<input
						type='button'
						value='Cancelar'
						onClick={() => cancelarEdicao()}
					/>
					<input
						type='button'
						value='Salvar'
						onClick={() => {
							dispatch(editar({ nome, email, telefone, id })),
								setEditando(false)
						}}
					/>
				</>
			)
	}

	const cancelarEdicao = () => {
		setNome(nomeOriginal)
		setEmail(emailOriginal)
		setTelefone(telefoneOriginal)
		setEditando(false)
	}

	return (
		<>
			<Item
				disabled={!editando}
				value={nome}
				onChange={(e) => setNome(e.target.value)}
			>
				{nome}
			</Item>
			<Item
				disabled={!editando}
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			>
				{email}
			</Item>
			<Item
				disabled={!editando}
				value={telefone}
				onChange={(e) => setTelefone(e.target.value)}
			>
				{telefone}
			</Item>

			{editarECancelar()}
		</>
	)
}

export default Contatos
