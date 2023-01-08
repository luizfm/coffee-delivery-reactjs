import { Trash } from "phosphor-react";
import { useCallback, useContext, useState } from "react";
import { OrderContext } from "../../../contexts/order";
import { currencyFormatter } from "../../../helpers/currency-formatter";
import { defaultTheme } from "../../../styles/themes/default";
import Button from "../../button";
import { Select } from "../../select";
import { CheckoutCartItemContainer } from "./styles";

type CheckoutCartItemProps = {
  id: string;
  pictureUrl: string;
  title: string;
  price: number;
  quantity: number;
  className?: string;
};

export function CheckoutCartItem({
  id,
  pictureUrl,
  quantity,
  price,
  title,
  className,
}: CheckoutCartItemProps) {
  const { updateProductQuantity, removeProductFromCart } =
    useContext(OrderContext);
  const [counter, setCounter] = useState(quantity);

  const onIncreaseQuantity = useCallback(() => {
    setCounter((prevValue) => {
      const newValue = prevValue + 1;
      updateProductQuantity(id, newValue);
      return newValue;
    });
  }, []);

  const onDecreaseQuantity = useCallback(() => {
    setCounter((prevValue) => {
      if (prevValue === 1) {
        return prevValue;
      }

      const newValue = prevValue - 1;
      updateProductQuantity(id, newValue);
      return newValue;
    });
  }, []);

  const handleRemoveItem = useCallback(() => {
    removeProductFromCart(id);
  }, []);

  return (
    <CheckoutCartItemContainer className={className}>
      <img src={pictureUrl} />
      <p>{title}</p>
      <div>
        <Select
          counter={counter}
          onPlusClick={onIncreaseQuantity}
          onMinusClick={onDecreaseQuantity}
        />
        <Button onClick={handleRemoveItem}>
          <Trash size={16} color={defaultTheme.color.purple} />
          <span>Remover</span>
        </Button>
      </div>
      <span>{currencyFormatter(price)}</span>
    </CheckoutCartItemContainer>
  );
}

export default CheckoutCartItem;
