import api from "../../services/api";

import BeerCard from "../BeerCard";

export const Adega = () => {
  return (
    <section>
      <h1>KENZIE BEER SUPLIER!</h1>
      <p>Choose the appropriate beers for a perfect celebration:</p>
      <ul>
        {api
          .get("/beers/")
          .then((response) => {
            const arr = response.data;
            arr.map((elt) => (
              <li>
                <BeerCard elt={elt} />
              </li>
            ));
          })
          .catch((err) => console.log(err))}
      </ul>
    </section>
  );
};
