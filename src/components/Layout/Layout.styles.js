import styled from "styled-components";

export const ContentWrapper = styled.div`
  width: 100vw;
  padding-top: 56px;

  @media screen and (min-width: 376px) {
    padding-top: 104px;
  }

  @media screen and (min-width: 1025px) {
    padding-top: 0;
    padding-left: 130px;
  }
`;
