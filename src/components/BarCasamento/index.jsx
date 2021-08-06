import { useContext } from "react";
import { Link } from "react-router-dom";

import { CasamentoContext } from "../../Providers/casamento";

import { SoldBeerCard } from "../SoldBeerCard";

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
              <SoldBeerCard elt={elt} />
            </li>
          ))}
      </ul>
    </section>
  );
};
