import React from "react";

export default function Address() {
  return (
    <>
      <div className="address-box rounded py-5">
        <div className="fieldName mx-auto rounded-pill">
          <h6 data-aos="fade-up">Address</h6>
        </div>
        <h6 className="mx-auto" data-aos="fade-up">
          London, Baker Street, 221b
        </h6>
        <div className="fieldName mx-auto rounded-pill">
          <h6 data-aos="fade-up">Email</h6>
        </div>
        <h6 className="mx-auto" data-aos="fade-up">
          invento@gmail.com
        </h6>
        <div className="fieldName mx-auto rounded-pill">
          <h6 data-aos="fade-up">Phone</h6>
        </div>
        <h6 className="mx-auto" data-aos="fade-up">
          +92 212 422-1417
        </h6>
        <div className="fieldName mx-auto rounded-pill">
          <h6 data-aos="fade-up">Socials</h6>
        </div>
        <p className="text-center" data-aos="fade-up">
          <a href="#" className="mx-2">
            <i className="fa-brands fa-facebook fs-4"></i>
          </a>
          <a href="#" className="mx-2">
            <i className="fa-brands fa-twitter fs-4"></i>
          </a>
          <a href="#" className="mx-2">
            <i className="fa-brands fa-linkedin fs-4"></i>
          </a>
          <a href="#" className="mx-2">
            <i className="fa-brands fa-instagram fs-4"></i>
          </a>
        </p>
      </div>
    </>
  );
}
