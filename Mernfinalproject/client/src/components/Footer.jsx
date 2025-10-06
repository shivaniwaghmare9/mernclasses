


const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="font-bold text-lg mb-4">Best Doctor Appointment</h2>
          <p>Your health is our priority. Book appointments easily with top-rated doctors near you.</p>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-4">Quick Links</h2>
          <ul>
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-4">Contact Info</h2>
          <p>Email: support@bestdoctor.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Location: New York, USA</p>
        </div>
      </div>
      <div className="text-center py-4 bg-blue-700 text-sm">
        &copy; {new Date().getFullYear()} Best Doctor Appointment. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
