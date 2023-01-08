import styled from "styled-components";
import Button from "../../button";
import CheckoutCartItem from "../checkout-cart-item";

export const CheckoutCartSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 100%;

  h2 {
    color: ${(props) => props.theme.color.subtitle};
    font-weight: ${(props) => props.theme.typography.family.alternative};
    font-size: ${(props) => props.theme.typography.size.large};
    font-family: ${(props) => props.theme.typography.family.alternative};
  }
`;

export const CheckoutCartCard = styled.div`
  padding: 2.5rem;
  border-top-left-radius: 0.625rem;
  border-top-right-radius: 2.75rem;
  border-bottom-right-radius: 0.625rem;
  border-bottom-left-radius: 2.75rem;

  background-color: ${(props) => props.theme.color.card};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ul {
    width: 100%;
  }
`;

export const CartTotalDetails = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 100%;
`;

export const TotalValuesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${(props) => props.theme.typography.size.small};
  width: 100%;
`;

export const OrderTotal = styled(TotalValuesContainer)`
  strong {
    font-size: ${(props) => props.theme.typography.size["x-large"]};
    color: ${(props) => props.theme.color.subtitle};
    font-weight: ${(props) => props.theme.typography.weight.bold};
  }
`;

export const ConfirmOrderButton = styled(Button)`
  margin-top: 1.5rem;
  height: 2.875rem;
  width: 100%;
`;

export const CartItem = styled(CheckoutCartItem)`
  border-bottom: 0.1px solid ${(props) => props.theme.color.button};
`;
