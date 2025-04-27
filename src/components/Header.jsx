import Button from './UI/Button.jsx';
import logoimg from '../assets/logo.jpg';

export default function Header(){
    return <header id="main-header">
        <div id="title">
            <img src={logoimg} alt="A restaurant"/>
            <h1>Zesty Eats</h1>
        </div>
        <nav>
            <Button textOnly>Cart (0)</Button>
        </nav>
    </header>
};