import React from 'react';
import { Link } from 'react-router-dom';
import auditoriumData from '../data/auditoriumData';

function Home() {
  return (
    <div className="home">
      <h1>Auditorium Booking System</h1>
      <div className="auditorium-list">
        {auditoriumData.map(aud => (
          <div className="card" key={aud.id}>
            <img src={aud.image} alt={aud.name} />
            <h3>{aud.name}</h3>
            <p>{aud.description}</p>
            <Link to={`/book/${aud.id}`}>
              <button>Book Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
