import styled from "styled-components";

type RadioButtonContainerProps = {
  checked?: boolean;
};

export const RadioButtonContainer = styled.div<RadioButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1.2rem;
  padding: 1rem;
  border-radius: 0.625rem;
  background-color: ${(props) => props.theme.color.button};
  color: ${(props) => props.theme.color.text};
  text-transform: capitalize;
  position: relative;
  font-size: ${(props) => props.theme.typography.size["x-small"]};

  &:hover {
    background-color: ${(props) => props.theme.color.hover};
  }

  ${(props) =>
    props.checked && {
      ["background-color"]: `${props.theme.color["purple-light"]}`,
      border: `0.1px solid ${props.theme.color.purple}`,
    }}

  img {
    color: ${(props) => props.theme.color.purple};
  }

  input[type="radio"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
`;
