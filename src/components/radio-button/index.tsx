import { forwardRef } from "react";
import { RadioButtonContainer } from "./styles";

type RadioButtonProps = {
  label: string;
  icon: string;
};

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, icon, ...rest }, ref) => {
    return (
      <RadioButtonContainer>
        <input type="radio" tabIndex={-1} ref={ref} {...rest} />
        <img src={icon} alt="" />
        <label>{label}</label>
      </RadioButtonContainer>
    );
  }
);

export default RadioButton;
