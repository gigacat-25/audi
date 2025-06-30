import React from 'react';

function Confirmation() {
  const data = JSON.parse(localStorage.getItem('lastBooking'));

  return (
    <div className="confirmation">
      <h2>Booking Confirmed!</h2>
      <p>Auditorium: {data.auditorium}</p>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Date: {data.date}</p>
      <p>Time: {data.time}</p>
      <p>Duration: {data.duration} hour(s)</p>
    </div>
  );
}

export default Confirmation;
