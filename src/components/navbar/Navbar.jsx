import "./Navbar.css";
import logo from "../../images/Invento-logo-01.PNG";
import { RiMenu3Line } from "react-icons/ri";

export default function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg position-fixed"
        style={{ zIndex: "10000" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand fs-3 fw-bold pt-0" href="#">
            <img src={logo} alt="" className="logo" />
            {/* invento */}
          </a>
          <button
            className="navbar-toggler border-0 outline-none text-white pe-0 me-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon border-0 text-dark outline-none" /> */}

            <RiMenu3Line className="text-dark fs-2 pe-0 me-0" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item px-3">
                <a
                  className="nav-link active fs-5"
                  aria-current="page"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item px-3">
                <a href="#about" className="nav-link text-dark fs-5">
                  About
                </a>
              </li>
              <li className="nav-item px-3">
                <a href="#services" className="nav-link text-dark fs-5">
                  Services
                </a>
              </li>
              <li className="nav-item px-3">
                <a href="#portfolio" className="nav-link text-dark fs-5">
                  Portfolio
                </a>
              </li>
              <li className="nav-item px-3">
                <a href="#contact" className="nav-link text-dark fs-5">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
