import { forwardRef, InputHTMLAttributes } from "react";
import { InputContainer, InputWrapperContainer } from "./styles";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  isOptional?: boolean;
  label: string;
  className?: string;
  error?: string;
  disabled?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ isOptional, label, className, error, disabled, ...rest }, ref) => {
    return (
      <InputWrapperContainer className={className}>
        <InputContainer error={Boolean(error)} disabled={disabled}>
          <label>{label}</label>
          <input {...(disabled && { readOnly: true })} {...rest} ref={ref} />
          {isOptional && <span>Optional</span>}
        </InputContainer>
        {Boolean(error) && <p>{error}</p>}
      </InputWrapperContainer>
    );
  }
);

export default Input;
