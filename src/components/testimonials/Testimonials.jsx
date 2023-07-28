import TestimonialSlider from "./TestimonialSlider";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <>
      <div className="container-fluid pb-5 text-white text-center">
        <h5 className="text-uppercase mx-auto fw-bold" data-aos="fade-up">
          WHAT OUR CLIENTS
        </h5>
        <div
          className="line mx-auto mb-3 rounded-pill"
          data-aos="fade-up"
        ></div>
        <h1 className="text-uppercase fw-bold mx-auto" data-aos="fade-up">
          Say About Us
        </h1>
        <div className="container d-flex justify-content-center flex-wrap align-items-center pt-5">
          <TestimonialSlider />
        </div>
      </div>
    </>
  );
}
