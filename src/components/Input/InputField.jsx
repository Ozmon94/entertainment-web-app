import React from "react";
import {
  Wrapper,
  StyledInput,
  StyledError,
} from "components/Input/InputFiels.styles";

const InputField = React.forwardRef(
  ({ label, value, onChange, type = "text", error, ...rest }, ref) => {
    return (
      <Wrapper>
        <StyledInput
          type={type}
          value={value}
          onChange={onChange}
          placeholder={label}
          className={error ? "error" : ""}
          ref={ref}
          {...rest}
        />
        {error ? <StyledError> {error.message}</StyledError> : null}
      </Wrapper>
    );
  }
);

export default InputField;
