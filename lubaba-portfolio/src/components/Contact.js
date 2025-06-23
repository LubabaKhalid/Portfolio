import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    username: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent!\nName: ${formData.username}\nMessage: ${formData.message}`);
    setFormData({ username: '', message: '' });
  };

  return (
    <div className="contact-page">
      <form onSubmit={handleSubmit}>
        <h2>Contact Us</h2>

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your name"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <input
          type="text"
          id="message"
          name="message"
          placeholder="Enter your message here"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <input type="submit" value="Send" />
      </form>

      <div className="contact-info">
        <p>📧 lubabalubaba815@gmail.com</p>
        <p>📞 0303-2220241</p>
      </div>
    </div>
  );
};

export default Contact;
