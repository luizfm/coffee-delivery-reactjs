import { forwardRef } from "react";
import { InputContainer } from "./styles";

type InputProps = {
  isOptional?: boolean;
  label: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ isOptional, label, ...rest }, ref) => {
    return (
      <InputContainer>
        <label>{label}</label>
        <input {...rest} ref={ref} />
        {isOptional && <span>Optional</span>}
      </InputContainer>
    );
  }
);

export default Input;
