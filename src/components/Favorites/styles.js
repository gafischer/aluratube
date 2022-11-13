import styled from "styled-components";

export const StyledFavorites = styled.div`
  max-width: 100%;
  padding: 0 16px;

  section {
    padding: 16px;
  }

  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }

  .grid-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    height: 124px;
  }

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100px;

    span {
      font-size: 14px;
      padding-top: 8px;
      display: block;
      text-align: center;
      color: ${({ theme }) => theme.text.primary};
    }
  }
`;
