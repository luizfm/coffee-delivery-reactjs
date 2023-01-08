import styled from "styled-components";
import Button from "../../button";
import { ButtonContainer } from "../../button/styles";

export const CoffeeCardContainer = styled.div`
  border-top-left-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
  border-top-right-radius: 2.125rem;
  border-bottom-left-radius: 2.125rem;
  max-width: 16rem;
  position: relative;
  flex: 1;

  background-color: ${(props) => props.theme.color.card};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 7.5rem;
    height: 7.5rem;
    min-width: 7.5rem;
    margin-top: -3rem;
  }

  dl {
    margin-bottom: 2rem;
    text-align: center;
    flex: 1;

    dt {
      ${(props) => `
      font-size: ${props.theme.typography.size["x-large"]};
      font-family: ${props.theme.typography.family.alternative};
      font-weight: ${props.theme.typography.weight.bold};
    `}
      margin-bottom: 0.5rem;
    }

    dd {
      color: ${(props) => props.theme.color.label};
      font-size: ${(props) => props.theme.typography.size.small};
    }
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 0.25rem;
`;

export const TagContainer = styled.div`
  padding: 0.25rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color["yellow-light"]};
  border-radius: 6.25rem;
  margin: 0.75rem 0 1rem;

  p {
    text-transform: uppercase;
    font-size: ${(props) => props.theme.typography.size["xx-small"]};
    color: ${(props) => props.theme.color["yellow-dark"]};
    font-weight: ${(props) => props.theme.typography.weight.bold};
  }
`;

export const PriceTagContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  width: 100%;

  p {
    margin-right: 0.1rem;
    flex: 1;

    span {
      font-family: ${(props) => props.theme.typography.family.alternative};
      font-weight: ${(props) => props.theme.typography.weight.extraBold};
      color: ${(props) => props.theme.color.text};
      font-size: ${(props) => props.theme.typography.size["xx-large"]};
    }
  }
`;

export const RemoveItemButton = styled(Button)`
  position: absolute;
  top: -0.375rem;
  right: -0.375rem;
`;
