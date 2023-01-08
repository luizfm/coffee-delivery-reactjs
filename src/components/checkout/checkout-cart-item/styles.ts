import styled from "styled-components";

type CheckoutCartItemContainerProps = {
  className?: string;
};

export const CheckoutCartItemContainer = styled.div<CheckoutCartItemContainerProps>`
  padding-bottom: 1.5rem;
  display: grid;
  gap: 0.5rem 1.25rem;
  grid-template: auto 2rem / auto 1fr auto;
  grid-template-areas: "picture title price" "picture buttons .";

  &:not(:first-of-type) {
    padding-top: 1.5rem;
  }

  img {
    grid-area: picture;
    height: 4rem;
    width: 4rem;
    min-width: 4rem;
  }

  p {
    grid-area: title;
    color: ${(props) => props.theme.color.subtitle};
  }

  div {
    grid-area: buttons;
    display: flex;
    column-gap: 0.5rem;
  }

  > span {
    grid-area: price;
    font-weight: ${(props) => props.theme.typography.weight.bold};
  }
`;
