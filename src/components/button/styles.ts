import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const BUTTON_COLOR_PROPS = {
  yellow: {
    background: "yellow",
    color: "white",
    hover: "yellow-dark",
  },
  yellowLight: {
    background: "yellow-light",
    color: "yellow-dark",
    hover: "yellow-light",
  },
  purpleDark: {
    background: "purple-dark",
    color: "white",
    hover: "purple",
  },
  button: {
    background: "button",
    color: "text",
    hover: "hover",
  },
} as const;

const ButtonTextSize = {
  xxSmall: "xx-small",
  xSmall: "x-small",
  small: "small",
  medium: "medium",
  large: "large",
  xLarge: "x-large",
  xxLarge: "xx-large",
  xxxLarge: "xxx-large",
  giant: "giant",
};

type ButtonCustomProps = {
  variant: keyof typeof BUTTON_COLOR_PROPS;
  textSize: keyof typeof ButtonTextSize;
  disabled?: boolean;
};

export type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonCustomProps;

export const ButtonContainer = styled.button<BaseButtonProps>`
  padding: 0.5rem;
  border-radius: 0.625rem;
  border: 0;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  cursor: pointer;
  transition: background 0.1s ease-in;

  background-color: ${(props) =>
    props.theme.color[BUTTON_COLOR_PROPS[props.variant].background]};

  color: ${(props) =>
    props.theme.color[BUTTON_COLOR_PROPS[props.variant].color]};

  &:hover {
    background-color: ${(props) =>
      props.theme.color[BUTTON_COLOR_PROPS[props.variant].hover]};
  }

  ${(props) =>
    props.disabled && {
      opacity: 0.2,
      cursor: "not-allowed",
      ["&:hover"]: {
        background:
          props.theme.color[BUTTON_COLOR_PROPS[props.variant].background],
      },
    }}
`;

export const TestButton = styled.button`
  color: red;
`;

export const NavButton = styled.div<ButtonCustomProps>`
  border-radius: 0.625rem;
  border: 0;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  cursor: pointer;
  transition: background 0.1s ease-in;
  position: relative;

  background-color: ${(props) =>
    props.theme.color[BUTTON_COLOR_PROPS[props.variant].background]};

  color: ${(props) =>
    props.theme.color[BUTTON_COLOR_PROPS[props.variant].color]};

  &:hover {
    background-color: ${(props) =>
      props.theme.color[BUTTON_COLOR_PROPS[props.variant].hover]};
  }

  ${(props) =>
    props.disabled && {
      opacity: 0.2,
      cursor: "not-allowed",
      ["&:hover"]: {
        background:
          props.theme.color[BUTTON_COLOR_PROPS[props.variant].background],
      },
    }}

  > a {
    border-radius: inherit;
    ${(props) =>
      props.disabled && {
        cursor: "not-allowed",
      }}
  }
`;
