import styled from "styled-components";

const StyledThemeItem = styled.li`
	margin: 10px auto;

	& > button {
		display: flex;
		font-size: 12px;
		justify-content: left;
		color: ${({ theme }) => theme.text.primary};
		background: none;
		border: none;
		cursor: pointer;
		width: 100px;
		border-radius: 4px;
		padding: 8px 0;
		text-transform: capitalize;
		margin: 0 auto;

		background: ${({ theme, selected }) =>
			selected ? theme.buttons.selected : false};

		border: ${({ theme, selected }) =>
			selected ? `1px solid ${theme.divider}` : "none"};

		& > svg {
			margin: 0 8px;
		}

		&:hover {
			background: ${({ theme }) => theme.buttons.hover};
		}
	}
`;

export default StyledThemeItem;
