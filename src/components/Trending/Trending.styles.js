import styled from "styled-components";

export const TrendingWrapper = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: ${(props) => props.theme.fontWeight.light};
  margin: 24px 0;
  @media screen and (min-width: 376px) {
    font-size: ${(props) => props.theme.fontSize.headingLarge};
    margin: 38px 0;
  }
`;
export const Wrapper = styled.div`
  padding-left: 16px;
  @media screen and (min-width: 376px) {
    padding-left: 36px;
  }
`;
