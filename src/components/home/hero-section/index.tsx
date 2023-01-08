import {
  HeroContainer,
  ImageContainer,
  ItemAttribute,
  ItemsContainer,
  AttributeColorsKind,
  ProductInfoContainer,
  BackgroundImageContainer,
  ContentContainer,
} from "./styles";

import CoffeeCupImage from "../../../assets/coffee-cup.svg";
import BackgroundImage from "../../../assets/background.svg";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

const ATTRIBUTE_ITEMS = [
  {
    icon: <ShoppingCart weight="fill" color="white" />,
    label: "Compra simples e segura",
    variant: AttributeColorsKind.yellowDark,
  },
  {
    icon: <Package weight="fill" color="white" />,
    label: "Embalagem mantém o café intacto",
    variant: AttributeColorsKind.text,
  },
  {
    icon: <Timer weight="fill" color="white" />,
    label: "Entrega rápida e rastreada",
    variant: AttributeColorsKind.yellow,
  },
  {
    icon: <Coffee weight="fill" color="white" />,
    label: "O café chega fresquinho até você",
    variant: AttributeColorsKind.purple,
  },
];

export function HeroSection() {
  return (
    <HeroContainer>
      <BackgroundImageContainer
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      />
      <ContentContainer>
        <div>
          <ProductInfoContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </ProductInfoContainer>
          <ItemsContainer>
            {ATTRIBUTE_ITEMS.map((item) => (
              <ItemAttribute key={item.label} variant={item.variant}>
                <div>{item.icon}</div>
                <p>{item.label}</p>
              </ItemAttribute>
            ))}
          </ItemsContainer>
        </div>
        <ImageContainer
          src={CoffeeCupImage}
          alt="A Cup of Coffee and a few coffee grains"
        />
      </ContentContainer>
    </HeroContainer>
  );
}

export default HeroSection;
