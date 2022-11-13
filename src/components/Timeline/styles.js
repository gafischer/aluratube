import styled from "styled-components";

export const StyledTimeline = styled.div`
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
          color: ${({ theme }) => theme.textColorBase || "#000"};
        }
      }
    }
  }

  *::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  *::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.backgroundBase};
  }

  *::-webkit-scrollbar-thumb:horizontal:hover,
  *::-webkit-scrollbar-thumb:vertical:hover {
    background: ${({ theme }) => theme.borderBase};
  }

  *::-webkit-scrollbar-thumb:horizontal:active,
  *::-webkit-scrollbar-thumb:vertical:active {
    background: ${({ theme }) => theme.backgroundLevel1};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.backgroundLevel2};
    border-radius: 10px;

    &:hover,
    &:focus {
      opacity: 0.5;
    }
  }
`;
