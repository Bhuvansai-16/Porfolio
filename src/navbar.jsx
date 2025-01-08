import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <ul className={menuOpen ? 'nav-menu open' : 'nav-menu'}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/About" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        <li><Link to="/Games" onClick={() => setMenuOpen(false)}>Games</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
