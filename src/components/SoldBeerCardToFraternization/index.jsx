import { RemoveFromFraternizationButton } from "../RemoveFromFraternizationButton";

export const SoldBeerCardToFraternization = ({ elt }) => {
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
      <RemoveFromFraternizationButton elt={elt}>
        Remover deste bar
      </RemoveFromFraternizationButton>
    </article>
  );
};
