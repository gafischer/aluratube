import styled from "styled-components";

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	flex-direction: column;

	& > a {
		margin-top: 16px;
		background-color: red;
		text-decoration: none;
		color: ${({ theme }) => theme.text.primary};
		padding: 8px 24px;
		border-radius: 8px;
	}
`;

export default Container;
