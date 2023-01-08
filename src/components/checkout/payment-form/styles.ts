import styled from "styled-components";

export const PaymentFormSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.card};
  row-gap: 2rem;
  padding: 2rem;
  border-radius: 0.375rem;
  max-width: 40rem;
`;

export const PaymentFormSectionTitle = styled.div`
  display: flex;
  column-gap: 0.75rem;

  div {
    h3 {
      font-size: ${(props) => props.theme.typography.size.medium};
      color: ${(props) => props.theme.color.subtitle};
      font-weight: ${(props) => props.theme.typography.weight.normal};
    }

    p {
      color: ${(props) => props.theme.color.text};
      font-size: ${(props) => props.theme.typography.size.small};
      margin-top: 0.125rem;
    }
  }
`;

export const PaymentOptionsContainer = styled.fieldset`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  border: 0;

  legend {
    ${(props) => props.theme.visuallyHiddenElement};
  }

  div {
    display: flex;
    column-gap: 0.75rem;
  }

  p {
    color: ${(props) => props.theme.color.danger};
  }
`;
