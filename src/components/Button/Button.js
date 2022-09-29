import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.colors.red};
  border: none;
  outline: none;
  font-size: ${(props) => props.theme.fontSize.bodyMedium};
  font-weight: ${(props) => props.theme.fontWeight.light};
  height: 48px;
  border-radius: 6px;
  margin: 24px 0;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.pureWhite};
    color: ${(props) => props.theme.colors.semiDarkBlue};
  }
`;
