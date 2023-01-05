import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 0.25rem;
  border: 0.1px solid ${(props) => props.theme.color.button};
  border-radius: 0.25rem;
  font-size: ${(props) => props.theme.typography.size.small};
  background-color: ${(props) => props.theme.color.input};
  position: relative;

  &:focus {
    border-color: ${(props) => props.theme.color["yellow-dark"]};
  }

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
  }

  input:not(:placeholder-shown) ~ span {
    ${(props) => props.theme.visuallyHiddenElement}
  }
`;
