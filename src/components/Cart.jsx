import { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import CartContext from "../store/CartContext.jsx";
import { currencyFormatter } from '../util/formatting.js';
import Button from "./UI/Button.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";


export default function Cart(){
    const cartCtx = useContext(CartContext);
    const UserProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce(
        (totalprice, item) => totalprice + item.quantity * item.price,0
    );

    function handleCloseCart(){
        UserProgressCtx.hideCart();
    }

    return (
    <Modal className="cart" open={UserProgressCtx.progress === 'cart'}>
        <h2>Your Cart</h2>
        <ul>
        {cartCtx.items.map((item) => (
            <li key={item.id}>
                {item.name} - {item.quantity}
            </li>
        ))}
        </ul>
        <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
        <p className="modal-actions">
            <Button textOnl onClick={handleCloseCart}>Close</Button>
            <Button onClick={handleCloseCart}>Go to Checkout</Button>
        </p>
    </Modal>
    );
}