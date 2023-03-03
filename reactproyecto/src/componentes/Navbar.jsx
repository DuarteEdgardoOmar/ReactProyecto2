import LOGO from "../images/Logo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, Link } from "react-router-dom";
import { useAppContext } from "../AppProvaider";

const Navbar = () => {

  const {itemsEnCarrito}=useAppContext()

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
            <Link to="destinos">DESTINOS</Link>
          </li>
          <li>
            <Link to="grupales">GRUPALES</Link>
          </li>
          <li>
            <Link to="autos">AUTOS</Link>
          </li>
          <li>
            <Link to="seguros">SEGUROS</Link>
          </li>
          <li>
            <Link to="contacto">Contacto</Link>
          </li>
        </ul>
        <div className="cart">
          <Link to="shoppingCar">
            <box-icon name="cart"></box-icon>
            <span className="item_total">{itemsEnCarrito}</span>
          </Link>
        </div>

        <Outlet />
      </header>
    </div>
  );
};

export default Navbar;
