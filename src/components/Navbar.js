import { Link } from "react-router-dom";
import "./Navbar.css"; 

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <h1 className="logo">
          <Link to="/">StreamList</Link>
        </h1>
        <ul className="nav-links">
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
