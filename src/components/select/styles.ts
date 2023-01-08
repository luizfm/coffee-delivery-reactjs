import styled from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.25rem;
  color: ${(props) => props.theme.color["title"]};
  padding: 0.5rem;
  border-radius: 0.625rem;
  background-color: ${(props) => props.theme.color["button"]};

  button {
    font-size: ${(props) => props.theme.typography.size.large};
    color: ${(props) => props.theme.color["purple"]};
    border: 0;
    background-color: transparent;
    margin: 0 0.25rem;
    cursor: pointer;
    border-radius: inherit;
    padding: 0 0.2rem;

    &:hover {
      color: ${(props) => props.theme.color["purple-dark"]};
    }
  }
`;
