import styled from "styled-components";

export const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.divider};
  max-width: 425px;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;

  input {
    width: 80%;
    padding: 4px 6px;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.text.primary};
    background-color: ${({ theme }) => theme.background.base};
  }

  button {
    flex: 1;
    cursor: pointer;
    border: none;
    background-color: ${({ theme }) => theme.background.level2};
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border-left: 1px solid ${({ theme }) => theme.divider};
    width: 40px;
    height: 40px;
    font-size: 20px;
    color: ${({ theme }) => theme.text.primary};

    &:hover,
    &:focus {
      opacity: .5;
    }

    & > svg {
      display: inline-block;
      vertical-align: middle;
    }

    @media (min-width: 600px) {
      width: 64px;
      height: 40px;
    }
  }
`;
