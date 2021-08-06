import { useContext } from "react";
import { Link } from "react-router-dom";

import { FormaturaContext } from "../../Providers/formatura";

import { SoldBeerCard } from "../SoldBeerCard";

export const BarFormatura = () => {
  const { graduationBeers } = useContext(FormaturaContext);
  return (
    <section>
      <header>
        <div>
          <Link to="/">Voltar para a Adega!</Link>
        </div>
      </header>
      <ul>
        {graduationBeers &&
          graduationBeers.map((elt) => (
            <li>
              <SoldBeerCard elt={elt} />
            </li>
          ))}
      </ul>
    </section>
  );
};
