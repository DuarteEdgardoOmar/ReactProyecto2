import React, { useEffect, useState } from "react";
import LOGO from "../images/Logo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

import { Outlet, Link } from "react-router-dom";
import axios from "axios";


const Navbar = () => {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    let path = "http://localhost:5555/cart";

    const cargar_cart = async () => {
      try {
        const response = await axios.get(path);
        setCart(response.data);
      } catch (error) {
        console.log("no hay datos");
      }
    };
    cargar_cart();
  },[]);

  return (
    <div className="container-fluid w-100">
      <header>
        <a href="http://localhost:3000/">
          <div className="logo">
            <img src={LOGO} alt="logo" width="150" />
          </div>
        </a>
        <ul>
          <li>
            <a href="http://localhost:3000/">DESTINOS</a>
          </li>
          <li>
            <a href="http://localhost:3000/">GRUPALES</a>
          </li>
          <li>
            <a href="http://localhost:3000/">AUTOS</a>
          </li>
          <li>
            <Link to="seguros">SEGUROS</Link>
          </li>
          <li>
            <Link to="contacto">Contacto</Link>
          </li>
          <li>
            <Link to="shoppingCar">Ofertas</Link>
          </li>
        </ul>
        <div className="cart">
          <Link to="shoppingCar">
            <box-icon name="cart"></box-icon>
            <span className="item_total">{cart.length}</span>
          </Link>
        </div>

        <Outlet />
      </header>
    </div>
  );
};

export default Navbar;
