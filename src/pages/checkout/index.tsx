import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import zod from "zod";
import { useNavigate } from "react-router-dom";

import {
  CheckoutAddressFormSection,
  CheckoutCartFormSection,
  CheckoutPaymentFormSection,
  CheckoutSectionContainer,
} from "./styles";
import { PaymentTypeKind } from "../../reducers/order";
import { useContext } from "react";
import { OrderContext } from "../../contexts/order";

const checkoutFormSchema = zod.object({
  cep: zod.string().min(1, "Esse campo é necessário"),
  street: zod.string().min(1, "Esse campo é necessário"),
  number: zod
    .string({ required_error: "Esse campo é necessário" })
    .min(1, "Esse campo é necessário"),
  neighborhood: zod.string().min(1, "Esse campo é necessário"),
  city: zod.string().min(1, "Esse campo é necessário"),
  uf: zod.string().min(1, "Esse campo é necessário"),
  complement: zod.string().optional(),
  paymentType: zod.nativeEnum(PaymentTypeKind, {
    required_error: "Esse campo é necessário",
    invalid_type_error:
      "Os tipos disponíveis são Cartão de Crédito, Débito e Dinheiro. Por favor, escolha um desses.",
  }),
});

export type CheckoutFormData = zod.infer<typeof checkoutFormSchema>;

export function Checkout() {
  const navigate = useNavigate();
  const { products, clearStateInfo } = useContext(OrderContext);
  const checkoutFormValue = useForm<CheckoutFormData>({
    mode: "onSubmit",
    resolver: zodResolver(checkoutFormSchema),
  });

  const { handleSubmit } = checkoutFormValue;

  const onSubmit = handleSubmit((formData) => {
    localStorage.setItem(
      `${import.meta.env.VITE_LOCAL_STORAGE_KEY}`,
      JSON.stringify({
        ...formData,
        products,
      })
    );

    clearStateInfo();
    navigate("/success");
  });

  return (
    <CheckoutSectionContainer>
      <h1>Checkout</h1>
      <FormProvider {...checkoutFormValue}>
        <form onSubmit={onSubmit}>
          <CheckoutAddressFormSection area="address" />
          <CheckoutPaymentFormSection area="payment" />
          <CheckoutCartFormSection area="cart" />
        </form>
      </FormProvider>
    </CheckoutSectionContainer>
  );
}

export default Checkout;
