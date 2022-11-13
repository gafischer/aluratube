import styled from "styled-components";

export const StyledSwitch = styled.div`
  .menu-trigger {
    display: flex;
    padding: 4px;
    border-radius: 4px;
    color: ${({ theme }) => theme.text.primary};
    font-size: 16px;
    align-items: center;
    font-size: 12px;
    cursor: pointer;

    & > svg {
      display: inline-block;
      vertical-align: middle;
      margin-right: 4px;
      font-size: 20px;
    }

    &:hover {
      background: ${({ theme }) => theme.buttons.hover};
    }
  }

  .dropdown-menu {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 44px;
    right: 12px;
    background-color: ${({ theme }) => theme.background.level1};
    border: 1px solid ${({ theme }) => theme.divider};
    border-radius: 4px;
    width: 120px;

    & > ul {
      list-style-type: none;
    }
  }

  .dropdown-menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transition: 400ms ease;
  }

  .dropdown-menu.inactive {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: 400ms ease;
  }
`;
