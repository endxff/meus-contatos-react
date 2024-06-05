import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Contato from "../../models/Contato"

type ContatosState = {
	itens: Contato[]
}

const initialState: ContatosState = {
	itens: [
		{
			nome: "joao",
			email: "joao@gmail.com",
			telefone: "41999026797",
			id: 1,
		},
	],
}

const contatosSlice = createSlice({
	name: "contatos",
	initialState,
	reducers: {
		adicionar: (state, action: PayloadAction<Omit<Contato, "id">>) => {
			const ultimoContato = state.itens[state.itens.length - 1]
			const novoContato = {
				...action.payload,
				id: ultimoContato ? ultimoContato.id + 1 : 1,
			}

			const emailJaExiste = state.itens.find(
				(contato) =>
					contato.email.toLowerCase() === action.payload.email.toLowerCase()
			)
			const telefoneJaExiste = state.itens.find(
				(contato) =>
					contato.telefone.toLowerCase() ===
					action.payload.telefone.toLowerCase()
			)

			if (!emailJaExiste && !telefoneJaExiste) {
				state.itens.push(novoContato)
			} else {
				alert("Já existe um contato com este e-mail e/ou telefone!")
			}
		},
		remover: (state, action: PayloadAction<string>) => {
			state.itens = state.itens.filter(
				(contato) => contato.nome !== action.payload
			)
		},
		editar: (state, action: PayloadAction<Contato>) => {
			const indexDoContato = state.itens.findIndex(
				(c) => c.nome == action.payload.nome
			)
			state.itens[indexDoContato] = action.payload
		},
	},
})

export const { adicionar, remover, editar } = contatosSlice.actions

export default contatosSlice.reducer
