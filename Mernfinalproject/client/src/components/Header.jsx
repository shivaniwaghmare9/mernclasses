
import React, { useState } from "react";
import { Button, Modal, Form, Navbar, Nav, Container, FormControl, NavDropdown } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import docimg from "../images/doctor.jpeg";
import mainheading from "../images/mainheading.png";
import "../styles/Header.css";

const Header = () => {
  const [regInput, setRegInput] = useState({});
  const [image, setImage] = useState(null);
  const [showReg, setShowReg] = useState(false);

  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  const navigate = useNavigate();

  const handleRegInput = (e) => {
    const { name, value } = e.target;
    setRegInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const submitRegistration = async (e) => {
    e.preventDefault();
    const api = `${import.meta.env.VITE_API_URL}/doctor/doctorsave`;
    if (!image) {
      toast.error("Please select an image");
      return;
    }
    const formData = new FormData();
    formData.append("file", image);
    for (const key in regInput) {
      formData.append(key, regInput[key]);
    }
    try {
      const res = await axios.post(api, formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      console.log(res.data);
      setShowReg(false);
      toast.success("Registered successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Registration failed");
    }
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    const api = `${import.meta.env.VITE_API_URL}/doctor/doctorlogin`;
    try {
      const res = await axios.post(api, { email: emailLogin, password: passwordLogin });
      console.log(res.data);
      if (res.data.success) {
        const doc = res.data.doctor;
        localStorage.setItem("docname", doc.doctorname);
        localStorage.setItem("docid", doc._id);
        navigate("/doctordashboard");
        setShowLogin(false);
      } else {
        toast.error(res.data.msg || "Login failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Login error");
    }
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand href="/">
            <img src={docimg} alt="Logo" className="logo-img" />
            <img src={mainheading} alt="Heading" className="heading-img ms-2" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            <Form className="d-flex me-3">
              <FormControl
                type="search"
                placeholder="Search doctors, speciality..."
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav>
              <Button variant="primary" className="me-2" onClick={() => setShowLogin(true)}>
                Login
              </Button>
              <Button variant="secondary" onClick={() => setShowReg(true)}>
                Register
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Registration Modal */}
      <Modal show={showReg} onHide={() => setShowReg(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Doctor Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitRegistration}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" type="text" onChange={handleRegInput} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Specialization</Form.Label>
              <Form.Select name="speciality" onChange={handleRegInput} required>
                <option value="">Select specialization</option>
                <option value="Cardiologist">Cardiologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
                <option value="Neurologist">Neurologist</option>
                <option value="General Physician">General Physician</option>
                {/* add more */}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control name="city" type="text" onChange={handleRegInput} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control name="address" type="text" onChange={handleRegInput} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contact</Form.Label>
              <Form.Control name="contact" type="text" onChange={handleRegInput} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" type="email" onChange={handleRegInput} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" onChange={handleRegInput} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control type="file" accept="image/*" onChange={handleImageChange} required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Login Modal */}
      <Modal show={showLogin} onHide={() => setShowLogin(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Doctor Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={emailLogin}
                onChange={(e) => setEmailLogin(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={passwordLogin}
                onChange={(e) => setPasswordLogin(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <ToastContainer position="top-center" />
    </>
  );
};

export default Header;
