import { useState } from "react";
import "./Contact.css";

export default function ContactForm() {
  const [fromDetail, setFormDetail] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [flag, setFlag] = useState(true);
  const { firstName, lastName, email, phoneNumber, message } = fromDetail;

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormDetail((values) => ({ ...values, [name]: value }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phoneNumber, message } = fromDetail;
    if (firstName && lastName && email && phoneNumber && message) {
      console.log(fromDetail);
      setFormDetail({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
      alert("Form Submitted");
    } else {
      // alert("Please fill in the fields");
      if (firstName && lastName && email && phoneNumber && message) {
        console.log("Ok");
        setFlag(true);
      } else {
        setFlag(false);
      }
    }
  };
  return (
    <>
      <form onSubmit={onSubmitHandler} className="pt-5 py-5 contact-form px-3">
        <div className="row mb-2">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <input
              type="text"
              className="text-white w-100 py-3 inputField"
              style={{ background: "transparent" }}
              placeholder="First Name*"
              name="firstName"
              value={fromDetail.firstName}
              onChange={onChangeHandler}
            />
            {flag ? (
              <></>
            ) : (
              <>
                <p className="text-start mt-1 text-danger">
                  Please Enter Your First Name
                </p>
              </>
            )}
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <input
              type="text"
              className="text-white w-100 py-3 inputField"
              placeholder="Last Name*"
              style={{ background: "transparent" }}
              name="lastName"
              value={fromDetail.lastName}
              onChange={onChangeHandler}
            />
            {flag ? (
              <></>
            ) : (
              <>
                <p className="text-start mt-1 text-danger">
                  Please Enter Your Last Name
                </p>
              </>
            )}
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <input
              type="text"
              className="w-100 text-white py-3 inputField"
              placeholder="Email*"
              style={{ background: "transparent" }}
              name="email"
              value={fromDetail.email}
              onChange={onChangeHandler}
            />
            {flag ? (
              <></>
            ) : (
              <>
                <p className="text-start mt-1 text-danger">
                  Please Enter Your Email Address
                </p>
              </>
            )}
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <input
              type="text"
              className="text-white w-100 py-3 inputField"
              placeholder="Phone Number*"
              style={{ background: "transparent" }}
              name="phoneNumber"
              value={fromDetail.phoneNumber}
              onChange={onChangeHandler}
            />
            {flag ? (
              <></>
            ) : (
              <>
                <p className="text-start mt-1 text-danger">
                  Please Enter Your Phone Number
                </p>
              </>
            )}
          </div>
        </div>
        <div className="row px-2 mb-4">
          <textarea
            className="text-white inputField"
            name="message"
            id="message"
            rows="3"
            placeholder="Your Message"
            style={{ background: "transparent" }}
            value={fromDetail.message}
            onChange={onChangeHandler}
          ></textarea>
          {flag ? (
            <></>
          ) : (
            <>
              <p className="text-start mt-1 text-danger">
                Please Enter Your Message
              </p>
            </>
          )}
        </div>
        <div className="row px-3 w-50 pt-5">
          <button className="formBtn py-2 fw-semibold rounded-pill border-0 py-1">
            Send Message
          </button>
        </div>
      </form>
    </>
  );
}
