import styled from "styled-components";
import AddressFormSection from "../../components/checkout/address-form-section";
import CheckoutCartSection from "../../components/checkout/checkout-cart-section";
import PaymentFormSection from "../../components/checkout/payment-form";

export const CheckoutSectionContainer = styled.section`
  padding: 2.5rem 10rem;

  h1 {
    ${(props) => props.theme.visuallyHiddenElement}
  }

  form {
    display: grid;
    grid-template: auto 1fr / 1fr 28rem;
    grid-template-areas: "address cart" "payment cart";
    gap: 0.75rem 2rem;
  }
`;

type CheckoutElementsProps = {
  area: string;
};

export const CheckoutAddressFormSection = styled(
  AddressFormSection
).attrs<CheckoutElementsProps>((props) => ({
  area: props.area,
}))<CheckoutElementsProps>`
  grid-area: ${(props) => props.area};
`;

export const CheckoutPaymentFormSection = styled(
  PaymentFormSection
).attrs<CheckoutElementsProps>((props) => ({
  area: props.area,
}))<CheckoutElementsProps>`
  grid-area: ${(props) => props.area};
  align-self: flex-start;
`;

export const CheckoutCartFormSection = styled(
  CheckoutCartSection
).attrs<CheckoutElementsProps>((props) => ({
  area: props.area,
}))<CheckoutElementsProps>`
  grid-area: ${(props) => props.area};
`;
