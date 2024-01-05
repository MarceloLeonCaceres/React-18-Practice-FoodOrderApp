import { useContext } from "react";
import { OrderContext } from "../store/order-context";

export default function Meal({ id, image, name, price, description }) {
  const { addItemToCart } = useContext(OrderContext);
  
  return (
    <article className="meal-item">
      <img src={image} alt={name}/>
      <div>
        <h3>{name}</h3>
        <p className="meal-item-description">{description}</p>
        <p className="meal-item-price">{price}</p>
      </div>
      <p className="meal-item-actions">
        <button onClick={() => addItemToCart(id)}>Add to Order</button>
      </p>
    </article>
  );
}
