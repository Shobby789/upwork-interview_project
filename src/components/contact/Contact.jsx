import Address from "./Address";
import "./Contact.css";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <>
      <div
        className="container-fluid contact-section py-5 text-center text-white"
        id="contact"
      >
        <h5 className="text-uppercase">LEAVE A REPLY OR</h5>
        <div className=" mb-3 rounded-pill mx-auto" id="line"></div>
        <h1 className="fw-bold">Contact Us</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12 px-3">
              <Address />
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12 px-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
