
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Best Doctor Appointment</h2>
          <p>Your health is our priority. Book appointments easily with top-rated doctors near you.</p>
        </div>
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contact Info</h2>
          <p>Email: support@bestdoctor.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Location: New York, USA</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Best Doctor Appointment. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
