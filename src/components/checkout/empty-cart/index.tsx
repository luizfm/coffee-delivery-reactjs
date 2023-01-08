import EmptyCartIcon from "../../../assets/empty-cart.svg";
import Button from "../../button";

import { EmptyCartContainer } from "./styles";

export function EmptyCart() {
  return (
    <EmptyCartContainer>
      <img
        src={EmptyCartIcon}
        alt="Uma sacola de compras com um sorriso triste por estar vazia"
      />
      <p>
        Parece que você não selecionou nenhum item ainda. Que tal retornar para
        a página de itens?
      </p>
      <Button to="/" ariaLabel="Retorna a página inicial">
        Retornar
      </Button>
    </EmptyCartContainer>
  );
}

export default EmptyCart;
