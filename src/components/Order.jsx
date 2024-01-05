import { OrderContext } from "../store/order-context.jsx";
import { useContext } from "react";

export default function Order() {
  const { items, updateItemQuantity } = useContext(OrderContext);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div id="order">
        {items.length === 0 && <p>No items in order!</p>}
        {items.length > 0 && (
            <ul id='order-items'>
                {items.map((item) => {
                    const formattedPrice = `$${item.price.toFixed(2)}`;

                    return (
                        <li key={item.id}>
                            <div>
                                <span>{item.name}</span>
                                <span>({formattedPrice})</span>
                            </div>
                            <div className="cart-item-actions">
                                <button onClick={() => updateItemQuantity(item.id, -1)}>
                                    -
                                </button>
                            </div>
                            <span>{item.quantity}</span>
                            <div className="cart-item-actions">
                                <button onClick={() => updateItemQuantity(item.id, 1)}>
                                    +
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        )}
        <p id='cart-total-price'>
            Order Total: <strong>{formattedTotalPrice}</strong>
        </p>
    </div>
  );
}
