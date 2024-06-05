import styled, { createGlobalStyle } from "styled-components"

export const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0 auto;
        padding: 0;
        box-sizing: border-box;
        font-family: Helvetica, sans-serif;
        list-style: none;
    }
    `

export const Container = styled.div`
	max-width: 50vw;
	margin-top: 158px;
	width: 100%;
	padding: 10px;
	background-color: rgba(0, 0, 0, 0.2);
	border-radius: 16px;
	box-shadow: 20px 10px 20px rgba(0, 0, 0, 0.3);
`
