import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem;
  column-gap: 0.25rem;
  border: 0.1px solid ${(props) => props.theme.color.button};
  border-radius: 0.25rem;
  font-size: ${(props) => props.theme.typography.size.small};

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
  }

  input {
    flex: 1;
    color: ${(props) => props.theme.color.text};

    &::placeholder {
      color: ${(props) => props.theme.color.label};
    }
  }
`;
