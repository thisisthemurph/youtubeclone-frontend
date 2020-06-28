import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	html {
		font-size: 16px;
		box-sizing: border-box;
	}

	*, *:before, *:after {
		padding: 0;
		margin: 0;
		box-sizing: inherit;
	}

	body {
		font-size: 1rem;
		font-family: ${props => props.theme.font}, sans-serif;
		color: ${props => props.theme.primaryColor};
		background-color: ${props => props.theme.bg};
		line-height: 1.8;
	}

	h1, h2, h3, h4, h5, h6 {
		font-weight: normal;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	input {
		font-family: ${props => props.theme.font}, sans-serif;
		font-size: 1rem;
	}

	input:focus, textarea:focus, button:focus {
			outline: none;
	}

	button {
		font-family: 'Fira Sans', sans-serif;
		font-size: 1rem;
	}

	.secondary {
		color: ${props => props.theme.secondaryColor};
	}

	.avatar {
		height: 22px;
		width: 22px;
		border-radius: 11px;
		objec-fit: cover;
	}

	.lg {
		height: 60px;
		width: 60px;
		border-radius: 30px;
	}

	.flex-row {
		display: flex;
		align-items: center;
	}

	.flex-row img {
		margin-right: 0.6rem;
	}
`

export default GlobalStyle;