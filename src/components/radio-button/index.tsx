import { IconProps } from "phosphor-react";
import { forwardRef, InputHTMLAttributes } from "react";
import { RadioButtonContainer } from "./styles";

type RadioButtonProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: boolean;
  disabled?: boolean;
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
};

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, icon, checked, error, disabled, ...rest }, ref) => {
    const IconComponent = icon;
    return (
      <RadioButtonContainer checked={checked} disabled={disabled}>
        <input
          type="radio"
          ref={ref}
          {...rest}
          {...(disabled && { readOnly: true })}
        />
        <IconComponent size={16} />
        <label>{label}</label>
      </RadioButtonContainer>
    );
  }
);

export default RadioButton;
