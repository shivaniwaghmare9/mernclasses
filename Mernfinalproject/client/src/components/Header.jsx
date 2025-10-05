import mainheading from "../images/doctor.png";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import backendUrl from "../utils/backendUrl";
import "../styles/Header.css";

const Header = () => {
  const [input, setInput] = useState({});
  const [image, setImage] = useState("");
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [email1, setEmail1] = useState("");
  const [password1, setPassword1] = useState("");
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); // for responsive menu

  const handleClose = () => setShow(false);
  const handleClose1 = () => setShow1(false);
  const handleShow = () => setShow(true);
  const handleShow1 = () => setShow1(true);

  const navigate = useNavigate();

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return alert("Please select an image");

    const api = `${backendUrl}/doctor/doctorsave`;
    const formData = new FormData();
    formData.append("file", image);
    for (let key in input) {
      formData.append(key, input[key]);
    }

    try {
      await axios.post(api, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setShow(false);
      toast.info("You are successfully registered!");
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit1 = async (e) => {
    e.preventDefault();
    try {
      const api = `${backendUrl}/doctor/doctorlogin`;
      const response = await axios.post(api, { email: email1, password: password1 });
      localStorage.setItem("docname", response.data.doctorname);
      localStorage.setItem("docid", response.data._id);
      navigate("/doctordashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* ✅ Navbar with hamburger */}
      <nav className="custom-navbar">
        <div className="nav-left">
          <img src={mainheading} alt="logo" className="nav-logo" />
        </div>

        {/* ☰ Hamburger Icon */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </div>

        {/* Search Bar */}
        <div className={`nav-center ${menuOpen ? "show" : ""}`}>
          <input
            type="text"
            placeholder="Search doctors, specialties..."
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button variant="outline-light" className="search-btn">Search</Button>
        </div>

        {/* Login/Register Buttons */}
        <div className={`nav-right ${menuOpen ? "show" : ""}`}>
          <Button variant="outline-light" className="nav-btn" onClick={handleShow1}>Login</Button>
          <Button variant="light" className="nav-btn register-btn" onClick={handleShow}>Register</Button>
        </div>
      </nav>

      {/* ✅ Registration Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Doctor Registration Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Enter Doctor Name</Form.Label>
              <Form.Control type="text" name="name" onChange={handleInput} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Select Specialization</Form.Label>
              <Form.Select name="speciality" onChange={handleInput}>
                <option>Open this select menu</option>
                <option value="Cardiologist">Cardiologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Radiologist">Radiologist</option>
                <option value="General Physician">General Physician</option>
                <option value="ENT Specialist">ENT Specialist</option>
                <option value="Dentist">Dentist</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Surgeon">Surgeon</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Enter City</Form.Label>
              <Form.Control type="text" name="city" onChange={handleInput} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Clinic Address</Form.Label>
              <Form.Control type="text" name="address" onChange={handleInput} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Upload Doctor Image</Form.Label>
              <Form.Control type="file" name="file" onChange={handleImage} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="text" name="contact" onChange={handleInput} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" onChange={handleInput} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" onChange={handleInput} />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* ✅ Login Modal */}
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Doctor Login Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit1}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={email1} onChange={(e) => setEmail1(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={password1} onChange={(e) => setPassword1(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">Login</Button>
          </Form>
        </Modal.Body>
      </Modal>

      <ToastContainer />
    </>
  );
};

export default Header;
