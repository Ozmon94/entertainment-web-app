import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  flex: 0 0 240px;
  height: 140px;

  @media screen and (min-width: 376px) {
    flex: 0 0 470px;
    height: 230px;
  }
`;

export const InfoSpan = styled.span`
  color: rgba(255, 255, 255, 0.75);
  font-size: 12px;
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

export const InfoWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 3px;
`;

export const Title = styled.h3`
  font-size: 15px;
  font-weight: ${(props) => props.theme.fontWeight.medium};
  color: ${(props) => props.theme.colors.pureWhite};

  @media screen and (min-width: 376px) {
    font-size: ${(props) => props.theme.fontSize.headingSmall};
  }
`;
export const Info = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

export const Image = styled.div`
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  height: 100%;
  padding: 24px;

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
