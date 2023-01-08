import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { Link, LinkProps, NavLink } from "react-router-dom";
import { defaultTheme } from "../../styles/themes/default";
import { BaseButtonProps, ButtonContainer, NavButton } from "./styles";

type ButtonBaseProps = {
  variant?: BaseButtonProps["variant"];
  children: ReactNode;
  textSize?: BaseButtonProps["textSize"];
  disabled?: boolean;
  to?: string;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps>;

type ButtonAsLink = ButtonBaseProps &
  Omit<LinkProps, keyof ButtonBaseProps> & {
    className?: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "button",
  disabled,
  children,
  textSize = "medium",
  className,
  to,
  ...rest
}: ButtonProps) {
  if (to) {
    return (
      <NavButton
        textSize={textSize}
        className={className}
        variant={variant}
        disabled={disabled}
      >
        <Link
          to={to}
          style={{
            padding: "0.5rem",
            textDecoration: "none",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: defaultTheme.color.text,
          }}
        >
          {children}
        </Link>
      </NavButton>
    );
  }

  return (
    <ButtonContainer
      textSize={textSize}
      variant={variant}
      type="button"
      className={className}
      disabled={disabled}
      {...(rest as ButtonAsButton)}
    >
      {children}
    </ButtonContainer>
  );
}

export default Button;
