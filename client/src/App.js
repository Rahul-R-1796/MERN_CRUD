import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ViewContacts from './ViewContacts';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/view-contacts" element={<ViewContacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
