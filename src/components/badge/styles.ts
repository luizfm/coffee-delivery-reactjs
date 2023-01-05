import styled from "styled-components";

type BadgeContainerProps = {
  label?: number;
};

export const BadgeContainer = styled.div<BadgeContainerProps>`
  height: 1.25rem;
  width: 1.25rem;
  min-width: 1.25rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color["yellow-dark"]};
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: ${(props) => props.theme.color.white};
    font-weight: ${(props) => props.theme.typography.weight.bold};
    font-size: ${(props) => props.theme.typography.size["x-small"]};
  }
`;
