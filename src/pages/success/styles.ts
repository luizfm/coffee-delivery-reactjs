import styled from "styled-components";

export const SuccessPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 10rem;

  h1 {
    ${(props) => props.theme.visuallyHiddenElement};
  }

  strong {
    color: ${(props) => props.theme.color["yellow-dark"]};
    font-size: ${(props) => props.theme.typography.size["xxx-large"]};
    font-weight: ${(props) => props.theme.typography.weight.extraBold};
    font-family: ${(props) => props.theme.typography.family.alternative};
    margin-bottom: 0.25rem;
  }

  > p {
    color: ${(props) => props.theme.color.subtitle};
    font-size: ${(props) => props.theme.typography.size["x-large"]};
    margin-bottom: 2.5rem;
  }

  > div {
    display: flex;
    column-gap: 6.375rem;

    img {
      width: 30.6875;
      min-width: 30.6875;
    }
  }
`;

export const OrderDetailsContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 32.875rem;
  flex-direction: column;
  row-gap: 2rem;
  border-bottom-right-radius: 0.375rem;
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 2.25rem;
  border-bottom-left-radius: 2.25rem;
  padding: 2.5rem;
  position: relative;
  background-color: ${(props) => props.theme.color.background};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background-image: ${(props) =>
      `linear-gradient(to right,${props.theme.color["yellow-dark"]}, ${props.theme.color.purple});`};
  }

  h2 {
    ${(props) => props.theme.visuallyHiddenElement};
  }
`;

const IconBackgroundColors = {
  yellowDark: "yellow-dark",
  yellow: "yellow",
  purple: "purple",
} as const;

type OrderDetailsItemProps = {
  iconBackgroundColor: keyof typeof IconBackgroundColors;
};

export const OrderDetailsItem = styled.div<OrderDetailsItemProps>`
  display: flex;
  column-gap: 0.75rem;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    min-width: 2rem;
    background-color: ${(props) =>
      props.theme.color[IconBackgroundColors[props.iconBackgroundColor]]};

    > svg {
      fill: ${(props) => props.theme.color.white};
    }
  }

  span {
    font-weight: ${(props) => props.theme.typography.weight.bold};
  }
`;
