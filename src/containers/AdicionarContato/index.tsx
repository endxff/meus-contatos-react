import { useNavigate } from "react-router-dom"
import { Formulario, FormBotao } from "./styles"
import { FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { adicionar } from "../../store/reducers/contatos"

const AdicionarContato = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const [nome, setNome] = useState("")
	const [email, setEmail] = useState("")
	const [telefone, setTelefone] = useState("")

	const cadastrarContato = (evento: FormEvent) => {
		evento.preventDefault()
		if (email != "" || telefone != "") {
			dispatch(
				adicionar({
					nome,
					email,
					telefone,
				})
			)
			navigate("/")
		} else {
			alert("O contato precisa de um Email ou Telefone.")
		}
	}

	return (
		<>
			<Formulario onSubmit={cadastrarContato}>
				<input
					required
					type='text'
					placeholder='Nome'
					value={nome}
					onChange={(e) => setNome(e.target.value)}
				/>
				<input
					type='email'
					placeholder='Email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type='number'
					placeholder='Telefone'
					value={telefone}
					onChange={(e) => setTelefone(e.target.value)}
				/>
				<FormBotao>
					<button type='submit'>Cadastrar</button>
					<button
						onClick={() => navigate("/")}
						type='button'
					>
						Cancelar
					</button>
				</FormBotao>
			</Formulario>
		</>
	)
}

export default AdicionarContato
