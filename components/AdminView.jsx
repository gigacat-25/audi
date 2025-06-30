import React from 'react';
import auditoriumData from '../data/auditoriumData';

function AdminView() {
  return (
    <div className="admin-view">
      <h2>Admin - View All Bookings</h2>
      {auditoriumData.map(aud => (
        <div key={aud.id}>
          <h3>{aud.name}</h3>
          {aud.bookings.length === 0 ? (
            <p>No bookings yet.</p>
          ) : (
            <ul>
              {aud.bookings.map((b, i) => (
                <li key={i}>
                  {b.name} - {b.date} at {b.time} for {b.duration} hrs
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default AdminView;
