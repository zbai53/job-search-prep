import React from "react";
import { Link } from "react-router-dom";
import './Laptop.css'


const Laptop: React.FC = () => {
  const cards = [
    {
      id: 1,
      imgSrc: "https://p4-ofp.static.pub//fes/cms/2024/09/12/6prab6eq5vajcznlclffvi6ycvte9s844849.png",
      title: "Legion Slim 5 Gen 8 AMD with RTX™ 4060",
      text: "AMD Ryzen™ 9 7940HS Processor (4.00 GHz up to 5.20 GHz) Windows 11 Home 64 NVIDIA® GeForce RTX™ 4060 Laptop GPU 8GB GDDR6",
      link: "#",
    },
    {
      id: 2,
      imgSrc: "https://via.placeholder.com/150",
      title: "Card Title 2",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      link: "#",
    },
    {
      id: 3,
      imgSrc: "https://via.placeholder.com/150",
      title: "Card Title 3",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content.",
      link: "#",
    },
    {
      id: 4,
      imgSrc: "https://via.placeholder.com/150",
      title: "Card Title 4",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      link: "#",
    },
  ];
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {cards.map((card) => (
        <div className="col" key={card.id}>
          <div className="card">
            <img src={card.imgSrc} className="card-img-top" alt={card.title} />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.text}</p>
              <Link to={`/product/${card.id}`} className="btn btn-primary">
                Product Detail
              </Link>
              <a href={card.link} className="btn btn-primary addCartBtn">
                Add To Cart
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Laptop;