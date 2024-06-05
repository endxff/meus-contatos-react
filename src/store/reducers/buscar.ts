import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type BuscaState = {
	termo?: string
}

const initialState: BuscaState = {
	termo: "",
}

const buscaSlice = createSlice({
	name: "busca",
	initialState,
	reducers: {
		buscar: (state, action: PayloadAction<string>) => {
			state.termo = action.payload
		},
	},
})

export const { buscar } = buscaSlice.actions

export default buscaSlice.reducer
