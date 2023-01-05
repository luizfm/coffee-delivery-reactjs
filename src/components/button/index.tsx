import { ButtonHTMLAttributes, ReactNode } from "react";
import { BaseButtonProps, ButtonContainer } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: BaseButtonProps["variant"];
  children: ReactNode;
  textSize?: BaseButtonProps["textSize"];
};

export function Button({
  variant = "button",
  children,
  textSize = "medium",
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer variant={variant} textSize={textSize} {...rest}>
      {children}
    </ButtonContainer>
  );
}

export default Button;
