import "./TestimonialCard.css";
import img1 from "../../images/review-3.jpg";

export default function TestimonialCard() {
  return (
    <>
      <div className="tesimonial-card p-4 border-0 bg-white rounded mx-auto">
        <img src={img1} alt="" className="client-img rounded-circle mb-3" />
        <div className="card-body text-dark text-justify">
          <h3 className="card-title fw-bold text-light">John Doe</h3>
          <p className="card-subtitle fw-semibold my-2">React Developer</p>
          <p className="card-text fs-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam,
            animi? Eveniet laudantium blanditiis perspiciatis, tempore placeat
            unde ab fugit, dignissimos tempora quisquam voluptates explicabo
            labore, pariatur temporibus distinctio totam enim.
          </p>
        </div>
      </div>
    </>
  );
}
