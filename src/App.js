import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import './styles/Headers.css';
import './styles/Home.css';
import './styles/PartyOrdering.css';
import './styles/Layouts.css';
import './styles/Footers.css';
import Header from "./components/headers/Header";
import Footer from "./components/footers/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import PartyOrdering from "./components/pages/PartyOrdering";
import ContactUs from "./components/pages/ContactUs";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/partyordering" element={<PartyOrdering />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
