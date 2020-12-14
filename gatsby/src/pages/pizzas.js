import React from "react";
import { graphql } from "gatsby";

import PizzaList from "../components/PizzaList";
import ToppingsFilter from "../components/ToppingsFilter";

export default function PizzasPage({ data, pageContext }) {
  const pizzas = data.pizzas.nodes;

  // const sortedPizzas = pizzas.filter((pizza) =>
  //   pizza.toppings.some((topping) => topping.name === "Onion")
  // );

  return (
    <div>
      <ToppingsFilter activeTopping={pageContext.topping} />
      <PizzaList pizzas={pizzas} />
    </div>
  );
}

export const query = graphql`
  query PizzaQuery($topping: [String]) {
    pizzas: allSanityPizza(
      filter: { toppings: { elemMatch: { name: { in: $topping } } } }
    ) {
      nodes {
        name
        id
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
