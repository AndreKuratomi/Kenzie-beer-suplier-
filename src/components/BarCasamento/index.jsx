import { useContext } from "react";
import { Link } from "react-router-dom";

import { CasamentoContext } from "../../Providers/casamento";

import { SoldBeerCardToMariage } from "../SoldBeerCardToMariage";

export const BarCasamento = () => {
  const { mariageBeers } = useContext(CasamentoContext);
  return (
    <section>
      <header>
        <div>
          <Link to="/">Voltar para a Adega!</Link>
        </div>
      </header>
      <ul>
        {mariageBeers &&
          mariageBeers.map((elt) => (
            <li>
              <SoldBeerCardToMariage elt={elt} />
            </li>
          ))}
      </ul>
    </section>
  );
};
