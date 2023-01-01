import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledLoading = styled.div`
	color: #fff;
	font-size: 30px;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 32px 0;
	width: 100%;

	svg {
		fill: #fff;
		margin: 10px;
		animation: ${rotate} 1s linear infinite;
	}
`;

export default StyledLoading;
