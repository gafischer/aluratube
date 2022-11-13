import styled from "styled-components";

const StyledBanner = styled.div`
	background-image: url(${({ url }) => url});
	height: 350px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

export default StyledBanner;
