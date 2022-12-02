import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
	color: #fff;
	font-size: 30px;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 32px 0;

	svg {
		fill: #fff;
		margin: 10px;
		animation: ${rotate} 1s linear infinite;
	}
`;

const StyledTimeline = styled.div`
	flex: 1;
	width: 100%;
	padding: 0 16px;
	overflow: hidden;

	h2 {
		font-size: 16px;
		margin-bottom: 16px;
		text-transform: capitalize;
	}

	img {
		aspect-ratio: 16/9;
		font-weight: 500;
		object-fit: cover;
		width: 100%;
		max-width: 210px;
		height: auto;
	}

	section {
		width: 100%;
		padding: 0;
		overflow: hidden;
		padding: 16px;

		div {
			width: calc(100vw - 16px * 4);
			display: grid;
			grid-gap: 16px;
			grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
			grid-auto-flow: column;
			grid-auto-columns: minmax(200px, 1fr);
			overflow-x: scroll;
			scroll-snap-type: x mandatory;

			a {
				scroll-snap-align: start;
				margin-bottom: 12px;

				span {
					padding-top: 8px;
					display: block;
					padding-right: 24px;
					color: ${({ theme }) => theme.text.primary};
				}
			}
		}
	}

	*::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}

	*::-webkit-scrollbar-track {
		background: ${({ theme }) => theme.background.base};
	}

	*::-webkit-scrollbar-thumb:horizontal:hover,
	*::-webkit-scrollbar-thumb:vertical:hover {
		background: ${({ theme }) => theme.buttons.hover};
	}

	*::-webkit-scrollbar-thumb:horizontal:active,
	*::-webkit-scrollbar-thumb:vertical:active {
		background: ${({ theme }) => theme.buttons.active};
	}

	*::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.buttons.selected};
		border-radius: 10px;

		&:hover,
		&:focus {
			opacity: 0.5;
		}
	}
`;

export default StyledTimeline;
