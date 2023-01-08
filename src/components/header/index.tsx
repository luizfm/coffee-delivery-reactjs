import { NavLink } from "react-router-dom";
import { CartBadge, CartButton, HeaderContainer, LocaleTag } from "./styles";

import CoffeeDeliveryLogo from "../../assets/coffee-delivery-logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";
import { useContext } from "react";
import { OrderContext } from "../../contexts/order";
import Button from "../button";

export function Header() {
  const { products } = useContext(OrderContext);
  const productsOnCart = products.length;

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img
          src={CoffeeDeliveryLogo}
          alt="A cup of coffee with a rocket logo on the body"
        />
      </NavLink>
      <div>
        <LocaleTag>
          <MapPin size={22} weight="fill" />
          {/* TODO: Remove MOCKED Location */}
          <p>Florianópolis, SC</p>
        </LocaleTag>

        <CartButton to="/checkout" variant="yellowLight">
          <ShoppingCart
            color={defaultTheme.color["yellow-dark"]}
            size={24}
            weight="fill"
          />
          {productsOnCart > 0 && (
            <CartBadge>
              <p>{productsOnCart}</p>
            </CartBadge>
          )}
        </CartButton>
      </div>
    </HeaderContainer>
  );
}

export default Header;
