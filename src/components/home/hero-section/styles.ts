import styled from "styled-components";

export const HeroContainer = styled.section`
  position: relative;
`;

export const BackgroundImageContainer = styled.div`
  background-image: url("../../../../src/assets/background.svg");
  filter: blur(80px);
  position: absolute;
  inset: 0;
`;

export const ContentContainer = styled.section`
  padding: 5.875rem 10rem;
  display: flex;
  flex: 1;
  column-gap: 3.5rem;
`;

export const ImageContainer = styled.img`
  height: 22.5rem;
  width: 29.75rem;
  object-fit: contain;
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  flex: 1;
  margin-bottom: 4.375rem;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-weight: ${(props) => props.theme.typography.weight.extraBold};
    color: ${(props) => props.theme.color.title};
    font-size: ${(props) => props.theme.typography.size.giant};
    line-height: ${(props) => props.theme.typography.lineHeight.normal};
  }

  p {
    font-size: ${(props) => props.theme.typography.size["x-large"]};
    color: ${(props) => props.theme.color.subtitle};
  }
`;

export const ItemsContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem 2.5rem;
`;

export enum AttributeColorsKind {
  yellowDark = "yellowDark",
  yellow = "yellow",
  purple = "purple",
  text = "text",
}

export const ITEM_ATTRIBUTE_COLORS = {
  [AttributeColorsKind.yellowDark]: "yellow-dark",
  [AttributeColorsKind.yellow]: "yellow",
  [AttributeColorsKind.purple]: "purple",
  [AttributeColorsKind.text]: "text",
} as const;

type ItemAttributeProps = {
  variant: keyof typeof ITEM_ATTRIBUTE_COLORS;
};

export const ItemAttribute = styled.li<ItemAttributeProps>`
  display: flex;
  align-items: center;
  column-gap: 0.75rem;

  > div {
    border-radius: 50%;
    padding: 0.5rem;
    height: 2rem;
    width: 2rem;
    min-width: 2rem;
    background-color: ${(props) =>
      props.theme.color[ITEM_ATTRIBUTE_COLORS[props.variant]]};
  }
`;
