import styled from "styled-components";

type InputWrapperContainerProps = {
  disabled?: boolean;
};

export const InputWrapperContainer = styled.div<InputWrapperContainerProps>`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  p {
    color: ${(props) => props.theme.color.danger};
  }
`;

type InputContainerProps = {
  error?: boolean;
  disabled?: boolean;
};

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 0.25rem;
  border: 0.1px solid ${(props) => props.theme.color.button};
  border-radius: 0.25rem;
  font-size: ${(props) => props.theme.typography.size.small};
  background-color: ${(props) => props.theme.color.input};
  position: relative;

  label {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  span {
    font-style: italic;
    color: ${(props) => props.theme.color.label};
    position: absolute;
    top: 0.875rem;
    right: 1rem;

    ${(props) =>
      props.disabled && {
        color: `${props.theme.color.hover}`,
      }}
  }

  input {
    flex: 1;
    width: 100%;
    padding: 0.75rem 0.75rem;
    border: 0;
    border-radius: 0.25rem;
    color: ${(props) => props.theme.color.text};
    background-color: ${(props) => props.theme.color.input};

    &::placeholder {
      color: ${(props) => props.theme.color.label};
    }

    &:focus {
      box-shadow: 0 0 0 1px ${(props) => props.theme.color["yellow-dark"]};
    }

    ${(props) =>
      props.error && {
        ["box-shadow"]: `0 0 0 1px ${props.theme.color.danger}`,
      }}

    ${(props) =>
      props.disabled && {
        cursor: `not-allowed`,
        [`&::placeholder`]: {
          color: `${props.theme.color.hover}`,
        },
        ["&:focus"]: {
          ["box-shadow"]: `0 0 0 1px ${props.theme.color.input}`,
        },
      }}
  }

  input:not(:placeholder-shown) ~ span {
    ${(props) => props.theme.visuallyHiddenElement}
  }
`;
