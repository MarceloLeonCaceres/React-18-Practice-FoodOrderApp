import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Order from "./Order.jsx";

const OrderModal = forwardRef(function Modal({ title, actions }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog id="modal" ref={dialog}>
      <h2>{title}</h2>
      <Order />
      <form method="dialog" id="meal-item-actions">
        {actions}
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default OrderModal;
