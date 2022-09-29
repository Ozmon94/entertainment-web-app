import styled from "styled-components";

export const StyledButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  border: none;
  outline: none;
  transform: translate(-50%, -50%);
  width: 117px;
  height: 48px;
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 48px;
  justify-content: flex-start;
  align-items: center;
  display: none;
  padding: 9px;
  cursor: pointer;
`;
export const PlayText = styled.span`
  margin-left: 19px;
  font-size: ${(props) => props.theme.fontSize.headingExtraSmall};
  font-weight: ${(props) => props.theme.fontWeight.medium};
`;
