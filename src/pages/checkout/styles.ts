import styled from "styled-components";
import AddressForm from "../../components/checkout/address-form";

export const CheckoutSectionContainer = styled.section`
  display: grid;
  grid-template: auto auto / 1fr auto;
  grid-template-areas: "address cart" "payment cart";
  padding: 2.5rem 10rem;

  h1 {
    ${(props) => props.theme.visuallyHiddenElement}
  }
`;

type CheckoutElementsProps = {
  gridArea: string;
};

export const CheckoutAddressFormWrapper = styled(
  AddressForm
).attrs<CheckoutElementsProps>((props) => ({
  gridArea: props.gridArea,
}))<CheckoutElementsProps>`
  grid-area: ${(props) => props.gridArea};
`;
