import "../styles/layout/header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="header__menu">
          <li className="header__menu-item">
            <NavLink className="header__menu-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink className="header__menu-link" to="/aboutme">
              About me
            </NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink className="header__menu-link" to="/proyects">
              Proyects
            </NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink className="header__menu-link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
