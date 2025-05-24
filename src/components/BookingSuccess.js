import { Link } from 'react-router-dom';

export const BookingSuccess = () => {
  return (
    <div className="success-wrapper">
      <div className="success-box">
        <h1>Booking Confirmed!</h1>
        <p>Thank you for your reservation. We look forward to seeing you!</p>
        <Link to="/" className="home-button">
          Return to Home
        </Link>
      </div>
    </div>
  );
};
