import { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import CartContext from "../store/CartContext.jsx";
import { currencyFormatter } from '../util/formatting.js';
import Button from "./UI/Button.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
import CartItem from "./CartItem.jsx";

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
            <CartItem
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
                onIncrease={() => cartCtx.addItem(item)}
                onDecrease={() => cartCtx.removeItem(item.id)}
            />
        ))}
        </ul>
        <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
        <p className="modal-actions">
                <Button textOnl onClick={handleCloseCart}>Close</Button>
        </p>
    </Modal>
    );
}