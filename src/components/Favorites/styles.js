import styled from "styled-components";

const StyledFavorites = styled.div`
	max-width: 100%;
	padding: 0 16px;

	section {
		padding: 16px;
	}

	h2 {
		font-size: 16px;
	}

	.section-header {
		display: flex;
		flex-direction: row;
		gap: 8px;
		width: 100%;
		margin-bottom: 16px;
		text-transform: capitalize;
		align-items: center;
	}

	.grid-container {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		gap: 8px;
		height: 124px;
	}

	div {
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 100px;
		margin: 0 4px;

		span {
			font-size: 14px;
			padding-top: 8px;
			display: block;
			text-align: center;
			color: ${({ theme }) => theme.text.primary};
		}
	}
`;

export default StyledFavorites;
