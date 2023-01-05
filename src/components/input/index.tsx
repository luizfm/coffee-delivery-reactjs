import { forwardRef, InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  isOptional?: boolean;
  label: string;
  className?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ isOptional, label, className, ...rest }, ref) => {
    return (
      <InputContainer className={className}>
        <label>{label}</label>
        <input {...rest} ref={ref} />
        {isOptional && <span>Optional</span>}
      </InputContainer>
    );
  }
);

export default Input;
