import TestimonialSlider from "./TestimonialSlider";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <>
      <div className="container-fluid pb-5 text-white text-center">
        <h5 className="text-uppercase mx-auto fw-bold">WHAT OUR CLIENTS</h5>
        <div className="line mx-auto mb-3 rounded-pill"></div>
        <h1 className="text-uppercase fw-bold mx-auto">Say About Us</h1>
        <div className="container d-flex justify-content-center flex-wrap align-items-center pt-5">
          <TestimonialSlider />
        </div>
      </div>
    </>
  );
}
