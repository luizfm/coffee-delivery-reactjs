import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useEffect, useState } from "react";
import DeliveryPersonIcon from "../../assets/delivery-person.svg";
import { PAYMENT_TYPES_OPTIONS } from "../../helpers/constants";
import { PaymentTypeKind } from "../../reducers/order";
import { CheckoutFormData } from "../checkout";

import {
  OrderDetailsContainer,
  OrderDetailsItem,
  SuccessPageContainer,
} from "./styles";

export function Success() {
  const [orderDetails, setOrderDetails] = useState<CheckoutFormData | null>(
    null
  );

  useEffect(() => {
    // Could have used context here, but since I'm cleaning up all of it
    // After submitting the data, I'll play around with localStorage here.

    setOrderDetails((prevValue) => {
      const localStorageOrderInfo = import.meta.env
        .VITE_LOCAL_STORAGE_KEY as string;
      if (!localStorageOrderInfo) {
        return prevValue;
      }
      const result = localStorage.getItem(localStorageOrderInfo);

      if (!result) {
        return prevValue;
      }

      return JSON.parse(result);
    });
  }, []);

  return (
    <SuccessPageContainer>
      <h1>Pedido realizado com sucesso!</h1>
      <strong>Uhu! Pedido confirmado</strong>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <div>
        <OrderDetailsContainer>
          <h2>Detalhes do pedido</h2>
          <OrderDetailsItem iconBackgroundColor="purple">
            <div>
              <MapPin size={16} weight="fill" />
            </div>
            <p>
              Entrega em{" "}
              <span>
                {orderDetails?.street}, {orderDetails?.number}
              </span>
              <br />
              {orderDetails?.neighborhood} - {orderDetails?.city},{" "}
              {orderDetails?.uf}
            </p>
          </OrderDetailsItem>
          <OrderDetailsItem iconBackgroundColor="yellow">
            <div>
              <Timer size={16} weight="fill" />
            </div>
            <p>
              Previsão de entrega <br />
              <span>20 min - 30 min</span>
            </p>
          </OrderDetailsItem>
          <OrderDetailsItem iconBackgroundColor="yellowDark">
            <div>
              <CurrencyDollar size={16} weight="fill" />
            </div>
            <p>
              Pagamento na entrega <br />
              <span>
                {
                  PAYMENT_TYPES_OPTIONS[
                    orderDetails?.paymentType as PaymentTypeKind
                  ]
                }
              </span>
            </p>
          </OrderDetailsItem>
        </OrderDetailsContainer>
        <img
          src={DeliveryPersonIcon}
          alt="Uma pessoa em uma moto de entrega em uma estrada"
        />
      </div>
    </SuccessPageContainer>
  );
}

export default Success;
