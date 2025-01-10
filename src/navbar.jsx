<<<<<<< HEAD
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle

  return (
    <nav>
      {/* Hamburger Menu for Mobile */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen((prevState) => !prevState)}
      >
        ☰
      </div>

      {/* Navbar Links */}
      <ul className={menuOpen ? "nav-menu open" : "nav-menu"}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/games" onClick={() => setMenuOpen(false)}>
            Games
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
=======
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle

  return (
    <nav>
      {/* Hamburger Menu for Mobile */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen((prevState) => !prevState)}
      >
        ☰
      </div>

      {/* Navbar Links */}
      <ul className={menuOpen ? "nav-menu open" : "nav-menu"}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/games" onClick={() => setMenuOpen(false)}>
            Games
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
>>>>>>> 5a7a55546c51f4b79b7ce2f7aff24278c8aca90d
