import styled from "styled-components";
import { ReactComponent as SearchLogo } from "assets/icon-search.svg";

export const StyledSearchLogo = styled(SearchLogo)`
  flex-shrink: 0;
  transform: scale(0.75);
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px 16px 0;

  @media screen and (min-width: 376px) {
    margin: 24px 24px 0;
  }

  @media screen and (min-width: 1025px) {
    margin: 64px 36px 0;
  }
`;
