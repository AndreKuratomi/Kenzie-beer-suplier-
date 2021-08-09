import { RemoveFromMariageButton } from "../RemoveFromMariageButton";

export const SoldBeerCardToMariage = ({ elt }) => {
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
      <RemoveFromMariageButton elt={elt}>
        Remover deste bar
      </RemoveFromMariageButton>
    </article>
  );
};
