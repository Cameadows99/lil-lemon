import logo from '../assets/logo.png'; // replace with your actual logo path

export const Footer = () => {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src={logo} alt="Little Lemon Logo" />
          <p>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
        </div>

        <div>
          <h3>Important Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reserve">Reservations</a></li>
            <li><a href="/order">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul>
            <li>Address: 123 Town Street, Chicago</li>
            <li>Phone: +0 123 456 789</li>
            <li>Email: little@lemon.com</li>
          </ul>
        </div>

        <div>
          <h3>Social Media Links</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
      </section>
    </footer>
  );
};
