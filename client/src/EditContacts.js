import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const EditContacts = ({ contact, onCancel, onUpdate }) => {
  const [updatedContact, setUpdatedContact] = useState(contact);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedContact({ ...updatedContact, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`https://mern-crud-server-p44d.onrender.com/api/contacts/${contact._id}`, updatedContact);
      onUpdate(updatedContact);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div>
      <h2>Edit Contact</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={updatedContact.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="mobileNo"
          placeholder="Mobile No"
          value={updatedContact.mobileNo}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={updatedContact.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={updatedContact.address}
          onChange={handleChange}
        />
      </form>
        <button className="update-button" onClick={handleUpdate}>Update</button>
        <button className="cancel-button" onClick={onCancel}>Cancel</button>

    </div>
  );
};

export default EditContacts;
