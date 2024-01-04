import logo from '../assets/logo.jpg';

export default function Header(){
    return (
        <header>
            <title>Food Order App</title>
            <img src={logo} alt="Wine and dine" />
            <h1>Food Order App</h1>
            <p>Create your order</p>
        </header>
    );
}