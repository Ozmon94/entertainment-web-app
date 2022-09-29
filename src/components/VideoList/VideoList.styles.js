import styled from "styled-components";

export const VideoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media screen and (min-width: 376px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 29px;
  }
  @media screen and (min-width: 1025px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
  }
`;

export const Title = styled.h2`
  font-weight: ${(props) => props.theme.fontWeight.light};
  font-size: 20px;
  margin: 24px 0;
  @media screen and (min-width: 376px) {
    font-size: ${(props) => props.theme.fontSize.headingLarge};
  }
  @media screen and (min-width: 1025px) {
    margin: 38px 0;
  }
`;

export const Wrapper = styled.div`
  padding: 0 16px;

  @media screen and (min-width: 376px) {
    padding: 0 36px;
  }
`;
