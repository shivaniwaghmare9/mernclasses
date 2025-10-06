
import { useState } from 'react';
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">MediCare</h1>

      <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}
          onClick={() => setIsMobile(false)}>
        <li><a href="/">Home</a></li>
        <li><a href="/doctors">Doctors</a></li>
        <li><a href="/appointments">Appointments</a></li>
        <li><a href="/contact">Contact</a></li>
        
      </ul>

      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <>&#10005;</> : <>&#9776;</>}
      </button>
    </nav>
  );
};

export default Navbar;
