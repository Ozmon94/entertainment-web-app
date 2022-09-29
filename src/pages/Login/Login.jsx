import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as Logo } from "assets/logo.svg";
import InputField from "components/Input/InputField";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "hooks/useAuth";
import {
  LogoWrapper,
  Wrapper,
  FormWrapper,
  SignUpInfo,
  StyledLink,
  StyledButton,
} from "pages/Login/Login.styles";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const fromPath = location.state?.from?.pathname || "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const emailInputRef = useRef(null);

  useEffect(() => {
    emailInputRef.current.focus();
  }, []);

  useEffect(() => {
    setError({});
    if (email.length > 0 && !EMAIL_REGEX.test(email)) {
      setError((prevState) => {
        return { ...prevState, email: { message: "Email address is invalid" } };
      });
    }
  }, [email, password]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (password.length === 0) {
      setError((prevState) => {
        return { ...prevState, password: { message: "Can't be empty" } };
      });
    }
    if (email.length === 0) {
      setError((prevState) => {
        return { ...prevState, email: { message: "Can't be empty" } };
      });
    }

    if (
      Object.keys(error).length === 0 &&
      email.length > 0 &&
      password.length > 0
    ) {
      try {
        setLoading(true);
        const response = await login(email, password);
        if (response) {
          navigate(fromPath, { replace: true });
        }
      } catch (error) {
        console.log(error);
      }
    }
    setLoading(false);
  };

  return (
    <Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <FormWrapper>
        <h1>Login </h1>
        <form onSubmit={handleOnSubmit}>
          <InputField
            label={"Email address"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ref={emailInputRef}
            autoComplete={"off"}
            error={error?.email}
          />
          <InputField
            label={"Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={"password"}
            error={error?.password}
          />
          <StyledButton disabled={loading}>Login to your account</StyledButton>
        </form>
        <SignUpInfo>
          Don't have an account?{" "}
          <StyledLink to={"/sign-up"}>Sign Up</StyledLink>
        </SignUpInfo>
      </FormWrapper>
    </Wrapper>
  );
};

export default Login;
