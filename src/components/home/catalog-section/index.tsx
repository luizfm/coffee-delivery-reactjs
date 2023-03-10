import { PRODUCTS_CATALOG } from "../../../helpers/constants";
import CoffeeCard from "../coffee-card";

import { CatalogItems, CatalogSectionContainer } from "./styles";

export function CatalogSection() {
  return (
    <CatalogSectionContainer>
      <h2>Nossos cafés</h2>
      <CatalogItems>
        {PRODUCTS_CATALOG.map((product) => (
          <li key={product.id}>
            <CoffeeCard
              id={product.id}
              title={product.title}
              description={product.description}
              tags={product.tags}
              price={product.price}
              pictureUrl={product.pictureUrl}
            />
          </li>
        ))}
      </CatalogItems>
    </CatalogSectionContainer>
  );
}

export default CatalogSection;
