import bodyImg from '../assets/body-img.jpg'

export const Body = () => {
  return (
    <section className="header container">
      <div className="header-left">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <button className="body-button">Reserve Table</button>
      </div>
      <img
        src={bodyImg}
        alt="Body-img"
        className="body-img"
      />
    </section>
  );
};
