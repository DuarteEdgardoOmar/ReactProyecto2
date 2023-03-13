import LOGO from "../images/Logo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../AppProvaider";

const NavBar = () => {
  const { itemsEnCarrito } = useAppContext();

  const navigate = useNavigate()

  const handleClick=()=>{
    navigate('/')
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg w-100 mx-1">
        <div className="container col-lg-10 col-8">
          <div className="container col-lg-3">
            <a className="nav-bar brand" href="/" onClick={handleClick}>
              <div className="logo text-center">
                <img src={LOGO} alt="logo" width="150" onClick={handleClick}/>
              </div>
            </a>
          </div>
          <div
            className="collapse navbar-collapse container col-8"
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav justify-content-evenly w-100">
              <li>
                <Link to="destinos" className="nav-link">
                  DESTINOS
                </Link>
              </li>
              <li>
                <Link to="grupales" className="nav-link">
                  GRUPALES
                </Link>
              </li>
              <li>
                <Link to="autos" className="nav-link">
                  AUTOS
                </Link>
              </li>
              <li>
                <Link to="seguros" className="nav-link">
                  SEGUROS
                </Link>
              </li>
              <li>
                <Link to="contacto" className="nav-link">
                  CONTACTO
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="cart container col-2 col-lg-1 justify-content-center">
          <Link to="shoppingCar">
            <box-icon name="cart"></box-icon>
            <span className="item_total me-4">{itemsEnCarrito}</span>
          </Link>
        </div>
        <div className="col-1 col-lg-1 mx-2">
          <button
            className="navbar-toggler w-100"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <Outlet />
      </nav>
    </header>
  );
};

export default NavBar;
