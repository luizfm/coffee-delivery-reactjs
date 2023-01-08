import EmptyCartIcon from "../../../assets/empty-cart.svg";
import Button from "../../button";

import { EmptyCartContainer } from "./styles";

export function EmptyCart() {
  return (
    <EmptyCartContainer>
      <img src={EmptyCartIcon} />
      <p>
        Parece que você não selecionou nenhum item ainda. Que tal retornar para
        a página de itens?
      </p>
      <Button to="/">Retornar</Button>
    </EmptyCartContainer>
  );
}

export default EmptyCart;
