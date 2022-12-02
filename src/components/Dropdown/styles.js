import styled from "styled-components";

const StyledDropdown = styled.div`
	position: relative;

	.dropdown-menu {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: absolute;
		padding: 8px 0;
		gap: 4px;
		top: ${({ menuHeight }) => `-${menuHeight + 8}px`};
		right: 12px;
		background-color: ${({ theme }) => theme.background.level1};
		border: 1px solid ${({ theme }) => theme.divider};
		border-radius: 4px;
		width: 120px;

		& > button {
			display: flex;
			background: none;
			border: none;
			align-items: center;
			justify-content: flex-start;
			font-size: 12px;
			color: ${({ theme }) => theme.text.primary};
			width: 80%;
			padding: 8px;
			gap: 8px;
			border-radius: 4px;
			text-transform: capitalize;
			cursor: pointer;

			& > svg {
				width: 20px;
			}

			&:hover {
				background: ${({ theme }) => theme.buttons.hover};
			}
		}
	}

	.dropdown-menu.active {
		opacity: 1;
		visibility: visible;
	}

	.dropdown-menu.inactive {
		opacity: 0;
		visibility: hidden;
	}
`;

export default StyledDropdown;
