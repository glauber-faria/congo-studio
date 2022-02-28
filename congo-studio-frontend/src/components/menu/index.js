import "./style.css";
import logo from "../../img/logo.png"
export default function Menu() {
    return (
        <div className="menu-container">
            <ul className="menu">
                <li><img src={logo} style={{ width: '100%' }}></img></li>
            </ul>
            <ul className="menu menu-options">
                <li>Sobre</li>
                <li>Portifólio</li>
                <li>Contato</li>
            </ul>
        </div>
    );
}