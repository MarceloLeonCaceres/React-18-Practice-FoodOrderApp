export default function Meal({ image, name, price, description }) {
  return (
    <article className="meal-item">
      <button>Add to Order</button>
      <img src={image} />
      <h3>{name}</h3>
      <p className="meal-item-description">{description}</p>
      <p className="meal-item-price">{price}</p>
    </article>
  );
}
