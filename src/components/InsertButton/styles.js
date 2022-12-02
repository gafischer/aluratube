import styled from "styled-components";

const StyledInputButton = styled.div`
	position: fixed;
	bottom: 16px;
	right: 16px;
	z-index: 99;

	& > div > button {
		background: none;
		border: none;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background-color: red;
		cursor: pointer;
		color: ${({ theme }) => theme.text.primary};

		&:hover {
			opacity: 0.5;
		}
	}

	svg {
		width: 100%;
		height: 20px;
	}
`;

export default StyledInputButton;
