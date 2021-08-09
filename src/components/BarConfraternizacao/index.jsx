import { useContext } from "react";
import { Link } from "react-router-dom";

import { ConfraternizacaoContext } from "../../Providers/confraternizacao";

import { SoldBeerCardToFraternization } from "../SoldBeerCardToFraternization";

export const BarConfraternizacao = () => {
  const { fraternizationBeers } = useContext(ConfraternizacaoContext);
  return (
    <section>
      <header>
        <div>
          <Link to="/">Voltar para a Adega!</Link>
        </div>
      </header>
      <ul>
        {fraternizationBeers &&
          fraternizationBeers.map((elt) => (
            <li>
              <SoldBeerCardToFraternization elt={elt} />
            </li>
          ))}
      </ul>
    </section>
  );
};
