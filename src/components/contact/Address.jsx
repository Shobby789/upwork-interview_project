import React from "react";

export default function Address() {
  return (
    <>
      <div className="address-box rounded py-5">
        <div className="fieldName mx-auto rounded-pill">
          <h6>Address</h6>
        </div>
        <h6 className="mx-auto">London, Baker Street, 221b</h6>
        <div className="fieldName mx-auto rounded-pill">
          <h6>Email</h6>
        </div>
        <h6 className="mx-auto">invento@gmail.com</h6>
        <div className="fieldName mx-auto rounded-pill">
          <h6>Phone</h6>
        </div>
        <h6 className="mx-auto">+92 212 422-1417</h6>
        <div className="fieldName mx-auto rounded-pill">
          <h6>Socials</h6>
        </div>
        <p className="text-center">
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
