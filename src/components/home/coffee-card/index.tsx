import { ShoppingCart, Trash } from "phosphor-react";
import { useCallback, useContext, useState } from "react";
import { OrderContext } from "../../../contexts/order";
import Button from "../../button";
import { Select } from "../../select";

import {
  CoffeeCardContainer,
  PriceTagContainer,
  RemoveItemButton,
  TagContainer,
  TagsContainer,
} from "./styles";

interface CoffeeCardProps {
  id: string;
  tags: string[];
  title: string;
  description: string;
  price: number;
  pictureUrl: string;
}

export function CoffeeCard({
  id,
  tags,
  title,
  description,
  price,
  pictureUrl,
}: CoffeeCardProps) {
  const { addProductToCart, products, removeProductFromCart } =
    useContext(OrderContext);

  const [counter, setCounter] = useState(1);

  const onPlusClick = useCallback(() => {
    setCounter((prevValue) => {
      const increasedValue = prevValue + 1;
      return increasedValue;
    });
  }, []);

  const onMinusClick = useCallback(() => {
    setCounter((prevValue) => {
      const decreasedValue = prevValue === 0 ? prevValue : prevValue - 1;
      return decreasedValue;
    });
  }, []);

  const onAddProductToCart = useCallback(() => {
    addProductToCart({
      id,
      name: title,
      pictureUrl,
      price,
      quantity: counter,
    });
  }, [counter]);

  const isProductOnCart = products.find((product) => product.id === id);

  const [, priceFormatted] = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
    .format(price)
    .split("R$");

  const handleRemoveProduct = useCallback(() => {
    removeProductFromCart(id);
  }, []);

  const isAddToCartDisabled = counter === 0;

  return (
    <CoffeeCardContainer>
      {isProductOnCart && (
        <RemoveItemButton
          textSize="xxSmall"
          variant="purpleDark"
          onClick={handleRemoveProduct}
        >
          <Trash size={16} />
        </RemoveItemButton>
      )}
      <img src={pictureUrl} />
      <TagsContainer>
        {tags.map((tag) => (
          <TagContainer key={tag}>
            <p>{tag}</p>
          </TagContainer>
        ))}
      </TagsContainer>
      <dl>
        <dt>{title}</dt>
        <dd>{description}</dd>
      </dl>
      <PriceTagContainer>
        <p>
          R$<span>{priceFormatted}</span>
        </p>
        <Select
          counter={counter}
          onMinusClick={onMinusClick}
          onPlusClick={onPlusClick}
        />
        <Button
          variant="purpleDark"
          onClick={onAddProductToCart}
          type="button"
          disabled={isAddToCartDisabled}
        >
          <ShoppingCart weight="fill" color="white" />
        </Button>
      </PriceTagContainer>
    </CoffeeCardContainer>
  );
}

export default CoffeeCard;
