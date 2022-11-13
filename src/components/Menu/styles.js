import styled from "styled-components";

export const StyledMenu = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: row;
  height: 56px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.background.level1};
  border: 1px solid ${({ theme }) => theme.divider};
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  position: fixed;
  width: 100%;

  label {
    cursor: pointer;
  }

  .logo {
    width: 100%;
    max-width: 80px;
    @media (min-width: 600px) {
      max-width: 127px;
    }
    .text {
      fill: ${({ theme }) => theme.text.primary};
    }
  }
`;
