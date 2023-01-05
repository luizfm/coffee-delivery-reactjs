import styled from "styled-components";

export const CatalogSectionContainer = styled.section`
  padding: 2rem 10rem;

  h2 {
    font-family: ${(props) => props.theme.typography.family.alternative};
    margin-bottom: 4rem;
  }
`;

export const CatalogItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 2rem;

  li {
    list-style: none;
    display: flex;
    flex: 1;
  }
`;
