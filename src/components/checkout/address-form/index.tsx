import { MapPinLine } from "phosphor-react";
import { defaultTheme } from "../../../styles/themes/default";
import {
  AddressFormContainer,
  AddressFormWrapper,
  AddressFormTitleContainer,
  InputsContainer,
  AddressInput,
} from "./styles";
import { useFormContext } from "react-hook-form";

type AddressFormProps = {
  className?: string;
};

export function AddressForm({ className }: AddressFormProps) {
  const { handleSubmit, register, formState } = useFormContext();

  const onSubmit = handleSubmit((formValues) => {
    console.log(formValues);
  });

  return (
    <AddressFormWrapper className={className}>
      <h2>Complete seu pedido</h2>
      <AddressFormContainer onSubmit={onSubmit}>
        <AddressFormTitleContainer>
          <MapPinLine color={defaultTheme.color["yellow-dark"]} size={22} />
          <div>
            <p>Endereço de Entrega</p>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </AddressFormTitleContainer>
        <InputsContainer>
          <AddressInput
            id="cep-input"
            label="CEP"
            gridArea="cep"
            placeholder="CEP"
            {...register("cep")}
          />
          <AddressInput
            id="street-input"
            label="Rua"
            gridArea="street"
            placeholder="Rua"
            {...register("street")}
          />
          <AddressInput
            id="number-input"
            label="Número"
            gridArea="number"
            placeholder="Número"
            {...register("number")}
          />
          <AddressInput
            id="complement-input"
            label="Complemento"
            gridArea="complement"
            placeholder="Complemento"
            isOptional
            {...register("complement")}
          />
          <AddressInput
            id="neighborhood-input"
            label="Bairro"
            gridArea="neighborhood"
            placeholder="Bairro"
            {...register("neighborhood")}
          />
          <AddressInput
            id="city-input"
            label="Cidade"
            gridArea="city"
            placeholder="Cidade"
            {...register("city")}
          />
          <AddressInput
            id="uf-input"
            label="UF"
            gridArea="uf"
            placeholder="UF"
            {...register("uf")}
          />
        </InputsContainer>
      </AddressFormContainer>
    </AddressFormWrapper>
  );
}

export default AddressForm;
