import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Checkout from "./Checkout";

const CheckoutModal = forwardRef(function Modal({ title, btnOpen, actions }, ref){
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open: () => {
                dialog.current.showModal();
            },
        };
    });

    function pasaOpenCheckout(){
        btnOpen();
    }

    return createPortal(
        <dialog id="modal" ref={dialog}>
            <h2>{title}</h2>
            <Checkout pasaBtnOpen={pasaOpenCheckout} />
            <form method="dialog" id="control-actions">
                {actions}
            </form>
        </dialog>,
        document.getElementById("modal");
    );
});

export default CheckoutModal;