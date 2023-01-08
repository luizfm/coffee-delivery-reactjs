import { MapPinLine } from "phosphor-react";
import { defaultTheme } from "../../../styles/themes/default";
import {
  AddressItemsContainer,
  AddressFormSectionContainer,
  AddressFormSectionTitleContainer,
  InputsContainer,
  AddressInput,
} from "./styles";
import { useFormContext } from "react-hook-form";
import { CheckoutFormData } from "../../../pages/checkout";
import { useContext, useEffect } from "react";
import { OrderContext } from "../../../contexts/order";
import { getAddressInfo } from "../../../services/addresses";

type AddressFormSectionProps = {
  className?: string;
};

export function AddressFormSection({ className }: AddressFormSectionProps) {
  const { products } = useContext(OrderContext);
  const {
    register,
    watch,
    reset,
    formState: { errors },
  } = useFormContext<CheckoutFormData>();

  const cepWatch = watch("cep");

  const hasProducts = products.length > 0;

  useEffect(() => {
    if (cepWatch?.length === 8) {
      getAddressInfo(cepWatch).then((result) =>
        reset(
          {
            street: result.logradouro,
            city: result.localidade,
            neighborhood: result.bairro,
            uf: result.uf,
          },
          { keepDirtyValues: true }
        )
      );
    }
  }, [cepWatch]);

  return (
    <AddressFormSectionContainer className={className}>
      <h2>Complete seu pedido</h2>
      <AddressItemsContainer>
        <AddressFormSectionTitleContainer>
          <MapPinLine color={defaultTheme.color["yellow-dark"]} size={22} />
          <div>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </AddressFormSectionTitleContainer>
        <InputsContainer>
          <AddressInput
            id="cep-input"
            label="CEP"
            area="cep"
            placeholder="CEP"
            error={errors.cep?.message}
            disabled={!hasProducts}
            {...register("cep")}
          />
          <AddressInput
            id="street-input"
            label="Rua"
            area="street"
            placeholder="Rua"
            error={errors.street?.message}
            disabled={!hasProducts}
            {...register("street")}
          />
          <AddressInput
            id="number-input"
            label="Número"
            area="number"
            placeholder="Número"
            error={errors.number?.message}
            disabled={!hasProducts}
            {...register("number")}
          />
          <AddressInput
            id="complement-input"
            label="Complemento"
            area="complement"
            placeholder="Complemento"
            error={errors.complement?.message}
            isOptional
            disabled={!hasProducts}
            {...register("complement")}
          />
          <AddressInput
            id="neighborhood-input"
            label="Bairro"
            area="neighborhood"
            placeholder="Bairro"
            error={errors.neighborhood?.message}
            disabled={!hasProducts}
            {...register("neighborhood")}
          />
          <AddressInput
            id="city-input"
            label="Cidade"
            area="city"
            placeholder="Cidade"
            error={errors.city?.message}
            disabled={!hasProducts}
            {...register("city")}
          />
          <AddressInput
            id="uf-input"
            label="UF"
            area="uf"
            placeholder="UF"
            error={errors.uf?.message}
            disabled={!hasProducts}
            {...register("uf")}
          />
        </InputsContainer>
      </AddressItemsContainer>
    </AddressFormSectionContainer>
  );
}

export default AddressFormSection;
