import styled from "styled-components";
import Badge from "../badge";
import { BadgeContainer } from "../badge/styles";
import Button from "../button";
import { ButtonContainer } from "../button/styles";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  padding: 2rem 10rem;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: ${(props) => props.theme.color.background};

  > a {
    border-radius: 0.375rem;
    padding: 0.25rem;
  }

  image {
    flex: 1;
  }

  > div {
    display: flex;
    column-gap: 0.75rem;
    justify-content: space-between;
  }
`;

export const LocaleTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.25rem;
  background-color: ${(props) => props.theme.color["purple-light"]};
  border-radius: 0.375rem;
  padding: 0.5rem;

  svg {
    color: ${(props) => props.theme.color["purple-dark"]};
    fill: ${(props) => props.theme.color["purple-dark"]};
  }

  p {
    color: ${(props) => props.theme.color["purple-dark"]};
  }
`;

export const CartButton = styled(Button)`
  position: relative;
`;

export const CartBadge = styled(BadgeContainer)`
  position: absolute;
  top: -0.375rem;
  right: -0.375rem;
`;
