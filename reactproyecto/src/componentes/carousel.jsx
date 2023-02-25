import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "../css/estilos.css";

const Carousel = () => {
  /**useState para almacenar el arreglo de imagenes que esta en assets */
  const [arreglo, setArreglo] = useState([]);

  /**useEffect para llamada de axios al json-server */
  useEffect(() => {
    const llenarArreglo = async () => {
      try {
        const res = await axios.get("http://localhost:5555/imagen");

        if (res.status === 200) {
          console.log(res.data);
          setArreglo(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    llenarArreglo();
  }, []);

  return (

    <div className="container-fluid w-100 miCarousel mt-2">
      <div className="row">
        <h1 className="h1 text-center">Los destinos mas elegidos por nuestros clientes</h1>
        </div>
      <motion.div drag="x" dragConstraints={{ right: 900, left: -10200 }} className="d-flex justify-content-between align-items-center flex-nowrap">
      {arreglo.map((e, index) => {
        return (
            <motion.div className="item mx-1 rounded-5" key={index}>
              <div className="col-3 miTarjeta p-1 m-5">
                <img
                  src={`../assets/${e.src}`}
                  alt="imagen"
                  className="miImagen"
                />
                <div className="body mt-2">
                  <h4 className="h4 text-center">{e.title}</h4>
                </div>
              </div>
            </motion.div>
        );
      })}
      </motion.div>
    </div>
  );
};

export default Carousel;
