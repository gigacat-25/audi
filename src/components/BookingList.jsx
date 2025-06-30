
export default function BookingList() {
  const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');

  if (bookings.length === 0) return <p>No bookings found.</p>;

  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Name</th><th>Email</th><th>Date</th><th>Time</th><th>Reason</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map((b, i) => (
          <tr key={i}>
            <td>{b.name}</td>
            <td>{b.email}</td>
            <td>{b.date}</td>
            <td>{b.time}</td>
            <td>{b.reason}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
