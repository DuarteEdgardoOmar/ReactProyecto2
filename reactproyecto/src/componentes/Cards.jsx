import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from 'axios'

const Cards = () => {


  const[arrayInfoCards, setArrayInfoCards]=useState([])

  useEffect(()=>{
    let path="https://json-server-vercel-peach.vercel.app/info-cards"

    const getInfoCards = async () =>{

      try {
        
        const res = await axios.get(path)

        setArrayInfoCards(res.data)

        console.log(res.data)

      } catch (error) {
        alert(error.message)
      }

    }

    getInfoCards()
  },[])


  return (
    <div className="container d-flex justify-content-center align-items-center mt-5 d-flex flex-column">
      <div className="container-fluid text-center">
        <h3>Informacion Oficial</h3>
      </div>
      <div className="row mt-4">
        {arrayInfoCards.map((card) => (
          <div className="col-md-6 col-lg-3" key={card.id}>
            <Card
              id={card.id}
              title={card.title}
              imageSource={`../assets/${card.image}`}
              url={card.url}
              text={card.text}
            ></Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
