import styled from "styled-components"

export const BarraContainer = styled.div`
	display: flex;
	align-items: center;
	margin-top: 14px;

	input {
		border: none;
		border-radius: 16px;
		padding: 8px;
		line-height: 24px;
		width: 50%;
	}
`

export const BarraBotao = styled.button`
	border: none;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	font-weight: bold;
	font-size: 18px;
	color: white;
	background-color: green;
	cursor: pointer;
`
