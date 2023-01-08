import { useContext, useMemo } from "react";
import { OrderContext } from "../../../contexts/order";
import { currencyFormatter } from "../../../helpers/currency-formatter";
import Button from "../../button";
import CheckoutCartItem from "../checkout-cart-item";
import EmptyCart from "../empty-cart";
import {
  CartTotalDetails,
  CheckoutCartCard,
  TotalValuesContainer,
  CheckoutCartSectionContainer,
  OrderTotal,
  ConfirmOrderButton,
  CartItem,
} from "./styles";

type CheckoutCartSectionProps = {
  className?: string;
};

export function CheckoutCartSection({ className }: CheckoutCartSectionProps) {
  const { products } = useContext(OrderContext);

  const order = useMemo(() => {
    const total = products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );

    const freightTotal = total * 0.15;

    const totalWithFreight = total + freightTotal;

    return {
      total,
      freightTotal,
      totalWithFreight,
    };
  }, [products]);

  const hasProducts = products.length > 0;

  return (
    <CheckoutCartSectionContainer className={className}>
      <h2>Cafés selecionados</h2>
      <CheckoutCartCard>
        {hasProducts ? (
          <>
            <ul>
              {products.map((product) => (
                <CartItem
                  key={product.id}
                  id={product.id}
                  pictureUrl={product.pictureUrl}
                  price={product.price}
                  quantity={product.quantity}
                  title={product.name}
                />
              ))}
            </ul>
            <CartTotalDetails>
              <TotalValuesContainer>
                <p>Total de itens</p>
                <p>{currencyFormatter(order.total)}</p>
              </TotalValuesContainer>
              <TotalValuesContainer>
                <p>Entrega</p>
                <p>{currencyFormatter(order.freightTotal)}</p>
              </TotalValuesContainer>
              <OrderTotal>
                <strong>Total</strong>
                <strong>{currencyFormatter(order.totalWithFreight)}</strong>
              </OrderTotal>
            </CartTotalDetails>
            <ConfirmOrderButton variant="yellow" type="submit">
              Confirmar Pedido
            </ConfirmOrderButton>
          </>
        ) : (
          <EmptyCart />
        )}
      </CheckoutCartCard>
    </CheckoutCartSectionContainer>
  );
}

export default CheckoutCartSection;
