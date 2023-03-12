import React, { useState, useEffect } from "react";
import "../css/estilos.css";
import axios from "axios";
const Body = () => {
  const [infoBody, setInfoBody] = useState([]);

  useEffect(() => {
    const getInfoBody = async () => {
      let path = "https://json-server-vercel-peach.vercel.app/info-body";
      try {
        const res = await axios.get(path);

        setInfoBody(res.data);
        console.log(res.data);
      } catch (error) {
        alert(error.message);
      }
    };

    getInfoBody();
  }, []);

  return (
    <div className="Body container-fluid">
      <h1 className="titulo1"> ¿Por qué Nosotros?</h1>
      <div className="elegir5soles">
        <div className="row">
          {infoBody.map((e) => {
            return (
              <div className="col-12 col-lg-4 px-5" key={e.id}>
                <div className=" text-center col-12 contenedor-icono">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-brightness-alt-high-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d={e.imagen} />
                  </svg>
                </div>
                {e.parrafo}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
