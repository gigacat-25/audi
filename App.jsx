import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BookingForm from "./components/BookingForm";
import Confirmation from "./components/Confirmation";
import AdminView from "./components/AdminView";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:auditoriumId" element={<BookingForm />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/admin" element={<AdminView />} />
      </Routes>
    </Router>
  );
}

export default App;
