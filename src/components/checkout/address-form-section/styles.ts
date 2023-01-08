import styled, { css } from "styled-components";
import Input, { InputProps } from "../../input";

export const AddressFormSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  max-width: 40rem;

  h2 {
    color: ${(props) => props.theme.color.subtitle};
    font-family: ${(props) => props.theme.typography.family.alternative};
    font-size: ${(props) => props.theme.typography.size.large};
  }
`;

export const AddressFormSectionTitleContainer = styled.div`
  display: flex;
  column-gap: 0.75rem;
  margin-bottom: 1rem;

  h3 {
    font-size: ${(props) => props.theme.typography.size.medium};
    font-weight: ${(props) => props.theme.typography.weight.normal};
  }

  p {
    margin-top: 0.125rem;
    font-size: ${(props) => props.theme.typography.size.small};
  }
`;

export const AddressItemsContainer = styled.div`
  ${(props) => css`
    background-color: ${props.theme.color.card};
    border-radius: 0.375rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem 0.875rem;
  `}
`;

export const InputsContainer = styled.div`
  display: grid;
  grid-template: repeat(4, auto) / 12.5rem 1fr 3.75rem;
  grid-template-areas:
    "cep . ."
    "street street street"
    "number complement complement"
    "neighborhood city uf";
  gap: 1rem 0.75rem;
`;

type AddressInputProps = InputProps & {
  area: string;
};

export const AddressInput = styled(Input).attrs<AddressInputProps>((props) => ({
  area: props.area,
}))<AddressInputProps>`
  grid-area: ${(props) => props.area};
`;
