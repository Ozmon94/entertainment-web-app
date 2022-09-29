import styled from "styled-components";

export const Wrapper = styled.div`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: ${(props) => props.theme.colors.darkBlue}50;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (min-width: 376px) {
    top: 16px;
    right: 16px;
  }

  svg path {
    fill: ${(props) =>
      props.bookmarked ? props.theme.colors.pureWhite : "none"};
  }

  @media screen and (min-width: 769px) {
    &:hover {
      background-color: ${(props) => props.theme.colors.pureWhite};
    }
    &:hover svg path {
      stroke: ${(props) => props.theme.colors.darkBlue};
    }
  }
`;
