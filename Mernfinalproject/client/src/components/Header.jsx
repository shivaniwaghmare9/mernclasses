// src/components/Header.jsx
import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Header.css";
import mainheading from "../images/doctor.png";
import backendUrl from "../utils/backendUrl";

const Header = () => {
  const [input, setInput] = useState({});
  const [image, setImage] = useState("");
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [email1, setEmail1] = useState("");
  const [password1, setPassword1] = useState("");
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return toast.warn("Please select an image");

    const api = `${backendUrl}/doctor/doctorsave`;
    const formData = new FormData();
    formData.append("file", image);
    Object.keys(input).forEach((key) => formData.append(key, input[key]));

    try {
      await axios.post(api, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setShow(false);
      toast.success("Doctor registered successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Registration failed.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const api = `${backendUrl}/doctor/doctorlogin`;
      const res = await axios.post(api, { email: email1, password: password1 });
      localStorage.setItem("docname", res.data.doctorname);
      localStorage.setItem("docid", res.data._id);
      navigate("/doctordashboard");
    } catch (err) {
      console.error(err);
      toast.error("Login failed!");
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img src={mainheading} alt="logo" className="navbar-logo" />
          <h1 className="navbar-brand">MediCare</h1>
        </div>

        <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <a href="/">Home</a>
          <a href="/doctors">Doctors</a>
          <a href="/appointments">Appointments</a>
          <a href="/contact">Contact</a>
        </div>

        <div className={`navbar-actions ${menuOpen ? "active" : ""}`}>
          <input
            type="text"
            placeholder="Search doctors..."
            className="navbar-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button variant="outline-light" className="search-btn">Search</Button>
          <Button variant="outline-light" onClick={() => setShow1(true)} className="nav-btn">Login</Button>
          <Button variant="light" onClick={() => setShow(true)} className="nav-btn register-btn">Register</Button>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        </div>
      </nav>

      {/* Registration Modal */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Doctor Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Doctor Name</Form.Label>
              <Form.Control type="text" name="name" onChange={handleInput} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Specialization</Form.Label>
              <Form.Select name="speciality" onChange={handleInput}>
                <option>Select specialization</option>
                <option value="Cardiologist">Cardiologist</option>
                <option value="Dentist">Dentist</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gynecologist">Gynecologist</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" name="city" onChange={handleInput} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Clinic Address</Form.Label>
              <Form.Control type="text" name="address" onChange={handleInput} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Doctor Image</Form.Label>
              <Form.Control type="file" onChange={handleImage} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contact</Form.Label>
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
            <Button variant="primary" type="submit">Register</Button>
          </Form>
        </Modal.Body>

<Modal.Footer>
  <Button variant="secondary" onClick={() => setShow(false)}>Cancel</Button>
</Modal.Footer>
      </Modal>

      {/* Login Modal */}
      <Modal show={show1} onHide={() => setShow1(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Doctor Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLogin}>
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

        <Modal.Footer>
  <Button variant="secondary" onClick={() => setShow1(false)}>Cancel</Button>
</Modal.Footer>
      </Modal>

      <ToastContainer />
    </>
  );
};

export default Header;