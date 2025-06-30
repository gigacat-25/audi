import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import auditoriumData from '../data/auditoriumData';

function BookingForm() {
  const { auditoriumId } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', date: '', time: '', duration: '' });
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, date, time, duration } = form;
    if (!name || !email || !date || !time || !duration) {
      return setError('All fields are required.');
    }

    const auditorium = auditoriumData.find(a => a.id === auditoriumId);
    auditorium.bookings.push({ ...form });

    localStorage.setItem('lastBooking', JSON.stringify({ ...form, auditorium: auditorium.name }));
    navigate('/confirmation');
  };

  return (
    <div className="form-container">
      <h2>Book {auditoriumData.find(a => a.id === auditoriumId)?.name}</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        {['name', 'email', 'date', 'time', 'duration'].map(field => (
          <input
            key={field}
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            onChange={handleChange}
          />
        ))}
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default BookingForm;
