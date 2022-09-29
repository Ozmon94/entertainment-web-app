import styled from "styled-components";

export const InfoSpan = styled.span`
  color: ${(props) => props.theme.colors.pureWhite}FB;
  font-weight: ${(props) => props.theme.fontWeight.light};
  font-size: 11px;

  @media screen and (min-width: 376px) {
    font-size: ${(props) => props.theme.fontSize.bodyMedium};
  }
`;

export const Dot = styled.div`
  width: 3px;
  height: 3px;
  background-color: #979797;
  border-radius: 50%;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const Title = styled.h3`
  margin-top: 5px;
  font-size: 14px;
  font-weight: ${(props) => props.theme.fontWeight.medium};
  @media screen and (min-width: 376px) {
    font-size: ${(props) => props.theme.fontSize.headingExtraSmall};
  }
`;

export const InfoWrapper = styled.div`
  margin-top: 8px;
`;

export const ImageDiv = styled.div`
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  padding: 16px;
  height: 110px;
  cursor: pointer;
  border-radius: 8px;

  @media screen and (min-width: 376px) {
    height: 170px;
  }

  @media screen and (min-width: 769px) {
    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
      background-blend-mode: color;
    }

    &:hover button {
      display: flex;
    }
  }
`;

export const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
`;
