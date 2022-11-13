import styled from "styled-components";
import css from "styled-jsx/css";

export const StyledThemeItem = styled.li`
  margin: 10px auto;

  & > button {
    display: flex;
    font-size: 12px;
    justify-content: left;
    color: ${({ theme }) => theme.textColorBase};
    background: none;
    border: none;
    cursor: pointer;
    width: 100px;
    border-radius: 4px;
    padding: 8px 0;
    text-transform: capitalize;

    background: ${({ theme, selected }) =>
      selected ? theme.backgroundBase : false};

    border: ${({ theme, selected }) =>
      selected ? `1px solid ${theme.borderBase}` : "none"};

    & > svg {
      margin: 0 8px;
    }

    &:hover {
      background: ${({ theme }) => theme.borderBase};
    }
  }
`;
