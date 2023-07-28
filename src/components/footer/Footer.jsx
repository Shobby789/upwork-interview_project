import "./Footer.css";
import { BiSolidPhoneCall } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import { BiSolidTime } from "react-icons/bi";

export default function Footer() {
  return (
    <>
      <footer className="container pt-5 py-1">
        <div className="row text-light py-2">
          <div className="col-lg-4 col-md-4 col-sm-12 mb-3 px-4 d-flex flex-column justify-content-evenly">
            <h3 className="fw-bold mt-2">About us</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum sunt
              deleniti ullam eaque, tenetur hic natus beatae neque asperiores
              voluptatibus.
            </p>
            <p className="">
              <a href="#" className="mx-2">
                <i className="fa-brands fa-facebook fs-5 socialLink"></i>
              </a>
              <a href="#" className="mx-2">
                <i className="fa-brands fa-twitter fs-5 socialLink"></i>
              </a>
              <a href="#" className="mx-2">
                <i className="fa-brands fa-linkedin fs-5 socialLink"></i>
              </a>
              <a href="#" className="mx-2">
                <i className="fa-brands fa-instagram fs-5 socialLink"></i>
              </a>
            </p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 mb-3 px-4 d-flex flex-column justify-content-evenly">
            <h3 className="fw-bold">Contact us</h3>
            <a
              href="tele:1234567890"
              className="text-light text-decoration-none"
            >
              <BiSolidPhoneCall className="fs-5 me-2" />
              1234567890
            </a>

            <a
              href="mailto:invento@gmail.com"
              className="text-light text-decoration-none"
            >
              <GrMail className="fs-5 me-2" />
              invento@gmail.com
            </a>

            <a href="##" className="text-light text-decoration-none">
              <IoLocationSharp className="fs-5 me-2" />
              Karachi, Pakistan
            </a>
            <a href="##" className="text-light text-decoration-none">
              <BiSolidTime className="fs-5 me-2" /> Monday - Friday: 9am - 8pm
            </a>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 mb-3 px-4 d-flex flex-column justify-content-evenly">
            <h3 className="fw-bold">Our Services</h3>
            <a href="#home" className="text-decoration-none text-light">
              Home
            </a>
            <a href="#about" className="text-decoration-none text-light">
              About us
            </a>
            <a href="#services" className="text-decoration-none text-light">
              Services
            </a>
            <a href="#portfolio" className="text-decoration-none text-light">
              Portfolio
            </a>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-12 mb-3 px-4 d-flex flex-column justify-content-evenly">
            <h3 className="fw-bold">Quick Links</h3>
            <a href="#home" className="text-decoration-none text-light">
              Case Study
            </a>
            <a href="#about" className="text-decoration-none text-light">
              Hiring
            </a>
            <a href="#services" className="text-decoration-none text-light">
              Contact
            </a>
            <a href="#portfolio" className="text-decoration-none text-light">
              FAQ
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
