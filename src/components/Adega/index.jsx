import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { BeerCard } from "../BeerCard";

export const Adega = () => {
  const [adega, setAdega] = useState([]);

  useEffect(
    () =>
      api
        .get("/beers/")
        .then((response) => {
          setAdega(response.data);
        })
        .catch((err) => console.log(err)),
    []
  );

  return (
    <section>
      <h1>KENZIE BEER SUPLIER!</h1>
      <p>Choose the appropriate beers for a perfect celebration:</p>
      <ul>
        {adega.map((elt, index) => (
          <li key={index}>
            <BeerCard elt={elt} />
          </li>
        ))}
      </ul>
      <div>
        <button>Ir para o Bar da Confraternização!</button>
        <button>Ir para o Bar da Formatura!</button>
        <button>ir para o Bar do Casamento!</button>
      </div>
    </section>
  );
};
