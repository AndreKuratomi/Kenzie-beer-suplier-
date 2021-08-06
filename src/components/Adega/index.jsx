import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

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

  const history1 = useHistory();
  const history2 = useHistory();
  const history3 = useHistory();

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
        <button onClick={() => history1.push("/formatura")}>
          Ir para o Bar da Formatura!
        </button>
        <button onClick={() => history2.push("/casamento")}>
          Ir para o Bar do Casamento!
        </button>
        <button onClick={() => history3.push("/confraternizacao")}>
          Ir para o Bar da Confraternização!
        </button>
      </div>
    </section>
  );
};
