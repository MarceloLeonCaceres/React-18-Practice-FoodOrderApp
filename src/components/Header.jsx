import { useRef } from "react";
import OrderModal from "./OrderModal.jsx";

import { useContext } from "react";
import { OrderContext } from "../store/order-context.jsx";

export default function Header() {
  const modal = useRef();
  const { items } = useContext(OrderContext);

  const cartQuantity = items.length;

  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <OrderModal ref={modal} title="Your order" actions={modalActions} />
      <header id="main-header">
        <div id="title">
          <img src='logo.jpg' alt="Wine and dine" />
          <h1>Food Order App</h1>
          <p><button onClick={handleOpenCartClick}>Pedido ({cartQuantity})</button></p>
        </div>
      </header>
    </>
  );
}
