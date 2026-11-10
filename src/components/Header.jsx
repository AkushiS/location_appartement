import { Link, NavLink } from "react-router";
import logo from "../assets/LOGO.png";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo Kasa" />
      </Link>

      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">À Propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
