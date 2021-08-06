import { useEffect, useContext } from "react";
// import { useState } from "react";
import { useHistory } from "react-router-dom";

import { api } from "../../services/api";

import { BeerCard } from "../BeerCard";

import { AdegaContext } from "../../Providers/adega";

export const Adega = () => {
  // const [adega, setAdega] = useState([]);
  const { adega, setAdega } = useContext(AdegaContext);

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
      <p id="adega">Choose the appropriate beers for a perfect celebration:</p>
      <ul>
        {adega.map((elt, index) => (
          <li key={index}>
            <BeerCard elt={elt} />
          </li>
        ))}
      </ul>
      <div id="buttons">
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
