import React, { useState } from 'react';
import styled from 'styled-components';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <ContactContainer>
      <h1>Contact Me</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </Form>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: auto;

  input, textarea {
    margin: 0.5rem 0;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  button {
    padding: 0.8rem;
    background: #61dafb;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
      background: #21a1f1;
    }
  }
`;

export default Contact;
