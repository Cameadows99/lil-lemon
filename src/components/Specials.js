import { Nav } from "./Nav";
export const Specials = () => {
  const items = [
    {
      name: "Greek salad",
      price: "$12.99",
      desc: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese.",
      img: "https://i.ibb.co/68c9bLv/greek-salad.jpg",
    },
    {
      name: "Bruschetta",
      price: "$5.99",
      desc: "Grilled bread smeared with garlic and seasoned with salt and olive oil.",
      img: "https://i.ibb.co/317GqZv/Bruchetta.png",
    },
    {
      name: "Lemon Dessert",
      price: "$4.78",
      desc: "This comes straight from grandma’s recipe book. Every last ingredient has been sourced.",
      img: "https://i.ibb.co/sm6MfcH/desert.jpg",
    },
  ];

  return (
    <div>
    <section id="specials" className="specials container">
      <div className="specials-header">
        <h2>This week’s specials!</h2>
        <button className="hero-button">Online Menu</button>
      </div>
      <div className="specials-cards">
        {items.map((item) => (
          <div className="card" key={item.name}>
            <img src={item.img} alt={item.name} />
            <div className="card-content">
              <h3>
                <span>{item.name}</span>
                <span>{item.price}</span>
              </h3>
              <p>{item.desc}</p>
              <button className="order-button">Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};
