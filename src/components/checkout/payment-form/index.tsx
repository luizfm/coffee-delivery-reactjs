import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { OrderContext } from "../../../contexts/order";
import { CheckoutFormData } from "../../../pages/checkout";
import { PaymentTypeKind } from "../../../reducers/order";
import { defaultTheme } from "../../../styles/themes/default";
import RadioButton from "../../radio-button";
import {
  PaymentFormSectionContainer,
  PaymentFormSectionTitle,
  PaymentOptionsContainer,
} from "./styles";

const PAYMENT_TYPES = [
  {
    label: "Cartão de crédito",
    icon: CreditCard,
    value: PaymentTypeKind.CreditCard,
  },
  { label: "Cartão de débito", icon: Bank, value: PaymentTypeKind.DebitCard },
  { label: "Dinheiro", icon: Money, value: PaymentTypeKind.Money },
];

type PaymentFormSectionProps = {
  className?: string;
};

export function PaymentFormSection({ className }: PaymentFormSectionProps) {
  const { products } = useContext(OrderContext);
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<CheckoutFormData>();

  const paymentTypeWatch = watch("paymentType");

  const hasProducts = products.length > 0;

  return (
    <PaymentFormSectionContainer className={className}>
      <PaymentFormSectionTitle>
        <CurrencyDollar size={22} color={defaultTheme.color.purple} />
        <div>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </PaymentFormSectionTitle>
      <PaymentOptionsContainer>
        <legend aria-describedby="payment-types-error">
          Tipos de pagamento
        </legend>
        <div>
          {PAYMENT_TYPES.map((paymentType) => (
            <RadioButton
              id={`radio-button-${paymentType.label}`}
              key={paymentType.label}
              label={paymentType.label}
              icon={paymentType.icon}
              value={paymentType.value}
              disabled={!hasProducts}
              {...register("paymentType")}
              checked={paymentTypeWatch === paymentType.value}
            />
          ))}
        </div>
        {Boolean(errors.paymentType) && (
          <p id="payment-types-error">{errors.paymentType?.message}</p>
        )}
      </PaymentOptionsContainer>
    </PaymentFormSectionContainer>
  );
}

export default PaymentFormSection;
