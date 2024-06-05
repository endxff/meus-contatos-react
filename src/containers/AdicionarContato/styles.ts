import styled from "styled-components"

export const Formulario = styled.form`
	display: table;

	input {
		border: none;
		border-radius: 16px;
		line-height: 24px;
		padding: 10px;
	}

	input:nth-child(2) {
		margin: 12px 8px;
	}
`

export const FormBotao = styled.div`
	display: inherit;

	button {
		margin: 0 4px;
		height: 32px;
		padding: 10px;
		border: none;
		border-radius: 16px;
		cursor: pointer;
		color: white;
		background-color: green;

		a {
			color: white;
			text-decoration: none;
		}
	}

	button:nth-child(2) {
		background-color: red;
	}
`
