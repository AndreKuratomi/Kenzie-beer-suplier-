import { AddButtonGraduation } from "../AddButtonGraduation";
import { AddButtonMariage } from "../AddButtonMariage";
import { AddButtonFraternization } from "../AddButtonFraternization";

export const BeerCard = ({ elt }) => {
  return (
    <article key={elt.id}>
      <figure>
        <img src={elt.image_url} alt={elt.name} />
        <figcaption>{elt.name}</figcaption>
      </figure>
      <p>
        <span>Name: </span>
        {elt.name}
      </p>
      <p>
        <span>First brewed: </span>
        {elt.first_brewed}
      </p>
      <p>
        <span>Description: </span>
        {elt.description}
      </p>
      <p>
        <span>Litros: </span>

        {elt.volume.value}
        {elt.volume.unit}
      </p>
      <AddButtonGraduation elt={elt}>
        Selecione para o bar da formatura!
      </AddButtonGraduation>
      <AddButtonMariage elt={elt}>
        Selecione para o bar do casamento!
      </AddButtonMariage>
      <AddButtonFraternization elt={elt}>
        Selecione para o bar da confraternização!
      </AddButtonFraternization>
    </article>
  );
};
