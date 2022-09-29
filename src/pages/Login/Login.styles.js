import styled from "styled-components";
import { Button } from "components/Button/Button";
import { Link } from "react-router-dom";

export const SignUpInfo = styled.div`
  text-align: center;
  font-weight: ${(props) => props.theme.fontWeight.light};
`;

export const StyledButton = styled(Button)`
  margin-top: 20px;
`;
export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.red};
  margin-left: 9px;
  text-decoration: none;
`;

export const LogoWrapper = styled.div`
  height: 187px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const FormWrapper = styled.div`
  width: 327px;
  height: 365px;
  padding: 24px;
  background-color: ${(props) => props.theme.colors.semiDarkBlue};
  border-radius: 20px;

  h1 {
    font-size: ${(props) => props.theme.colors.headingLarge};
    font-weight: ${(props) => props.theme.fontWeight.light};
    margin-bottom: 40px;
  }

  @media screen and (min-width: 376px) {
    width: 400px;
    height: 373px;
    padding: 32px;
  }
`;
