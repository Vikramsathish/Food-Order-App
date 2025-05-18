import Button from './UI/Button.jsx';
import logoimg from '../assets/logo.jpg';
import { useContext } from 'react';
import CartContext from '../store/CartContext.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';

export default function Header(){
    const cartCtx = useContext(CartContext);
    const UserProgressCtx = useContext(UserProgressContext);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0);

    function handleShowCart() {
        UserProgressCtx.showCart();
    }

    console.log(totalCartItems);
    return <header id="main-header">
        <div id="title">
            <img src={logoimg} alt="A restaurant"/>
            <h1>Zesty Eats</h1>
        </div>
        <nav>
            <Button textOnly onClick={handleShowCart}>
                Cart ({totalCartItems})</Button>
        </nav>
    </header>
};