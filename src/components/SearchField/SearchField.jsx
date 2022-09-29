import styled from "styled-components";

export const SearchInput = styled.input`
  width: 100%;
  height: 37px;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: ${(props) => props.theme.fontWeight.light};
  caret-color: ${(props) => props.theme.colors.red};
  margin-left: 16px;

  @media screen and (min-width: 376px) {
    font-size: ${(props) => props.theme.fontSize.headingMedium};
    margin-left: 24px;
  }

  &:focus {
    border-bottom: 1px solid ${(props) => props.theme.colors.pureWhite};
  }
`;
