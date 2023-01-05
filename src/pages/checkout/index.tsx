import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import zod from "zod";

import { CheckoutAddressFormWrapper, CheckoutSectionContainer } from "./styles";
import { PaymentTypeKind } from "../../reducers/order";

const productSchema = zod.object({
  id: zod.string().min(1, "At least one product id is required"),
});

const checkoutFormSchema = zod.object({
  cep: zod.string().min(1, "This field is required"),
  street: zod.string().min(1, "This field is required"),
  number: zod.string().min(1, "This field is required"),
  neighborhood: zod.string().min(1, "This field is required"),
  city: zod.string().min(1, "This field is required"),
  uf: zod.string().min(1, "This field is required"),
  complement: zod.string().optional(),
  paymentType: zod.nativeEnum(PaymentTypeKind),
  products: zod.array(productSchema).min(1),
});

type CheckoutFormData = zod.infer<typeof checkoutFormSchema>;

export function Checkout() {
  const checkoutFormValue = useForm<CheckoutFormData>({
    mode: "onSubmit",
    resolver: zodResolver(checkoutFormSchema),
  });

  return (
    <CheckoutSectionContainer>
      <h1>Checkout</h1>
      <FormProvider {...checkoutFormValue}>
        <CheckoutAddressFormWrapper gridArea="address" />
      </FormProvider>
    </CheckoutSectionContainer>
  );
}

export default Checkout;
