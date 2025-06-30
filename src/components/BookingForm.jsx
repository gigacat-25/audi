
import { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    reason: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push(formData);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    setSubmitted(true);
  };

  if (submitted) return <p>Booking successful!</p>;

  return (
    <form onSubmit={handleSubmit}>
      <input required placeholder="Name" name="name" onChange={handleChange} /><br />
      <input required type="email" placeholder="Email" name="email" onChange={handleChange} /><br />
      <input required type="date" name="date" onChange={handleChange} /><br />
      <input required type="time" name="time" onChange={handleChange} /><br />
      <textarea required placeholder="Purpose" name="reason" onChange={handleChange}></textarea><br />
      <button type="submit">Submit Booking</button>
    </form>
  );
}
