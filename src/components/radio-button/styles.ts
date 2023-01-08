import styled from "styled-components";

type RadioButtonContainerProps = {
  checked?: boolean;
  disabled?: boolean;
};

export const RadioButtonContainer = styled.div<RadioButtonContainerProps>`
  display: flex;
  align-items: center;
  width: 100%;
  column-gap: 0.75rem;
  padding: 1rem;
  border-radius: 0.625rem;
  background-color: ${(props) => props.theme.color.button};
  color: ${(props) => props.theme.color.text};
  text-transform: uppercase;
  position: relative;
  font-size: ${(props) => props.theme.typography.size["x-small"]};
  cursor: pointer;
  border: 0.1px solid transparent;

  &:hover {
    background-color: ${(props) => !props.checked && props.theme.color.hover};
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.color.purple};
  }

  ${(props) =>
    props.checked && {
      ["background-color"]: `${props.theme.color["purple-light"]}`,
      ["border-color"]: `${props.theme.color.purple}`,
    }}

  ${(props) =>
    props.disabled && {
      color: props.theme.color.hover,
      background: props.theme.color.button,
      ["&:hover"]: {
        background: props.theme.color.button,
      },
      ["border-color"]: props.theme.color.hover,
    }}

  svg {
    color: ${(props) => props.theme.color.purple};
  }

  label {
    cursor: pointer;
  }

  input[type="radio"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    z-index: 2;
    inset: 0;

    ${(props) =>
      props.disabled && {
        cursor: "not-allowed",
      }}
  }
`;
