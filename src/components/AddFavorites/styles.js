import styled from "styled-components";

const StyledEditFavorites = styled.div`
	.close-modal {
		width: 25px;
		height: 25px;
		position: absolute;
		font-size: 20px;
		top: 8px;
		right: 16px;
		color: inherit;
		background-color: transparent;
		border: none;
		cursor: pointer;
	}

	button[type="submit"] {
		background-color: red;
		padding: 8px 16px;
		border: none;
		border-radius: 2px;
		cursor: pointer;
		color: inherit;
	}

	form {
		width: 100%;
		padding: 5%;
		background-color: rgba(0, 0, 0, 0.5);
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 100;
		display: flex;
		justify-content: center;

		& > div {
			flex: 1;
			border-radius: 8px;
			max-width: 320px;
			height: fit-content;
			background-color: ${({ theme }) => theme.background.level2};
			display: flex;
			flex-direction: column;
			position: relative;
			padding: 16px;
			padding-top: 40px;
		}
	}

	img {
		margin: 10px 0;
	}

	input,
	select {
		width: 100%;
		border-radius: 2px;
		border: 1px solid ${({ theme }) => theme.divider};
		padding: 8px 10px;
		margin-bottom: 10px;
		outline: none;
		color: ${({ theme }) => theme.text.primary};
		background-color: ${({ theme }) => theme.background.base};

		::placeholder {
			color: ${({ theme }) => theme.text.disabled};
		}
	}

	select {
		text-transform: capitalize;

		&:invalid {
			color: ${({ theme }) => theme.text.disabled};
		}

		option {
			color: ${({ theme }) => theme.text.primary};
		}
	}

	button {
		width: 100%;
		&:hover {
			opacity: 0.5;
		}
	}

	span {
		color: rgba(255, 0, 0, 0.8);
		font-size: 12px;
		margin-bottom: 8px;
	}

	.field-error {
		box-shadow: 0px 0px 4px 2px rgba(255, 0, 0, 0.7);
	}
`;

export default StyledEditFavorites;
