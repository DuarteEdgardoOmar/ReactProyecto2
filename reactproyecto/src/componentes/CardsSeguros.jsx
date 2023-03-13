import React from "react";
import Card from "./Card";

import image1 from "../images/assistcard.jpeg";
import image2 from "../images/travelace.jpeg";
import image3 from "../images/universal-assistance.jpeg";
import image4 from "../images/alMundo.jpeg";


const cards = [
  {
    id: 1,
    title: "Assist Card",
    image: image1,
    url: "https://www.assistcard.com/ar",
    text: "ASSIST-CARD  ha diseñado diferentes productos de asistencia adecuados para Viajeros de Placer  y Viajeros de Negocios.",
  },
  {
    id: 2,
    title: "Travel Ace",
    image: image2,
    url: "https://www.travel-ace.com/ar-es/home.html",
    text: "Travel Ace ha creado distintos productos de asistencia ideales tanto para viajeros de placer como de negocios.",
  },
  {
    id: 3,
    title: "Universal Assistance",
    image: image3,
    url: "https://www.universal-assistance.com/ar-es/home.html",
    text: "Universal Assistance ofrece una amplia variedad de productos de asistencia para satisfacer las necesidades de los viajeros."
  },
  {
    id: 4,
    title: "Al Mundo",
    image: image4,
    url: "https://almundo.com.ar/",
    text: "Al Mundo ha desarrollado diversos productos de asistencia que se ajustan a las necesidades de los viajeros",
  },
];

function Cards() {
  return (
    <div className="container-fluid mt-5">
      <div className="row mt-4">
        {cards.map((card) => (
          <div className="col-md-6 col-lg-3 p-3" key={card.id}>
            <Card
              title={card.title}
              imageSource={card.image}
              url={card.url}
              text={card.text}
            ></Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;