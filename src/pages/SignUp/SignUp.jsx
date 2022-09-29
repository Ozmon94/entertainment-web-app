import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Logo } from "assets/logo.svg";
import InputField from "components/Input/InputField";

import { useNavigate } from "react-router-dom";
import useAuth from "hooks/useAuth";
import {
  Wrapper,
  LogoWrapper,
  FormWrapper,
  SignUpInfo,
  StyledButton,
  StyledLink,
} from "pages/SignUp/SignUp.styles";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SignUp = () => {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const userEmailRef = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userEmailRef?.current) {
      userEmailRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setError({});
    if (email.length > 0 && !EMAIL_REGEX.test(email)) {
      setError((prevState) => {
        return { ...prevState, email: { message: "Email address is invalid" } };
      });
    }
    if (password.length > 0 && !PWD_REGEX.test(password)) {
      setError((prevState) => {
        return {
          ...prevState,
          password: { message: "Password must have 8-24 characters" },
        };
      });
    }
    if (password !== passwordRepeat) {
      setError((prevState) => {
        return {
          ...prevState,
          passwordRepeat: { message: "Passwords must by the same" },
        };
      });
    }
  }, [email, password, passwordRepeat]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (password.length === 0) {
      setError((prevState) => {
        return { ...prevState, password: { message: "Can't be empty" } };
      });
    }
    if (passwordRepeat.length === 0) {
      setError((prevState) => {
        return { ...prevState, passwordRepeat: { message: "Can't be empty" } };
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
        const response = await signUp(email, password);
        if (response) {
          navigate("/");
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
        <h1>Sign Up</h1>
        <form onSubmit={handleOnSubmit}>
          <InputField
            label={"Email address"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            required
            error={error?.email}
          />
          <InputField
            label={"Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={"password"}
            required
            error={error?.password}
          />
          <InputField
            label={"Password Repeat"}
            value={passwordRepeat}
            onChange={(e) => setPasswordRepeat(e.target.value)}
            type={"password"}
            required
            error={error?.passwordRepeat}
          />
          <StyledButton
            disabled={
              loading ||
              (Object.keys(error).length > 0 &&
                email.length > 0 &&
                password.length > 0)
            }
          >
            Create an account
          </StyledButton>
        </form>
        <SignUpInfo>
          Already have an account?
          <StyledLink to={"/login"}>Login</StyledLink>
        </SignUpInfo>
      </FormWrapper>
    </Wrapper>
  );
};

export default SignUp;
