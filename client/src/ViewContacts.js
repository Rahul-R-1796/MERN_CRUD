import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditContacts from './EditContacts';
import './App.css';
import Header from './Header'; 
import Footer from './Footer'; 

const ViewContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  const fetchContacts = async () => {
    try {
      const response = await axios.get('https://mern-crud-server-p44d.onrender.com/api/contacts');
      setContacts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleEdit = (contact) => {
    setEditingContact(contact);
  };

  const handleCancelEdit = () => {
    setEditingContact(null);
  };

  const handleUpdateContact = (updatedContact) => {
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact._id === updatedContact._id ? updatedContact : contact
      )
    );
    setEditingContact(null);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://mern-crud-server-p44d.onrender.com/api/contacts/${id}`);
      setContacts((prevContacts) =>
        prevContacts.filter((contact) => contact._id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      < Header/>
      <h1>View Contacts</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact._id}>
            <div>
              {contact.name} - {contact.mobileNo} - {contact.email} - {contact.address}
            </div>
            <div className="button-container">
              <button className="button edit-button" onClick={() => handleEdit(contact)}>Edit</button>
              <button className="button delete-button" onClick={() => handleDelete(contact._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      {editingContact && (
        <div className="popup-container">
          <div className="popup">
            <EditContacts
              contact={editingContact}
              onCancel={handleCancelEdit}
              onUpdate={handleUpdateContact}
            />
          </div>
        </div>
      )}<Footer/>
    </div>
  );
};

export default ViewContacts;
