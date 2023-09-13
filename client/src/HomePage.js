import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './App.css';


const HomePage = () => {
  const navigate = useNavigate(); // Get the navigate function

  const [contactData, setContactData] = useState({
    name: '',
    mobileNo: '',
    email: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://mern-crud-server-p44d.onrender.com/api/contacts', contactData);
      navigate('/view-contacts'); // Use navigate to navigate to the desired URL
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Contact App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={contactData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="mobileNo"
          placeholder="Mobile No"
          value={contactData.mobileNo}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={contactData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={contactData.address}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Contact</button>
      </form>
      <button className="view-contacts-button" onClick={() => navigate('/view-contacts')}>
        View Contacts
      </button>
    </div>
  );
};

export default HomePage;
