import styled from "styled-components";

export const StyledError = styled.span`
  position: absolute;
  right: 0;
  top: calc(37px / 2);
  transform: translateY(-50%);
  color: ${(props) => props.theme.colors.red};
  font-size: ${(props) => props.theme.fontSize.bodySmall};
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 37px;
  margin-bottom: 24px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.grayishBlue};
  outline: none;
  font-size: ${(props) => props.theme.fontSize.bodyMedium};
  padding: 0 16px;

  &:focus {
    border-bottom: 1px solid ${(props) => props.theme.colors.pureWhite};
  }
  &.error {
    border-bottom: 1px solid ${(props) => props.theme.colors.red};
  }

  @media screen and (min-width: 376px) {
    padding: 0;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;
