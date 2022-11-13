import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.background.level1 };

  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;

    p {
      color: ${({ theme }) => theme.text.secondary };
    }
  }
`;
