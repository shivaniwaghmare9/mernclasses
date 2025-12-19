//=======================================NODEMAILER========================================================================

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BackendUrl from './utils/BackendUrl';
import axios from "axios";

const App = () => {
  const [input, setInput] = useState({});
  const [message, setMessage] = useState('');

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({ ...values, [name]: value }));
    console.log(input);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let api = `${BackendUrl}emailsend`;
    try {
      const response = await axios.post(api, input);
      setMessage('✅ Email sent successfully!');
    } catch (err) {
      setMessage('❌ Failed to send email.');
      console.error(err);
    }
  }

  return (
    <>
      <h2 className='h2'>Node Mailer</h2>
      <Form id="from">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Email</Form.Label>
          <Form.Control type="email" name="email" onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Enter Name</Form.Label>
          <Form.Control type="text" name="name" onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicComment">
          <Form.Label>Comment</Form.Label>
          <Form.Control type="text" name="comment" onChange={handleInput} />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Login
        </Button>
      </Form>

      {/* ✅ Message appears here */}
      {message && (
        <p style={{ textAlign: 'center', marginTop: '15px', color: message.includes('success') ? 'green' : 'red' }}>
          {message}
        </p>
      )}
    </>
  )
}

export default App;
