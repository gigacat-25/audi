
import { useState } from 'react';
import BookingList from '../components/BookingList';

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (password === 'admin123') {
      setLoggedIn(true);
    } else {
      alert('Incorrect password');
    }
  };

  if (!loggedIn) {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>Admin Login</h2>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Admin Panel</h1>
      <BookingList />
    </div>
  );
}
