export const BeerCard = ({ elt }) => {
  // console.log(elt);
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
      <button onClick={"dfsfs"}>Choose this beer!</button>
    </article>
  );
};
